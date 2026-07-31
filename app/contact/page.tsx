import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageIntro } from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sage House Therapy to enquire about consultations and appointments in Edinburgh.",
};

export default function ContactPage() {
  const [emailName, emailDomain] = contactEmail.split("@");

  return (
    <>
      <PageIntro
        eyebrow="Contact Claire"
        title="Take the first step in your own time."
        introduction="You are welcome to get in touch to ask about therapy, current practical arrangements or whether Sage House might be a good fit. There is no pressure to know exactly what to say."
      />

      <Section className="border-y border-border bg-surface/70">
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="min-w-0 rounded-[2rem] border border-dark-sage/25 bg-sage/30 p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Email Claire
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 block break-words font-serif text-3xl leading-tight text-text underline decoration-accent/70 decoration-1 underline-offset-8 transition-colors [overflow-wrap:anywhere] hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-4xl"
            >
              <span>{emailName}@</span>
              <span className="block sm:inline">{emailDomain}</span>
            </a>
            <p className="mt-7 text-base leading-7 text-text/75">
              Claire will respond with current practical information and the
              next available steps.
            </p>
            <Button href={`mailto:${contactEmail}`} className="mt-8">
              Write an Email
            </Button>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              What to include
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              A short message is enough.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text/75">
              If it helps, you can include the following. You do not need to
              share detailed or sensitive information in your first email.
            </p>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {[
                "Your name and preferred way to be contacted",
                "A brief sense of what you would like support with",
                "Any practical questions you would like Claire to answer",
              ].map((item, index) => (
                <div key={item} className="flex gap-5 py-5 sm:py-6">
                  <span className="font-serif text-2xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-8 text-text/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Begin with a message",
                text: "Send a few lines about what you are looking for and any questions you have.",
              },
              {
                title: "Hear from Claire",
                text: "Claire will share current practical information and suggest an appropriate next step.",
              },
              {
                title: "Decide what feels right",
                text: "You can take time to consider the information before choosing whether to continue.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface/80 p-7 sm:p-8"
              >
                <h2 className="text-3xl leading-tight text-text">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-text/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sage/25">
        <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Before getting in touch
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-text sm:text-5xl">
              More questions first?
            </h2>
            <p className="mt-5 text-lg leading-8 text-text/75">
              Read about Claire’s approach, the therapies available and common
              questions about beginning.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:items-start">
            <Button href="/faqs" variant="secondary">
              Read the FAQs
            </Button>
            <Button href="/about" variant="secondary">
              About Claire
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
