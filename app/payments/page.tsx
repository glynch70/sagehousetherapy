import type { Metadata } from "next";
import { CreditCard, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageIntro } from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { getPaymentLink } from "@/lib/payments";
import { contactEmail } from "@/lib/site";
import { paymentPolicy, cancellationPolicy } from "@/lib/appointments";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Appointment payments",
  description:
    "Payment arrangements for appointments agreed directly with Claire at Sage House Therapy.",
  robots: { index: false, follow: true },
};

export default function PaymentsPage() {
  const paymentLinks = [
    {
      label: "Therapeutic hour",
      fee: "£65",
      href: getPaymentLink(process.env.SAGE_PAYMENT_LINK_HOUR),
    },
    {
      label: "90-minute session",
      fee: "£85",
      href: getPaymentLink(process.env.SAGE_PAYMENT_LINK_90_MINUTES),
    },
  ];
  const hasCheckout = paymentLinks.some((link) => link.href);
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Payment link for my agreed appointment")}&body=${encodeURIComponent("Hello Claire,\n\nPlease could you send me the payment details for my agreed appointment?\n\nThank you")}`;
  return (
    <>
      <PageIntro
        eyebrow="For confirmed appointments"
        title="Payment, once the details are agreed."
        introduction="Agree a suitable appointment time with Claire, then pay before the session to hold it. The 15-minute consultation is free."
      />
      <Section className="border-y border-border bg-surface/55">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="rounded-[2rem] border border-border bg-surface p-7 sm:p-10">
            <CreditCard className="h-8 w-8 text-dark-sage" aria-hidden="true" />
            <h2 className="mt-6 text-4xl">
              {hasCheckout
                ? "Pay for your agreed appointment"
                : "Arrange payment with Claire"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-text/75">
              {hasCheckout
                ? "Choose the session Claire has agreed with you. Check the merchant name and amount at SumUp checkout, and use Claire’s payment reference if one was provided."
                : "Online checkout is not available on this website yet. Claire can confirm the fee and payment arrangements directly. If you have already received a payment link from her, use that link."}
            </p>
            {hasCheckout ? (
              <div className="mt-6 space-y-4">
                {paymentLinks.map((link) => (
                  <div
                    key={link.label}
                    className="rounded-xl border border-border p-5"
                  >
                    <h3 className="text-2xl">
                      {link.label} · {link.fee}
                    </h3>
                    {link.href ? (
                      <Button
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        Pay {link.fee} with SumUp ↗
                      </Button>
                    ) : (
                      <p className="mt-3 text-sm leading-6 text-text/75">
                        Contact Claire for the payment arrangements for this
                        session.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <Button href={emailHref} className="mt-7">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Email Claire about payment
              </Button>
            )}
            <p className="mt-4 text-sm leading-6 text-text/65">
              {hasCheckout
                ? "Opens SumUp in a new tab. Card details are entered with SumUp, not on this website. Payment does not create or change an appointment."
                : "Your email app will open. Review your message and press send there."}
            </p>
          </div>
          <div className="py-3">
            <h2 className="text-3xl">A few practical details</h2>
            <p className="mt-4 leading-7 text-text/75">{paymentPolicy}</p>
            <dl className="mt-6 divide-y divide-border">
              <div className="py-5">
                <dt className="font-medium">Fees and session length</dt>
                <dd className="mt-2 leading-7 text-text/75">
                  £65 per therapeutic hour, or £85 for a 90-minute session. The
                  15-minute consultation is free.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-medium">
                  Changes, cancellations and refunds
                </dt>
                <dd className="mt-2 leading-7 text-text/75">
                  {cancellationPolicy} Contact Claire directly to cancel or
                  discuss a change.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-medium">
                  Unsure whether a payment went through?
                </dt>
                <dd className="mt-2 leading-7 text-text/75">
                  Check your receipt and contact Claire before paying again.
                  This website does not track your payment status.
                </dd>
              </div>
            </dl>
            <Button href="/book" variant="secondary" className="mt-6">
              Request an appointment
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
