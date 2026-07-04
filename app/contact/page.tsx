import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sage House Therapy to enquire about consultations and appointments in Edinburgh.",
};

export default function ContactPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Contact"
        title="Contact"
        introduction="This page will provide a welcoming route to enquire about availability, consultations and appointments with Sage House Therapy."
      />
      <div className="-mt-10 mb-16 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Button href={`mailto:${contactEmail}`}>Email Sage House Therapy</Button>
        </div>
      </div>
    </div>
  );
}
