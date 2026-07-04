import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Therapies",
  description:
    "Explore the therapy approaches and support available through Sage House Therapy.",
};

export default function TherapiesPage() {
  return (
    <PageIntro
      eyebrow="Therapies"
      title="Therapies"
      introduction="This page will outline the therapy approaches available and how sessions can support adults with emotional wellbeing, relationships and life transitions."
    />
  );
}
