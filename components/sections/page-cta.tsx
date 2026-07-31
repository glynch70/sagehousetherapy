import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
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
  eyebrow = "Take the next step",
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageCtaProps) {
  return (
    <Section className="pt-0 sm:pt-0 lg:pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-dark-sage/25 bg-surface px-6 py-12 shadow-[0_24px_80px_rgba(67,67,67,0.08)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-sage/60" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-sage">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-4xl leading-[1.02] text-text sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text/75">
              {text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
