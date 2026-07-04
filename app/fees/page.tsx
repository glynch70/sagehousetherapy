import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "View placeholder information for Sage House Therapy fees and consultation details.",
};

export default function FeesPage() {
  return (
    <PageIntro
      eyebrow="Fees"
      title="Fees"
      introduction="This page will provide clear information about session fees, consultation options and practical arrangements for therapy."
    />
  );
}
