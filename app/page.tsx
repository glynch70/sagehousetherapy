import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Camera,
  CircleDot,
  Heart,
  HeartHandshake,
  Leaf,
  Mail,
  MessageCircle,
  Shield,
  Sparkles,
  UsersRound,
  Waves,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Therapy in Edinburgh",
  description:
    "Sage House Therapy offers a calm, compassionate space for adults in Edinburgh to understand themselves, process difficult experiences and make meaningful change.",
};

const supportAreas = [
  {
    title: "Anxiety",
    text: "A steady space to explore worry, fear and the patterns that keep anxiety going.",
    icon: Waves,
  },
  {
    title: "Stress",
    text: "Support to understand pressure, build steadier rhythms and reconnect with what matters.",
    icon: Leaf,
  },
  {
    title: "Trauma",
    text: "Gentle, paced therapy for experiences that still feel present or hard to make sense of.",
    icon: Shield,
  },
  {
    title: "Loss and grief",
    text: "Time to speak openly about loss and find your way through change with care.",
    icon: Heart,
  },
  {
    title: "Relationships",
    text: "A place to reflect on patterns, boundaries and the relationships that shape your life.",
    icon: UsersRound,
  },
  {
    title: "Self-esteem",
    text: "Support to soften self-criticism and develop a kinder, more grounded sense of yourself.",
    icon: Sparkles,
  },
];

const therapyApproaches = [
  {
    title: "Compassion Focused Therapy",
    text: "An approach that helps you understand self-criticism and build a warmer inner voice.",
    icon: HeartHandshake,
  },
  {
    title: "EMDR",
    text: "A structured therapy that can support the processing of distressing memories and trauma.",
    icon: CircleDot,
  },
  {
    title: "EFT",
    text: "A thoughtful approach for exploring emotions, relationships and patterns of connection.",
    icon: MessageCircle,
  },
];

const expectationSteps = [
  {
    number: "01",
    title: "Get in touch",
    text: "Send a short enquiry when you feel ready, and Claire will respond with next steps.",
    icon: Mail,
  },
  {
    number: "02",
    title: "Initial consultation",
    text: "You can talk through what brings you to therapy and ask any practical questions.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Begin therapy",
    text: "Sessions begin at a pace that feels safe, collaborative and supportive.",
    icon: Armchair,
  },
];

