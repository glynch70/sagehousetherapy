import { createHash } from "node:crypto";
import { appointmentOptions, appointmentFormats, appointmentDays } from "@/lib/appointments";
import { contactEmail } from "@/lib/site";

export const runtime = "nodejs";
const windowMs = 15 * 60 * 1000;
// Best-effort burst protection per warm instance, not a shared global quota.
const attempts = new Map<string, { count: number; until: number }>();
const fail = (status: number) => Response.json({ ok: false }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || ![new URL(request.url).origin, "https://sagehousetherapy.uk", "https://www.sagehousetherapy.uk"].includes(origin)) return fail(403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return fail(415);
  if (Number(request.headers.get("content-length") || 0) > 4096) return fail(413);
  let body: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return fail(400);
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      length += part.value.byteLength;
      if (length > 4096) { await reader.cancel(); return fail(413); }
      chunks.push(part.value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!body || typeof body !== "object" || Array.isArray(body)) return fail(400);
  } catch { return fail(400); }
  const fields = ["name", "email", "type", "format", "day", "availability", "website", "submissionId"] as const;
  if (fields.some((key) => typeof body[key] !== "string")) return fail(400);
  const value = Object.fromEntries(fields.map((key) => [key, (body[key] as string).trim()]));
  if (value.website || typeof body.startedAt !== "number" || Date.now() - body.startedAt < 3000 || Date.now() - body.startedAt > 86400000) return fail(400);
  if (!value.name || value.name.length > 80 || /[\r\n\x00-\x1f]/.test(value.name)) return fail(400);
  if (value.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value.email)) return fail(400);
  if (!(appointmentOptions as readonly string[]).includes(value.type) ||
      !(appointmentFormats as readonly string[]).includes(value.format) ||
      !(appointmentDays as readonly string[]).includes(value.day) ||
      value.availability.length > 180 || /[\r\n\x00-\x1f]/.test(value.availability) ||
      !/^[0-9a-f-]{36}$/i.test(value.submissionId)) return fail(400);
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return fail(503);
  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.until <= now) attempts.delete(key);
  const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const network = createHash("sha256").update(apiKey + ip).digest("hex");
  const entry = attempts.get(network) || { count: 0, until: now + windowMs };
  if (entry.count >= 5 || (!attempts.has(network) && attempts.size >= 2000)) return fail(429);
  entry.count++;
  attempts.set(network, entry);
  const text = [
    "New website appointment enquiry", "",
    "Name: " + value.name,
    "Reply email: " + value.email,
    "Enquiry: " + value.type,
    "Session format: " + value.format,
    "Preferred day: " + value.day,
    "Preferred days or times: " + (value.availability || "Flexible"),
    "", "This is an enquiry only. No appointment has been reserved.",
    "Reply to this email to contact the enquirer.",
  ].join("\n");
  const idempotencyKey = createHash("sha256").update(JSON.stringify(value)).digest("hex");
  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json", "Idempotency-Key": "sage-enquiry-" + idempotencyKey },
      body: JSON.stringify({
        from: "Sage House Therapy Website <website@enquiries.sagehousetherapy.uk>",
        to: [contactEmail],
        reply_to: value.email,
        subject: "Website appointment enquiry — Sage House Therapy",
        text,
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!result.ok) return fail(502);
    const response = await result.json();
    if (typeof response.id !== "string") return fail(502);
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch { return fail(502); }
}
