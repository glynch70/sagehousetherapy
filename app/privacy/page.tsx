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
        title="How your enquiry is handled."
        introduction="This page explains how this website handles appointment enquiries and payment links. Ask Claire separately about the privacy arrangements for therapy and clinical records."
      />
      <Section className="bg-surface/70">
        <Container className="max-w-3xl space-y-9">
          {[
            [
              "The appointment enquiry",
              "The enquiry form collects your name, reply email, enquiry type, session format and availability preferences. When you select ‘Send enquiry to Claire’, the website processes those details and sends them to Claire through Resend, the email delivery provider. Resend processes and retains message content and delivery records under its privacy arrangements. Claire uses the message to respond and arrange appointments. The website does not save enquiries in its own database or local storage and does not reserve an appointment.",
            ],
            [
              "Email alternatives",
              "If you use the alternative ‘Open email to Claire’ button, it passes the prepared message to your email app. You still need to press send there. Your chosen email service handles the message under its own privacy arrangements. If you copy the message, it is placed on your device’s clipboard. Please use the form for practical arrangements and leave out sensitive clinical information.",
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
              "The website is hosted on Vercel. The hosting service processes technical request information needed to deliver and protect the site. Basic spam checks use a hidden form field, submission timing and a short-lived, hashed network identifier to limit repeated submissions. This identifier is kept in server memory for up to 15 minutes, subject to server restarts; enquiry contents are not deliberately written to application logs. This website’s application code does not add advertising trackers, analytics tools or embedded third-party booking widgets.",
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

