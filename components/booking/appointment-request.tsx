"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactEmail } from "@/lib/site";
import {
  appointmentOptions,
  appointmentFormats,
  appointmentDays,
  paymentPolicy,
  cancellationPolicy,
} from "@/lib/appointments";
import { useSearchParams } from "next/navigation";

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-dark-sage/35 bg-surface px-4 py-3 text-text outline-none transition focus:border-dark-sage focus:ring-2 focus:ring-dark-sage/25";
const appointmentTypes = appointmentOptions;

type RequestDetails = {
  name: string;
  email: string;
  type: string;
  availability: string;
  format: string;
  day: string;
};

export function AppointmentRequest() {
  const searchParams = useSearchParams();
  const availabilityRequest = searchParams.get("availability") === "check";
  const [details, setDetails] = useState<RequestDetails>({
    name: "",
    email: "",
    type: availabilityRequest
      ? "Ask about available spaces"
      : appointmentTypes[0],
    availability: "",
    format: appointmentFormats[0],
    day: appointmentDays[0],
  });
  const [review, setReview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");
  const [website, setWebsite] = useState("");
  const startedAt = useRef(0);
  const submissionId = useRef("");
  const sendingLock = useRef(false);
  const reviewHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => { startedAt.current = Date.now(); }, []);
  useEffect(() => {
    if (review) reviewHeading.current?.focus();
  }, [review, sent]);

  const message = [
    "Hello Claire,",
    "",
    `I would like to ask about: ${details.type}.`,
    "",
    `Name: ${details.name.trim()}`,
    `Reply email: ${details.email.trim()}`,
    `Session format: ${details.format}`,
    `Preferred day: ${details.day}`,
    `Preferred days or times: ${details.availability.trim() || "Flexible — please let me know what is available."}`,
    "",
    "Please let me know the available start times and the next steps for arranging this appointment.",
    "",
    "Thank you,",
    details.name.trim(),
  ].join("\n");
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Appointment enquiry — Sage House Therapy")}&body=${encodeURIComponent(message)}`;

  function handleReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied(false);
    setCopyError(false);
    setReview(true);
  }

  async function sendEnquiry() {
    if (sendingLock.current || sent) return;
    sendingLock.current = true;
    setSending(true);
    setSendError("");
    try {
      submissionId.current ||= crypto.randomUUID();
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, website, startedAt: startedAt.current, submissionId: submissionId.current }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("send failed");
      setSent(true);
    } catch {
      setSendError("Your enquiry could not be confirmed as sent. Please try again, or use the email option below. Your details are still here.");
    } finally {
      sendingLock.current = false;
      setSending(false);
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_20px_70px_rgba(67,67,67,0.06)] sm:p-10 lg:col-start-2 lg:row-start-1">
      <ol
        aria-label="Enquiry progress"
        className="mb-8 flex gap-6 border-b border-border pb-6 text-sm"
      >
        <li
          aria-current={!review ? "step" : undefined}
          className={!review ? "font-semibold text-text" : "text-text/65"}
        >
          01 · Your enquiry
        </li>
        <li
          aria-current={review ? "step" : undefined}
          className={review ? "font-semibold text-text" : "text-text/65"}
        >
          02 · Review & send
        </li>
      </ol>
      {review ? (
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-dark-sage">
            {sent ? "Enquiry sent" : "Ready to review"}
          </p>
          <h2
            ref={reviewHeading}
            tabIndex={-1}
            className="mt-3 text-4xl outline-none"
          >
            {sent ? "Thank you for getting in touch." : "Your message to Claire."}
          </h2>
          <p className="mt-4 leading-7 text-text/75">
            {sent
              ? "Your enquiry has been sent to Claire. She will reply to the email address you supplied to discuss availability. This does not reserve an appointment."
              : "Check your details, then send your enquiry directly to Claire."}
          </p>
          <div className="mt-6 rounded-2xl border border-border bg-background/50 p-5">
            <p className="mb-4 text-sm font-medium break-all">
              To: {contactEmail}
            </p>
            <p className="whitespace-pre-wrap break-words text-sm leading-7">
              {message}
            </p>
          </div>
          {!sent && <div className="mt-6">
            <Button onClick={sendEnquiry} disabled={sending} aria-busy={sending}>
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {sending ? "Sending…" : "Send enquiry to Claire"}
            </Button>
            {sendError && <p role="alert" className="mt-4 text-sm leading-6">{sendError}</p>}
            <p className="mt-4 text-sm leading-6 text-text/70">
              By sending, you ask Claire to contact you about this enquiry.
              {" "}<a href="/privacy" className="underline underline-offset-4">Website privacy</a>
            </p>
          </div>}
          {!sent && <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={emailHref} variant="secondary">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Open email to Claire
            </Button>
            <Button variant="secondary" onClick={copyMessage}>
              {copied ? (
                <Check className="mr-2 h-4 w-4" aria-hidden="true" />
              ) : (
                <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "Message copied" : "Copy message"}
            </Button>
          </div>}
          {!sent && <p role="status" className="mt-3 text-sm leading-6 text-text/75">
            {copied
              ? "Copied. Paste it into an email to Claire and send when you are ready."
              : copyError
                ? "Copy is unavailable. You can select the message above and copy it manually."
                : "If your email app does not open, copy the message into your usual email service."}
          </p>}
          {!sent && <Button
            disabled={sending}
            variant="secondary"
            className="mt-7"
            onClick={() => { submissionId.current = ""; setSendError(""); setReview(false); }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Edit enquiry
          </Button>}
        </div>
      ) : (
        <form onSubmit={handleReview} className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="enquiry-website">Leave this field empty</label>
            <input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
          </div>
          <div>
            <h2 className="text-4xl">Ask about a consultation or session.</h2>
            <p className="mt-3 leading-7 text-text/75">
              Choose a session or ask about available spaces. Claire will check
              her diary and reply directly. You do not need to share your
              clinical history here.
            </p>
          </div>
          <fieldset>
            <legend className="mb-3 font-medium">How can Claire help?</legend>
            <div className="grid gap-3">
              {appointmentTypes.map((type) => (
                <label
                  key={type}
                  className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-3 has-checked:border-dark-sage has-checked:bg-sage/25"
                >
                  <input
                    type="radio"
                    name="appointment-type"
                    value={type}
                    checked={details.type === type}
                    onChange={() => setDetails({ ...details, type })}
                    className="h-4 w-4 accent-dark-sage"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block font-medium" htmlFor="enquiry-format">
            Session format
            <select
              id="enquiry-format"
              name="format"
              value={details.format}
              onChange={(event) =>
                setDetails({ ...details, format: event.target.value })
              }
              className={inputClass}
            >
              {appointmentFormats.map((format) => (
                <option key={format}>{format}</option>
              ))}
            </select>
          </label>
          <label className="block font-medium" htmlFor="enquiry-day">
            Preferred day
            <select
              id="enquiry-day"
              name="day"
              value={details.day}
              onChange={(event) =>
                setDetails({ ...details, day: event.target.value })
              }
              className={inputClass}
            >
              {appointmentDays.map((day) => (
                <option key={day}>{day}</option>
              ))}
            </select>
            <span className="mt-2 block text-sm font-normal text-text/70">
              Tuesday–Thursday or Friday morning, subject to availability.
              Evening sessions finish by 7pm; a 6:30pm start is only for a
              30-minute appointment.
            </span>
          </label>
          <label className="block font-medium" htmlFor="enquiry-name">
            Your name
            <input
              id="enquiry-name"
              name="name"
              autoComplete="given-name"
              required
              maxLength={80}
              pattern=".*\S.*"
              value={details.name}
              onChange={(event) =>
                setDetails({ ...details, name: event.target.value })
              }
              className={inputClass}
            />
          </label>
          <label className="block font-medium" htmlFor="enquiry-email">
            Email address
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={details.email}
              onChange={(event) =>
                setDetails({ ...details, email: event.target.value })
              }
              className={inputClass}
            />
            <span className="mt-2 block text-sm font-normal text-text/70">
              The address you would like Claire to reply to.
            </span>
          </label>
          <label className="block font-medium" htmlFor="enquiry-availability">
            Preferred days or times{" "}
            <span className="font-normal text-text/65">(optional)</span>
            <input
              id="enquiry-availability"
              name="availability"
              maxLength={180}
              placeholder="For example, Tuesday afternoons"
              value={details.availability}
              onChange={(event) =>
                setDetails({ ...details, availability: event.target.value })
              }
              className={inputClass}
            />
            <span className="mt-2 block text-sm font-normal text-text/70">
              A preference only. Claire will confirm what is available.
            </span>
          </label>
          <div className="space-y-3 border-y border-border py-5 text-sm leading-6 text-text/80">
            <p>{paymentPolicy}</p>
            <p>{cancellationPolicy}</p>
          </div>
          <div className="rounded-xl bg-sage/20 p-4 text-sm leading-6 text-text/80">
            Please keep this enquiry to practical arrangements. Leave out
            medical history, payment details and anything you would prefer to
            discuss privately with Claire.
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Review my enquiry
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="text-sm leading-6 text-text/65">
            Your details are sent to Claire only when you select “Send enquiry to Claire”.
            This form does not reserve an appointment. Please read the{" "}
            <a href="/privacy" className="underline underline-offset-4">website privacy information</a>.
          </p>
        </form>
      )}
    </div>
  );
}

