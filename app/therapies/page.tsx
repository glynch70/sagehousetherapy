import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageCta } from "@/components/sections/page-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Therapies",
  description:
    "Explore the therapy approaches and support available through Sage House Therapy.",
};

export default function TherapiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Therapies"
        title="Different approaches, shaped around you."
        introduction="Therapy is not one-size-fits-all. Claire draws on EMDR, Compassion Focused Therapy and EFT, discussing the approach with you and working at a pace that respects your needs."
      />

      <Section className="border-y border-border bg-surface/70">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
                Reasons for coming to therapy
              </p>
              <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
                Support for experiences that can be hard to carry alone.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-text/75 lg:justify-self-end">
              You may have a clear sense of what you want help with, or simply
              know that something feels difficult, stuck or ready to change.
              Therapy can begin from either place.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Trauma and difficult experiences",
                text: "A carefully paced space to approach experiences that still feel present, distressing or difficult to make sense of.",
              },
              {
                title: "Anxiety and self-criticism",
                text: "Explore cycles of worry, pressure or harsh self-judgement and develop a steadier relationship with yourself.",
              },
              {
                title: "Relationships, loss and change",
                text: "Reflect on connection, boundaries, grief and the changes that shape how you relate to yourself and others.",
              },
            ].map((item, index) => (
              <Card key={item.title} className="h-full bg-surface/90">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sage bg-background font-serif text-xl text-dark-sage">
                  {index + 1}
                </div>
                <h3 className="mt-8 text-3xl leading-tight text-text">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-text/75">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Therapeutic approaches
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              Three ways of supporting understanding and change.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {[
              {
                number: "01",
                name: "EMDR",
                subtitle: "Eye Movement Desensitisation and Reprocessing",
                paragraphs: [
                  "EMDR is a structured approach for working with distressing memories and experiences that can continue to feel vivid or unresolved.",
                  "The process may use bilateral stimulation, such as guided eye movements or alternating taps, alongside careful therapeutic support. You remain awake, aware and involved throughout, and the work is paced collaboratively.",
                ],
              },
              {
                number: "02",
                name: "Compassion Focused Therapy",
                subtitle: "Understanding self-criticism with greater care",
                paragraphs: [
                  "Compassion Focused Therapy can help make sense of shame, self-criticism and the ways our threat system can shape thoughts, feelings and behaviour.",
                  "The work supports a kinder and more balanced inner relationship—not by dismissing difficulty, but by finding ways to meet it with courage, understanding and care.",
                ],
              },
              {
                number: "03",
                name: "EFT",
                subtitle: "Exploring emotion, connection and relationships",
                paragraphs: [
                  "EFT offers a way to understand emotional responses and patterns of connection within important relationships.",
                  "By slowing these patterns down, therapy can create space to notice underlying needs, communicate more openly and respond with greater awareness.",
                ],
              },
            ].map((approach) => (
              <article
                key={approach.name}
                className="grid gap-7 py-10 sm:py-12 lg:grid-cols-[0.22fr_0.78fr_1fr] lg:gap-12"
              >
                <p className="font-serif text-4xl text-accent">
                  {approach.number}
                </p>
                <div>
                  <h3 className="text-3xl leading-tight text-text sm:text-4xl">
                    {approach.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-dark-sage">
                    {approach.subtitle}
                  </p>
                </div>
                <div className="space-y-4 text-base leading-7 text-text/75 sm:text-lg sm:leading-8">
                  {approach.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sage/25">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Your pace matters
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              No pressure to begin with the hardest part.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-text/78">
            <p>
              An approach is never simply applied to you. Claire will talk with
              you about what feels helpful, answer questions and adapt the work
              as your needs become clearer.
            </p>
            <p>
              Time can be spent building trust, understanding what helps you
              feel steady and deciding together when—or whether—to approach
              particular experiences.
            </p>
          </div>
        </Container>
      </Section>

      <PageCta
        title="Not sure which approach is right for you?"
        text="You do not need to decide before getting in touch. Claire can listen to what brings you to therapy and talk through the options with you."
        primaryHref="/contact"
        primaryLabel="Ask Claire a Question"
        secondaryHref="/about"
        secondaryLabel="About Claire"
      />
    </>
  );
}
