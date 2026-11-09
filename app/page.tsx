import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Leaf, MoveRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Therapy for adults in Edinburgh",
  description:
    "Therapy with Claire at Sage House Therapy in Edinburgh. Explore support for anxiety, difficult experiences, loss and relationships, and ask about a first appointment.",
};

const support = [
  {
    title: "When worry takes up too much room",
    text: "Anxiety, stress and the feeling that you can’t switch off.",
  },
  {
    title: "When the past keeps showing up",
    text: "Difficult experiences or memories that still feel close.",
  },
  {
    title: "When you’re hard on yourself",
    text: "Self-criticism, shame and finding it difficult to feel good enough.",
  },
  {
    title: "When life or relationships change",
    text: "Grief, loss, boundaries and changes in how you connect with others.",
  },
];
const approaches = [
  { name: "EMDR", text: "Working with distressing memories and experiences." },
  {
    name: "Compassion Focused Therapy",
    text: "Exploring self-criticism and how you relate to yourself.",
  },
  {
    name: "EFT",
    text: "Making sense of emotions and patterns in relationships.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Therapy for adults · Edinburgh
            </p>
            <h1 className="mt-7 text-[3.4rem] leading-[0.98] tracking-[-0.025em] text-text sm:text-[4.5rem] lg:text-[5.3rem]">
              You don’t need
              <br />
              the right words
              <br />
              <span className="font-normal italic text-dark-sage">
                to begin.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-text/75">
              You might know what’s troubling you, or simply know that something
              feels difficult. Therapy with Claire is a place to start talking
              about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book">
                Make an enquiry{" "}
                <ArrowUpRight className="ml-3 h-4 w-4" aria-hidden="true" />
              </Button>
              <Link href="/about" className="text-link min-h-12 px-1 text-sm">
                Meet Claire <MoveRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-text/60">
              Free 15-minute consultation. Virtual or at The Wellness Barn.
            </p>
            <a
              href="#support"
              className="mt-12 hidden items-center gap-3 text-sm text-dark-sage underline-offset-4 hover:underline lg:inline-flex"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              Take a look around
            </a>
          </div>
          <figure className="relative mx-auto w-full max-w-[32rem] lg:pt-4">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 top-10 w-4/5 rounded-[7rem_1.5rem_1.5rem_1.5rem] bg-sage/50 sm:-right-5"
            />
            <div className="relative overflow-hidden rounded-[6rem_1.5rem_1.5rem_1.5rem] border border-dark-sage/10 sm:rounded-[8rem_1.5rem_1.5rem_1.5rem]">
              <Image
                src="/images/claire-with-dog.webp"
                alt="Claire with a black Labrador outside The Wellness Barn"
                width={1200}
                height={1200}
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 512px, 100vw"
                preload
                className="h-auto w-full"
              />
            </div>
            <figcaption className="relative mt-5 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-dark-sage">
              <span>Claire · Sage House Therapy</span>
              <Leaf className="h-5 w-5" strokeWidth={1.2} aria-hidden="true" />
            </figcaption>
          </figure>
        </Container>
      </section>

      <section
        id="support"
        className="scroll-mt-28 border-y border-border bg-[#e9eee6] py-16 sm:py-20 lg:py-24"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow">What brings you here?</p>
            <h2 className="section-title mt-5">
              Some things can be hard to work through on your own.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-8 text-text/75">
              You don’t need a diagnosis or a clear explanation before getting
              in touch. You can start with what life feels like at the moment.
            </p>
            <Link href="/therapies" className="text-link mt-7">
              Explore the support available{" "}
              <MoveRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="divide-y divide-dark-sage/20 border-y border-dark-sage/20">
            {support.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-[2rem_1fr] gap-4 py-6 sm:gap-6"
              >
                <span className="pt-1 font-serif text-xl text-dark-sage/70">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-[1.75rem] leading-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-text/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="claire" className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 md:grid-cols-[15rem_1fr] md:items-center lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex items-center gap-6 lg:justify-center">
            <div className="w-44 shrink-0 overflow-hidden rounded-[5rem_1rem_1rem_1rem] sm:w-52">
              <Image
                src="/images/claire-waterside.webp"
                alt="Claire smiling by the water"
                width={1290}
                height={1277}
                sizes="208px"
                className="aspect-[4/5] w-full object-cover object-[54%_center]"
              />
            </div>
            <span className="font-serif text-3xl italic text-dark-sage md:hidden">
              Meet
              <br />
              Claire.
            </span>
          </div>
          <div className="max-w-xl">
            <p className="eyebrow">The person you’ll be talking to</p>
            <h2 className="section-title mt-5">
              Get to know Claire
              <br />
              before you decide.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text/75">
              Claire works with adults in Edinburgh. Her approach is
              collaborative: listening to what matters to you, talking through
              the options and checking how the work feels as you go.
            </p>
            <p className="mt-4 text-lg leading-8 text-text/75">
              An enquiry gives you a chance to ask questions and consider
              whether you would like to work together.
            </p>
            <Link href="/about" className="text-link mt-7">
              A little more about Claire{" "}
              <MoveRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Ways of working</p>
              <h2 className="section-title mt-5">
                An approach you can discuss together.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-text/70">
              You don’t need to choose a therapy before you enquire. Claire will
              talk through what may be appropriate.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0">
            {approaches.map((item, index) => (
              <div
                key={item.name}
                className="border-t border-border pt-6 md:border-l md:border-t-0 md:px-7 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <span className="text-xs tracking-[0.16em] text-dark-sage">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-3xl leading-tight">{item.name}</h3>
                <p className="mt-4 leading-7 text-text/70">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/therapies" className="text-link mt-9">
            Read about the approaches{" "}
            <MoveRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>

      <section className="bg-[#2f493c] py-16 text-surface sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow !text-surface/65">Beginning therapy</p>
            <h2 className="section-title mt-5 !text-surface">
              One enquiry.
              <br />
              <span className="font-normal italic">Then a conversation.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-surface/75">
              You can send a few practical details and ask the questions you
              need answered before arranging a session.
            </p>
            <Button
              href="/book"
              variant="secondary"
              className="mt-8 border-surface/50 bg-surface text-[#2f493c] hover:bg-surface/90"
            >
              Make an enquiry{" "}
              <ArrowUpRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <ol className="divide-y divide-surface/20 border-y border-surface/20">
            {[
              {
                title: "Tell Claire what you need",
                text: "Complete the enquiry form, review your details and send directly to Claire.",
              },
              {
                title: "Talk through the practical details",
                text: "Claire checks her diary and agrees a suitable time. Choose a virtual session or an in-person appointment at The Wellness Barn.",
              },
              {
                title: "Decide whether to go ahead",
                text: "Your consultation is free. Therapy sessions must be paid for before the session to hold the appointment.",
              },
            ].map((item, index) => (
              <li key={item.title} className="flex gap-5 py-6">
                <span className="font-serif text-2xl text-[#d7c3a1]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl leading-tight text-surface sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-surface/70">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-border bg-[#e9eee6] py-10 sm:py-12">
        <Container className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Appointments & availability</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Find a space that works for you.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-text/75">
              Tuesday–Thursday and Friday mornings. Request a free 15-minute
              consultation or ask about a therapeutic appointment. Claire
              confirms available times directly.
            </p>
          </div>
          <Button href="/book?availability=check" className="shrink-0">
            Check available spaces{" "}
            <ArrowUpRight className="ml-3 h-4 w-4" aria-hidden="true" />
          </Button>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Before you get in touch</p>
            <h2 className="section-title mt-5">
              A few things you might be wondering.
            </h2>
            <Link href="/faqs" className="text-link mt-7">
              All questions & answers{" "}
              <MoveRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              [
                "Do I need to know what to say?",
                "A short practical enquiry is enough. You don’t need to share a detailed history or choose a therapy approach in your first message.",
              ],
              [
                "How much does it cost?",
                "The 15-minute consultation is free. Therapy is £65 for a 60-minute session, or £85 for a 90-minute session. Paid sessions must be paid for in advance to hold the appointment.",
              ],
              [
                "Does the form book a time for me?",
                "The form sends your enquiry to Claire. She then responds directly to agree availability and next steps. No appointment is reserved automatically.",
              ],
            ].map(([question, answer]) => (
              <details key={question} className="group">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  <span>{question}</span>
                  <span
                    className="text-xl font-light text-dark-sage group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-6 leading-7 text-text/75">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
        <Container className="mt-12">
          <div className="flex flex-col justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-text/70">Already working with Claire?</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
              <Link href="/payments" className="text-link">
                Appointment payments{" "}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/fees" className="text-link">
                Fees & arrangements{" "}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

