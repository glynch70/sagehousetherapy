import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  introduction: string;
};

export function PageIntro({ eyebrow, title, introduction }: PageIntroProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-dark-sage">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-5xl leading-[0.95] text-text sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-text/80">
            {introduction}
          </p>
        </div>
      </Container>
    </Section>
  );
}
