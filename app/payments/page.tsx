import type { Metadata } from "next";
import { CreditCard, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageIntro } from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { getPaymentLink } from "@/lib/payments";
import { contactEmail } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Appointment payments",
  description:
    "Payment arrangements for appointments agreed directly with Claire at Sage House Therapy.",
  robots: { index: false, follow: true },
};

export default function PaymentsPage() {
  const paymentLink = getPaymentLink();
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Payment link for my agreed appointment")}&body=${encodeURIComponent("Hello Claire,\n\nPlease could you send me the payment details for my agreed appointment?\n\nThank you")}`;
  return (
    <>
      <PageIntro
        eyebrow="For confirmed appointments"
        title="Payment, once the details are agreed."
        introduction="Please arrange your appointment and fee with Claire before making a payment. Sending an enquiry does not require a payment."
      />
      <Section className="border-y border-border bg-surface/55">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="rounded-[2rem] border border-border bg-surface p-7 sm:p-10">
            <CreditCard className="h-8 w-8 text-dark-sage" aria-hidden="true" />
            <h2 className="mt-6 text-4xl">
              {paymentLink
                ? "Pay for your agreed appointment"
                : "Arrange payment with Claire"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-text/75">
              {paymentLink
                ? "Continue to Claire’s SumUp checkout. Check the merchant name and amount against the details Claire has confirmed, and use her payment reference if one was provided."
                : "Online checkout is not available on this website yet. Claire can confirm the fee and payment arrangements directly. If you have already received a payment link from her, use that link."}
            </p>
            {paymentLink ? (
              <Button
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7"
              >
                Continue to SumUp checkout ↗
              </Button>
            ) : (
              <Button href={emailHref} className="mt-7">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Email Claire about payment
              </Button>
            )}
            <p className="mt-4 text-sm leading-6 text-text/65">
              {paymentLink
                ? "Opens SumUp in a new tab. Card details are entered with SumUp, not on this website. Payment does not create or change an appointment."
                : "Your email app will open. Review your message and press send there."}
            </p>
          </div>
          <div className="py-3">
            <h2 className="text-3xl">A few practical details</h2>
            <dl className="mt-6 divide-y divide-border">
              <div className="py-5">
                <dt className="font-medium">Fees and session length</dt>
                <dd className="mt-2 leading-7 text-text/75">
                  Confirmed by Claire before you agree to a session.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-medium">
                  Changes, cancellations and refunds
                </dt>
                <dd className="mt-2 leading-7 text-text/75">
                  Contact Claire before changing an appointment or requesting a
                  refund. The terms agreed with her apply.
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
