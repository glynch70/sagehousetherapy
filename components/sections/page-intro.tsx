import { Container } from "@/components/layout/container";

type PageIntroProps = { eyebrow?: string; title: string; introduction: string };
export function PageIntro({ eyebrow, title, introduction }: PageIntroProps) {
  return (
    <section className="border-b border-border pb-12 pt-10 sm:pb-16 sm:pt-14 lg:py-20">
      <Container>
        {eyebrow ? <p className="eyebrow mb-6">{eyebrow}</p> : null}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <h1 className="max-w-2xl text-5xl leading-[1.02] tracking-[-0.02em] text-text sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-text/75 lg:pb-1">
            {introduction}
          </p>
        </div>
      </Container>
    </section>
  );
}
