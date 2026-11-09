import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageCta } from "@/components/sections/page-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { paymentPolicy, cancellationPolicy } from "@/lib/appointments";

export const metadata: Metadata = {
  alternates: { canonical: "/fees" },
  title: "Fees and appointments",
  description:
    "A free 15-minute consultation, £65 for a 60-minute session or £85 for a 90-minute session. Virtual or in-person appointments at The Wellness Barn.",
};

export default function FeesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fees & arrangements"
        title="Know the details before you begin."
        introduction="Start with a free 15-minute consultation. Therapy sessions last 60 or 90 minutes, depending on your treatment plan, and are available virtually or in person at The Wellness Barn."
      />
      <Section className="border-b border-border bg-surface/70">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              {
                name: "First consultation",
                price: "Free",
                length: "15 minutes",
                text: "An opportunity to ask questions and discuss whether you would like to work with Claire.",
              },
              {
                name: "Therapy session",
                price: "£65",
                length: "60 minutes",
                text: "A 60-minute therapy session, agreed with Claire as part of your treatment plan.",
              },
              {
                name: "Longer therapy session",
                price: "£85",
                length: "90 minutes",
                text: "Discuss whether a longer appointment is appropriate for the work you are doing together.",
              },
            ].map((item) => (
              <article key={item.name} className="border-t border-border pt-6">
                <p className="eyebrow">{item.name}</p>
                <h2 className="mt-5 text-6xl">{item.price}</h2>
                <p className="mt-2 font-medium text-dark-sage">{item.length}</p>
                <p className="mt-5 leading-7 text-text/75">{item.text}</p>
                <Link href="/book" className="text-link mt-6">
                  Enquire about an appointment{" "}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Practical details</p>
            <h2 className="section-title mt-5">
              Arrangements you can plan around.
            </h2>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {[
              [
                "Where sessions take place",
                "Choose a virtual session or meet Claire in person at The Wellness Barn. Claire will share the joining or arrival details when arranging your appointment.",
              ],
              [
                "Appointment days",
                "Tuesday–Thursday appointments begin from 8:30am, with sessions finishing by 7:30pm. The 6:30pm–7:30pm appointment is a 60-minute session. Friday appointments are in the morning. Claire confirms the exact time for your chosen session.",
              ],
              ["Payment before your session", paymentPolicy],
              [
                "Cancellations and refunds",
                cancellationPolicy +
                  " Contact Claire directly to cancel or discuss a change to your appointment.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="py-6">
                <dt className="font-serif text-2xl sm:text-3xl">{title}</dt>
                <dd className="mt-4 leading-8 text-text/75">{text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <PageCta
        eyebrow="Find a time"
        title="Ask about available spaces."
        text="Choose the session you are interested in and share your preferred day or time. Claire checks her diary and responds directly; the enquiry form does not reserve a slot."
        primaryHref="/book"
        primaryLabel="Check availability"
        secondaryHref="/payments"
        secondaryLabel="Payment information"
      />
    </>
  );
}

