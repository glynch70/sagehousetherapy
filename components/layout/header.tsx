"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur transition-shadow duration-300",
        hasScrolled && "shadow-[0_14px_40px_rgba(67,67,67,0.08)]",
      )}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Sage House Therapy home"
        >
          <Image
            src="/images/sage-house-logo.png"
            alt="Sage House Therapy logo"
            width={104}
            height={104}
            priority
            className="h-[42px] w-auto sm:h-[52px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm font-medium text-text/75">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-sm transition-colors hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                    pathname === item.href && "text-dark-sage",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button href="/contact" size="sm">
            Book a Consultation
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-dark-sage hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close navigation" : "Open navigation"}
          </span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300",
                isMenuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-300",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300",
                isMenuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-t border-border bg-surface/95 transition-[grid-template-rows,opacity] duration-300 lg:hidden",
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <Container className="py-5">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-medium text-text/80 transition-colors hover:bg-sage/25 hover:text-dark-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                        pathname === item.href && "bg-sage/25 text-dark-sage",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              href="/contact"
              className="mt-5 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Consultation
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
