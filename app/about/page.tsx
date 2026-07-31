import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageCta } from "@/components/sections/page-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Claire",
  description:
    "Learn more about Claire and the thoughtful approach behind Sage House Therapy.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Claire"
        title="Therapy shaped by warmth, care and respect."
        introduction="Claire offers a compassionate, evidence-informed space where you can take time to understand what has brought you to therapy and consider what you would like to be different."
      />

      <Section className="border-y border-border bg-surface/70">
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          <div className="rounded-[2rem] border border-dark-sage/25 bg-sage/30 p-8 sm:p-10 lg:sticky lg:top-40">
            <p className="font-serif text-4xl leading-tight text-text sm:text-5xl">
              “A place to arrive as you are, without pressure to have everything
              worked out.”
            </p>
            <div className="mt-8 h-px w-16 bg-accent" />
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-dark-sage">
              The Sage House approach
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Working with Claire
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              Thoughtful support, centred on you.
            </h2>
            <div className="mt-7 space-y-6 text-lg leading-8 text-text/78">
              <p>
                People often come to therapy carrying experiences that feel
                difficult to put into words. Claire aims to create a steady,
                accepting relationship where those experiences can be explored
                with care and without judgement.
              </p>
              <p>
                Her work is collaborative rather than prescriptive. Together,
                you can consider the patterns, emotions and relationships that
                matter to you, drawing on therapeutic approaches that fit your
                needs and preferences.
              </p>
              <p>
                There is no expectation to move faster than feels manageable.
                Therapy can unfold at a client-led, unhurried pace, with space
                to pause, ask questions and make sense of the process as you go.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              What guides the work
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              A calm foundation for meaningful conversations.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Compassion",
                text: "A warm, non-judgemental space where difficult feelings can be met with care rather than criticism.",
              },
              {
                number: "02",
                title: "Evidence-informed",
                text: "Established therapeutic ideas are used thoughtfully, with the approach discussed and shaped around you.",
              },
              {
                number: "03",
                title: "Choice and pace",
                text: "You remain part of every decision, with time to build trust and work in a way that feels manageable.",
              },
            ].map((item) => (
              <Card key={item.number} className="h-full bg-surface/90">
                <p className="font-serif text-4xl text-accent">{item.number}</p>
                <h3 className="mt-8 text-3xl text-text">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-text/75">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sage/25">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Areas of support
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              Space for what you are carrying.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Trauma and difficult experiences",
              "Anxiety and self-criticism",
              "Relationships and connection",
              "Loss, grief and change",
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-28 items-center rounded-2xl border border-dark-sage/20 bg-surface/75 px-6 py-5 font-serif text-2xl leading-tight text-text"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <PageCta
        title="Would you like to explore working together?"
        text="You are welcome to get in touch with Claire, ask questions and take some time to decide whether Sage House Therapy feels right for you."
        primaryHref="/contact"
        primaryLabel="Contact Claire"
        secondaryHref="/therapies"
        secondaryLabel="Explore Therapies"
      />
    </>
  );
}
