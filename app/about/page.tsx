import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/sections/page-cta";

export const metadata: Metadata = {
  title: "About Claire",
  description:
    "Meet Claire, the therapist behind Sage House Therapy in Edinburgh, and learn what working together can involve.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_16rem] md:items-center lg:gap-24">
          <div className="max-w-2xl">
            <p className="eyebrow">About Claire</p>
            <h1 className="mt-6 text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              A person to talk to.
              <br />
              <span className="font-normal italic text-dark-sage">
                A place to begin.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-text/75">
              Choosing a therapist is a personal decision. It helps to know a
              little about the person you’ll be sitting with, and how you might
              work together.
            </p>
          </div>
          <figure className="w-52 md:w-full">
            <div className="overflow-hidden rounded-[6rem_1.25rem_1.25rem_1.25rem]">
              <Image
                src="/images/claire-waterside.webp"
                alt="Claire smiling by the water"
                width={1290}
                height={1277}
                sizes="(min-width: 768px) 256px, 208px"
                preload
                className="aspect-[4/5] w-full object-cover object-[54%_center]"
              />
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-dark-sage">
              Claire · Edinburgh
            </figcaption>
          </figure>
        </Container>
      </section>
      <section className="border-y border-border bg-[#e9eee6] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Working together</p>
            <h2 className="section-title mt-5">
              Start with what
              <br />
              matters to you.
            </h2>
          </div>
          <div className="max-w-xl space-y-5 text-lg leading-8 text-text/75">
            <p>
              Claire works with adults in Edinburgh. People come to her with
              anxiety, self-criticism, difficult experiences, grief or concerns
              about their relationships.
            </p>
            <p>
              Sometimes there is one thing you want to talk about. Sometimes it
              takes a few conversations to understand what feels difficult.
              There is room for either.
            </p>
            <p>
              Claire’s approach is collaborative. You can ask questions about
              the work, say when something doesn’t feel helpful and discuss what
              you want to focus on next.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <p className="eyebrow">What that looks like in practice</p>
          <h2 className="section-title mt-5">You have a say in the process.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              [
                "Time to build trust",
                "You can begin with what feels manageable. You don’t have to tell your whole story in the first conversation.",
              ],
              [
                "An approach you understand",
                "Claire draws on EMDR, Compassion Focused Therapy and EFT. She will explain the options and discuss how they relate to what you want help with.",
              ],
              [
                "Space to check in",
                "You can talk about the pace, ask for clarification and reflect together on how the sessions are going.",
              ],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-border pt-6">
                <span className="text-xs tracking-[0.16em] text-dark-sage">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-text/75">{text}</p>
              </div>
            ))}
          </div>
          <Link href="/therapies" className="text-link mt-9">
            Read about the therapy approaches{" "}
            <MoveRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>
      <PageCta
        eyebrow="Getting to know each other"
        title="You can ask a question first."
        text="An enquiry is a chance to find out about Claire’s availability, fees and approach before deciding whether to arrange an appointment."
        primaryHref="/book"
        primaryLabel="Make an enquiry"
        secondaryHref="/faqs"
        secondaryLabel="Read the FAQs"
      />
    </>
  );
}
