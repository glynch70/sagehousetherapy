import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { availabilitySummary } from "@/lib/appointments";
import { CalendarDays, CreditCard, MessageCircle } from "lucide-react";
import { AppointmentRequest } from "@/components/booking/appointment-request";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  alternates: { canonical: "/book" },
  title: "Request an appointment",
  description:
    "Ask Claire about an appointment, available times and fees at Sage House Therapy. Review and send your enquiry directly to Claire.",
};

export default function BookingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Your next step"
        title="Tell Claire what you have in mind."
        introduction="Request a free 15-minute consultation, enquire about a £65 60-minute session or £85 90-minute session, or ask about available spaces. Appointments are virtual or in person at The Wellness Barn."
      />
      <Section className="border-y border-border bg-surface/55">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <Suspense
            fallback={
              <div className="lg:col-start-2 lg:row-start-1" role="status">
                Loading appointment enquiry…
              </div>
            }
          >
            <AppointmentRequest />
          </Suspense>
          <aside className="lg:sticky lg:top-32 lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-dark-sage">
              How it works
            </p>
            <h2 className="mt-4 text-4xl leading-tight">
              Availability is checked by Claire
            </h2>
            <div className="mt-6 border-y border-border py-5">
              <h3 className="font-medium font-sans text-base">
                Appointment days and times
              </h3>
              <p className="mt-2 text-sm leading-7 text-text/75">
                {availabilitySummary}
              </p>
              <p className="mt-3 text-sm leading-7 text-text/75">
                The consultation is 15 minutes and free. Therapy sessions are
                60 or 90 minutes, depending on your treatment plan. The
                6:30pm–7:30pm appointment is a 60-minute session.
              </p>
            </div>
            <ol className="mt-8 space-y-7">
              {[
                {
                  icon: MessageCircle,
                  title: "1. Ask for a session or available space",
                  text: "Complete the enquiry form, review your details and send directly to Claire.",
                },
                {
                  icon: CalendarDays,
                  title: "2. Agree the details",
                  text: "Claire confirms availability, session length, the fee and cancellation terms directly with you.",
                },
                {
                  icon: CreditCard,
                  title: "3. Pay once agreed",
                  text: "Therapy appointments must be paid for before the session to hold the time. Claire will share payment arrangements after agreeing a suitable slot. The 15-minute consultation is free.",
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

