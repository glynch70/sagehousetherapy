import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageCta } from "@/components/sections/page-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "Practical information about fees, consultations and arranging therapy with Sage House Therapy.",
};

export default function FeesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fees and practical information"
        title="Clear arrangements, discussed before you begin."
        introduction="Claire will confirm the current session fee and practical details with you before a booking is made, giving you time to ask questions and decide whether you would like to continue."
      />

      <Section className="border-y border-border bg-surface/70">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Make an enquiry",
                text: "Email Claire with a brief outline of what you are looking for and any questions you would like to ask.",
              },
              {
                number: "02",
                title: "Discuss the details",
                text: "Claire will share the current fee, session arrangements and relevant practical information with you.",
              },
              {
                number: "03",
                title: "Decide in your own time",
                text: "There is space to consider whether the proposed arrangement and therapeutic approach feel right for you.",
              },
            ].map((item) => (
              <Card key={item.number} className="h-full bg-surface/90">
                <p className="font-serif text-4xl text-accent">{item.number}</p>
                <h2 className="mt-8 text-3xl leading-tight text-text">
                  {item.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-text/75">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Before booking
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              Practical questions are part of the conversation.
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              {
                title: "Current session fee",
                text: "Please contact Claire for the current fee. This will be confirmed clearly before you agree to a session.",
              },
              {
                title: "Session arrangements",
                text: "Claire will explain the available format, session length and any other relevant arrangements when responding to your enquiry.",
              },
              {
                title: "Changes and cancellations",
                text: "Any expectations around changing or cancelling an appointment will be shared before therapy begins.",
              },
            ].map((item) => (
              <div key={item.title} className="py-7 sm:py-8">
                <h3 className="text-3xl text-text">{item.title}</h3>
                <p className="mt-4 text-lg leading-8 text-text/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sage/25">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              A considered first step
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              Asking about fees does not commit you to therapy.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text/75">
              You are welcome to gather the information you need, ask practical
              questions and take time to decide what feels manageable.
            </p>
          </div>
        </Container>
      </Section>

      <PageCta
        title="Get the current fee and session details."
        text="Send Claire a short message and she will reply with the practical information you need before arranging anything further."
        primaryHref="/contact"
        primaryLabel="Contact Claire"
        secondaryHref="/faqs"
        secondaryLabel="Read the FAQs"
      />
    </>
  );
}
