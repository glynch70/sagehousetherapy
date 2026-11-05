import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, CreditCard, MessageCircle } from "lucide-react";
import { AppointmentRequest } from "@/components/booking/appointment-request";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Request an appointment",
  description:
    "Ask Claire about an appointment, available times and fees at Sage House Therapy. Review your enquiry before emailing it.",
};

export default function BookingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Your next step"
        title="A first conversation starts here."
        introduction="Ask about working with Claire, request another appointment or check a practical detail. There is no payment to make when you enquire."
      />
      <Section className="border-y border-border bg-surface/55">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <AppointmentRequest />
          <aside className="lg:sticky lg:top-32 lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-dark-sage">
              How it works
            </p>
            <h2 className="mt-4 text-4xl leading-tight">
              Clear steps. Time to decide.
            </h2>
            <ol className="mt-8 space-y-7">
              {[
                {
                  icon: MessageCircle,
                  title: "1. Send your enquiry",
                  text: "Prepare a short message here, then send it from your email app.",
                },
                {
                  icon: CalendarDays,
                  title: "2. Agree the details",
                  text: "Claire confirms availability, session length, the fee and cancellation terms directly with you.",
                },
                {
                  icon: CreditCard,
                  title: "3. Pay once agreed",
                  text: "After confirming your appointment, arrange payment with Claire. If she sends a payment link, use the amount and reference she provides.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                    <Icon
                      className="h-5 w-5 text-dark-sage"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-2 leading-7 text-text/75">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-9 border-t border-border pt-6 text-sm leading-7 text-text/75">
              Already have an appointment?{" "}
              <Link
                href="/payments"
                className="font-medium underline underline-offset-4"
              >
                Payment information
              </Link>
              .<br />
              <Link href="/contact" className="underline underline-offset-4">
                Prefer to email Claire directly?
              </Link>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
