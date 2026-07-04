import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "About Claire",
  description:
    "Learn more about Claire and the thoughtful approach behind Sage House Therapy.",
};

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="About"
      title="About Claire"
      introduction="This page will introduce Claire, her professional background and the values that shape the therapeutic work at Sage House Therapy."
    />
  );
}
