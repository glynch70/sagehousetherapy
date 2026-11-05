// Add only Claire's verified, reusable merchant checkout link in Vercel.
// Never accept checkout destinations from visitor query parameters.
export function getPaymentLink(value?: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    const hosts = ["pay.sumup.com", "checkout.sumup.com", "sumup.me"];
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.port ||
      !hosts.includes(url.hostname) ||
      url.pathname === "/"
    )
      return null;
    return url.href;
  } catch {
    return null;
  }
}