function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex min-h-80 overflow-hidden rounded-[2rem] border border-surface/80 bg-surface shadow-[0_24px_80px_rgba(67,67,67,0.10)]",
        className,
      )}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-sage/35" />
      <div className="absolute inset-6 rounded-[1.75rem] bg-surface/35" />
      <div className="absolute inset-x-8 bottom-8 top-8 rounded-[1.5rem] border border-surface/70" />
      <div className="relative z-10 m-auto flex max-w-xs flex-col items-center px-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-surface/80 bg-surface/80 text-dark-sage shadow-[0_14px_36px_rgba(67,67,67,0.10)] transition duration-300 group-hover:-translate-y-1">
          <Camera className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
        </span>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-dark-sage">
          {label}
        </p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
  align?: "left" | "centre";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "centre" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-5xl leading-[1.02] text-text sm:text-6xl">{title}</h2>
      {text ? (
        <p className="mt-6 text-lg leading-8 text-text/75 sm:text-xl sm:leading-9">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function IconFrame({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/70 bg-background text-dark-sage transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/70 group-hover:text-text">
      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Section className="pb-16 pt-10 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24">
        <Container className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl lg:pb-6">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-dark-sage">
              Private Therapy in Edinburgh
            </p>
            <h1 className="max-w-4xl text-5xl leading-[0.96] text-text sm:text-6xl lg:text-7xl xl:text-8xl">
              A calm, compassionate space to help you move forward.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-text/78 sm:mt-8 sm:text-xl sm:leading-9">
              Sage House Therapy offers a safe and supportive space for adults
              looking to understand themselves, process difficult experiences
              and make meaningful change.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row">
              <Button href="/contact" className="sm:min-w-48">
                Book a Consultation
              </Button>
              <Button
                href="/therapies"
                variant="secondary"
                className="sm:min-w-48"
              >
                Learn About Therapy
              </Button>
            </div>
            <p className="mt-6 max-w-xl border-l border-accent/70 pl-4 text-sm leading-6 text-text/70 sm:text-base sm:leading-7">
              Supporting adults across Edinburgh with warmth, care and
              professional experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-[0.68fr_1fr] lg:grid-cols-[0.58fr_1fr] lg:items-center">
            <ImagePlaceholder
              label="Therapy room"
              className="min-h-64 sm:translate-y-8 lg:min-h-[27rem]"
            />
            <ImagePlaceholder
              label="Professional portrait"
              className="min-h-[26rem] sm:min-h-[34rem] lg:min-h-[42rem]"
            />
          </div>
        </Container>
      </Section>

      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="rounded-[2rem] border border-surface/80 bg-surface px-6 py-12 shadow-[0_24px_80px_rgba(67,67,67,0.08)] sm:px-10 sm:py-16 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionHeading
                title="Welcome to Sage House Therapy"
                className="lg:max-w-xl"
              />
              <div className="border-l-0 border-border lg:border-l lg:pl-12">
                <p className="text-xl leading-9 text-text/78">
                  Starting therapy can feel like a big step. Sage House Therapy
                  offers a calm, confidential and supportive space where you can
                  talk openly, feel heard and begin to make sense of what you
                  are experiencing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <ImagePlaceholder
            label="Warm welcome image"
            className="min-h-[24rem] lg:min-h-[34rem]"
          />

          <div className="rounded-[2rem] border border-surface/80 bg-surface p-7 shadow-[0_24px_80px_rgba(67,67,67,0.08)] sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="About Claire"
              title="Meet Claire"
              text="Claire is an experienced therapist based in Edinburgh, supporting adults through compassionate, thoughtful and evidence-informed therapy."
            />
            <div className="mt-10 h-px bg-border" />
            <Button href="/about" variant="secondary" className="mt-10">
              More About Claire
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Support"
            title="How therapy can help"
            text="Therapy offers time to understand what you are carrying and find a steadier way forward."
            align="centre"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {supportAreas.map((area) => (
              <Card
                key={area.title}
                className="group h-full bg-surface/92 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_90px_rgba(67,67,67,0.10)]"
              >
                <IconFrame icon={area.icon} />
                <h3 className="mt-8 text-3xl leading-tight text-text">
                  {area.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-text/75">
                  {area.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="rounded-[2rem] border border-surface/80 bg-surface p-7 shadow-[0_24px_80px_rgba(67,67,67,0.08)] sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <SectionHeading
                eyebrow="Approaches"
                title="Therapy approaches"
                text="Claire draws on thoughtful, evidence-informed approaches and will work with you to shape therapy around your needs."
                className="lg:sticky lg:top-32"
              />

              <div className="grid gap-5">
                {therapyApproaches.map((approach) => (
                  <div
                    key={approach.title}
                    className="group grid gap-5 rounded-2xl border border-border bg-background/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-background sm:grid-cols-[auto_1fr] sm:p-7"
                  >
                    <IconFrame icon={approach.icon} />
                    <div>
                      <h3 className="text-3xl leading-tight text-text">
                        {approach.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-text/75">
                        {approach.text}
                      </p>
                    </div>
                  </div>
                ))}
                <Button
                  href="/therapies"
                  variant="secondary"
                  className="mt-4 w-full sm:w-fit"
                >
                  Explore Therapies
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="What to expect"
            text="The first steps are simple, respectful and designed to help you feel informed before therapy begins."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {expectationSteps.map((step) => (
              <Card
                key={step.title}
                className="group relative overflow-hidden bg-surface/92 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_90px_rgba(67,67,67,0.10)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <IconFrame icon={step.icon} />
                  <p className="font-serif text-5xl leading-none text-accent/85">
                    {step.number}
                  </p>
                </div>
                <h3 className="mt-10 text-3xl leading-tight text-text">
                  {step.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-text/75">
                  {step.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-surface/80 bg-surface p-7 shadow-[0_24px_80px_rgba(67,67,67,0.08)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
            <SectionHeading
              title="Fees and appointments"
              text="Clear information about sessions, fees and availability will be provided before therapy begins."
            />
            <Button
              href="/fees"
              variant="secondary"
              className="w-full sm:w-fit lg:min-w-40"
            >
              View Fees
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-dark-sage/25 bg-dark-sage px-6 py-16 text-center shadow-[0_28px_90px_rgba(67,67,67,0.12)] sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute inset-x-10 top-0 h-px bg-surface/35" />
            <h2 className="mx-auto max-w-3xl text-5xl leading-[1.02] text-surface sm:text-6xl">
              Ready to take the next step?
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-surface/88">
              You are welcome to get in touch when you feel ready.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              className="mt-10 border-surface bg-surface text-text hover:border-accent hover:bg-surface/95"
            >
              Contact Claire
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
