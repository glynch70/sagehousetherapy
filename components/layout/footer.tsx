import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { contactEmail, navigation, openingHours } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.25fr_0.75fr_0.8fr] lg:gap-14">
        <div className="max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="Sage House Therapy home"
          >
            <Image
              src="/images/sage-house-logo.png"
              alt="Sage House Therapy logo"
              width={88}
              height={88}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-4 text-base leading-7 text-text/75">
            A calm, compassionate space supporting adults across Edinburgh.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-dark-sage">
            Quick Links
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-text/75">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-dark-sage">
            Contact
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-text/75">
            <p>Edinburgh</p>
            <Link
              href={`mailto:${contactEmail}`}
              className="block font-medium text-text transition-colors hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {contactEmail}
            </Link>
            <div>
              {openingHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-5 text-sm text-text/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Sage House Therapy</p>
          <Link
            href="https://bearmedia.co.uk"
            className="transition-colors hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            target="_blank"
            rel="noreferrer"
          >
            Website by Bear Media
          </Link>
        </Container>
      </div>
    </footer>
  );
}
