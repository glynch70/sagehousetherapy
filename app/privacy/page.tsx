import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageIntro } from "@/components/sections/page-intro";
import { contactEmail } from "@/lib/site";
export const metadata: Metadata = {
  title: "Website privacy",
  description:
    "How appointment enquiries and payment links work on the Sage House Therapy website.",
};
export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Website privacy"
        title="Your enquiry stays in your hands."
        introduction="This page explains how this website handles appointment enquiries and payment links. Ask Claire separately about the privacy arrangements for therapy and clinical records."
      />
      <Section className="bg-surface/70">
        <Container className="max-w-3xl space-y-9">
          {[
            [
              "The appointment enquiry",
              "The enquiry form prepares a message in your browser. It does not submit your entries to a website database, save them in local storage or reserve an appointment. Entries remain in the open page until you leave or reload it; your browser may remember information through its own autofill settings.",
            ],
            [
              "When you choose to email",
              "Selecting ‘Open email to Claire’ passes the prepared message to your email app. You still need to press send in that app. Your chosen email service handles the message under its own privacy arrangements. If you copy the message, it is placed on your device’s clipboard. Please use the form for practical arrangements and leave out sensitive clinical information.",
            ],
            [
              "Replies and appointments",
              "Claire receives the emails you send and uses them to respond to your enquiry and discuss arrangements. Contact her directly to ask how correspondence is kept or to request help with information you have sent.",
            ],
            [
              "Payment links",
              "The website does not collect card details or track individual payment status. If online checkout is available and you choose to continue, it opens SumUp’s website. SumUp handles the payment information under its own privacy arrangements. Claire can also share a payment link with you directly.",
            ],
            [
              "Website delivery",
              "The website is hosted on Vercel. The hosting service processes technical request information needed to deliver and protect the site. This website’s application code does not add advertising trackers, analytics tools or embedded third-party booking widgets.",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="text-3xl">{title}</h2>
              <p className="mt-4 text-lg leading-8 text-text/75">{text}</p>
            </div>
          ))}
          <p className="text-lg leading-8">
            Questions about your information? Email{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="break-all underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
