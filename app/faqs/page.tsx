import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageCta } from "@/components/sections/page-cta";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about therapy with Sage House Therapy.",
};

export default function FaqsPage() {
  const faqs = [
    {
      question: "Can I check available spaces?",
      answer:
        "Yes. Choose ‘Check available spaces’ on the homepage, or ‘Ask about available spaces’ in the appointment enquiry. Appointments are offered Tuesday–Thursday from 8:30am, with sessions finishing by 7:30pm, and on Friday mornings. The 6:30pm–7:30pm appointment is a 60-minute session. Claire checks her diary and confirms available start times directly. The website does not show a live calendar or reserve appointments automatically.",
    },
    {
      question: "What is the cancellation and refund policy?",
      answer:
        "Your payment will be refunded if you cancel with at least 48 hours’ notice. If Claire cancels your session, you will be refunded. Contact Claire directly to cancel or discuss a change to your appointment.",
    },

    {
      question: "Does an online enquiry book an appointment?",
      answer:
        "No. Complete the form, review your details and select ‘Send enquiry to Claire’ to send it directly. Claire then confirms availability, the fee and session arrangements with you directly. No time is reserved by completing the form.",
    },
    {
      question: "When do I pay?",
      answer:
        "The 15-minute consultation is free. Therapy sessions must be paid for before the session to hold the appointment. Agree a suitable time with Claire first; she will then explain how to pay. A payment by itself does not create a booking.",
    },
    {
      question: "How do I know if therapy is right for me?",
      answer:
        "You do not need to be certain before making contact. You may have something specific you want support with, or a more general sense that life feels difficult or stuck. An initial conversation can help you ask questions and consider whether therapy feels like a useful next step.",
    },
    {
      question: "What happens when I first get in touch?",
      answer:
        "You can email Claire with a brief outline of what you are looking for. Claire can then respond with current practical information and arrange a conversation so you can talk through what you need without committing to ongoing sessions straight away.",
    },
    {
      question: "Do I need to choose a therapy approach?",
      answer:
        "No. Claire works with EMDR, Compassion Focused Therapy and EFT, but you do not need to know which approach fits before you begin. The options can be discussed with you and shaped around your experiences, preferences and goals.",
    },
    {
      question: "Will I have to talk about everything straight away?",
      answer:
        "No. Therapy can move at a client-led, unhurried pace. Time can be spent building trust, finding ways to feel steady and deciding together what you are ready to explore. You can pause or ask questions at any point.",
    },
    {
      question: "What is EMDR like?",
      answer:
        "EMDR is a structured therapeutic approach that may use guided eye movements or alternating taps while working with difficult memories or experiences. Claire will explain each stage and check the pace with you. You remain awake, aware and involved throughout.",
    },
    {
      question: "Is therapy confidential?",
      answer:
        "Confidentiality is an important part of therapy. Claire will explain how information is handled, including the limited circumstances in which confidentiality may need to be broken, before therapeutic work begins so you can ask any questions.",
    },
    {
      question: "How much do sessions cost?",
      answer:
        "A 15-minute consultation is free. The fee is £65 for a 60-minute session or £85 for a 90-minute therapeutic session. Sessions are available virtually or in person at The Wellness Barn.",
    },
    {
      question: "What if I am nervous about starting?",
      answer:
        "Feeling uncertain is very common. You do not need to arrive with the right words or a clear plan. Claire aims to make the first steps calm and straightforward, with room for you to decide what feels comfortable.",
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Frequently Asked Questions"
        title="A little clarity before you begin."
        introduction="It is natural to have questions about therapy. These answers offer a starting point, and you are always welcome to contact Claire if there is something else you would like to know."
      />

      <Section className="border-y border-border bg-surface/70">
        <Container className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-40">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              Before your first session
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-text sm:text-5xl">
              Questions are welcome.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text/75">
              Therapy should feel understandable and collaborative. Claire will
              make space for practical questions as well as conversations about
              the work itself.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:py-7">
                  <span className="flex gap-4 sm:gap-6">
                    <span className="mt-1 font-serif text-xl text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-2xl leading-tight text-text sm:text-3xl">
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className="relative h-8 w-8 shrink-0 rounded-full border border-dark-sage/35"
                    aria-hidden="true"
                  >
                    <span className="absolute left-2 top-1/2 h-px w-4 -translate-y-1/2 bg-dark-sage" />
                    <span className="absolute left-1/2 top-2 h-4 w-px -translate-x-1/2 bg-dark-sage transition-transform group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="pb-7 pl-10 pr-10 text-base leading-7 text-text/75 sm:pl-14 sm:pr-16 sm:text-lg sm:leading-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <PageCta
        eyebrow="Still wondering?"
        title="You can ask Claire directly."
        text="If your question is not covered here, send Claire a short email. There is no pressure to book simply because you have made contact."
        primaryHref="/contact"
        primaryLabel="Contact Claire"
        secondaryHref="/fees"
        secondaryLabel="View Fees Information"
      />
    </>
  );
}

