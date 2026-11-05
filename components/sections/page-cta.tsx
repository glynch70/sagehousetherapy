import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

type PageCtaProps = {
  eyebrow?: string;
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};
export function PageCta({
  eyebrow = "When you’re ready",
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageCtaProps) {
  return (
    <section className="border-y border-border bg-[#e9eee6] py-14 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-5">{title}</h2>
        </div>
        <div>
          <p className="max-w-xl text-lg leading-8 text-text/75">{text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={primaryHref}>
              {primaryLabel}
              <ArrowUpRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
