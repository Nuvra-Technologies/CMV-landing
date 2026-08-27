"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button, Container } from "@/components/ui";
import { APPOINTMENT_URL, MAIN_NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-background/90 border-transparent",
      )}
    >
      <Container>
        <div className="flex h-(--header-height) items-center justify-between gap-4">
          <Link
            href="/#inicio"
            aria-label="Centro de Medicina Vascular Corazón de Jesús - Ir al inicio"
            className="focus-visible:ring-primary flex min-w-0 items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:gap-3"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo-cmv.png"
              alt=""
              width={48}
              height={48}
              priority
              className="size-10 shrink-0 object-contain sm:size-12"
            />

            <span className="flex min-w-0 flex-col leading-tight">
              <span className="text-foreground whitespace-nowrap text-[0.7rem] font-bold tracking-tight sm:text-sm lg:text-base">
                Centro de Medicina Vascular
              </span>

              <span className="text-muted whitespace-nowrap text-[0.65rem] font-medium sm:text-xs">
                Corazón de Jesús
              </span>
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-primary focus-visible:text-primary focus-visible:ring-primary block rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button href={APPOINTMENT_URL} size="sm" variant="outline">
              Sacar turno
            </Button>
          </div>

          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            onClick={toggleMenu}
            className="text-foreground hover:bg-surface focus-visible:ring-primary inline-flex size-11 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none lg:hidden"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="size-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="size-6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 lg:hidden",
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <nav aria-label="Navegación móvil" className="border-border border-t py-4">
              <ul className="flex flex-col gap-1">
                {MAIN_NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-foreground hover:bg-surface hover:text-primary focus-visible:ring-primary block rounded-xl px-4 py-3 font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 px-4">
                <Button href={APPOINTMENT_URL} onClick={closeMenu} variant="outline" fullWidth>
                  Sacar turno
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
