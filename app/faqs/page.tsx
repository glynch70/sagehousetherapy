import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about therapy with Sage House Therapy.",
};

export default function FaqsPage() {
  return (
    <PageIntro
      eyebrow="FAQs"
      title="Frequently Asked Questions"
      introduction="This page will answer common questions about starting therapy, booking sessions, confidentiality and what to expect."
    />
  );
}
