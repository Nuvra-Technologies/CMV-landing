import Image from "next/image";

import { Badge, Button, Container, Heading, IconWrapper, Reveal, Section } from "@/components/ui";
import { HERO_CONTENT } from "@/constants/hero";
import { HeroImageCarousel } from "./HeroImageCarousel";

export function Hero() {
  return (
    <Section id="inicio" background="surface" spacing="sm" className="isolate">
      <Container>
        <div className="grid min-h-[calc(100dvh-var(--header-height))] items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
          <Reveal direction="left" className="relative z-10">
            <Badge variant="secondary">{HERO_CONTENT.eyebrow}</Badge>

            <Heading
              as="h1"
              size="xl"
              description={HERO_CONTENT.description}
              wrapperClassName="mt-5 max-w-3xl"
            >
              {HERO_CONTENT.title}
            </Heading>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={HERO_CONTENT.primaryAction.href}
                size="lg"
                fullWidth
                className="sm:w-auto"
              >
                {HERO_CONTENT.primaryAction.label}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Button>

              <Button
                href={HERO_CONTENT.secondaryAction.href}
                size="lg"
                variant="outline"
                fullWidth
                className="sm:w-auto"
              >
                {HERO_CONTENT.secondaryAction.label}
              </Button>

              <Button
                href={HERO_CONTENT.tertiaryAction.href}
                size="lg"
                variant="outline"
                fullWidth
                className="sm:w-auto"
              >
                {HERO_CONTENT.tertiaryAction.label}
              </Button>
            </div>

            <ul
              aria-label="Características principales"
              className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            >
              {HERO_CONTENT.indicators.map((indicator) => (
                <li key={indicator} className="flex items-center gap-3">
                  <IconWrapper size="sm" variant="primary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </IconWrapper>

                  <span className="text-foreground text-sm leading-5 font-semibold">
                    {indicator}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            direction="right"
            delay={120}
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto"
          >
            <div
              aria-hidden="true"
              className="bg-secondary absolute -top-6 -right-4 size-32 rounded-full opacity-70 blur-sm sm:size-44"
            />

            <div
              aria-hidden="true"
              className="bg-accent absolute -bottom-5 -left-5 size-24 rounded-full opacity-25 sm:size-36"
            />

            <div className="border-border from-secondary via-background to-primary-soft relative aspect-[2/3] overflow-hidden rounded-4xl border bg-linear-to-br shadow-md sm:aspect-4/3 lg:aspect-4/5">
              <HeroImageCarousel images={HERO_CONTENT.images} />

              <div className="absolute inset-x-3 bottom-3 flex flex-col gap-2 sm:inset-x-4 sm:bottom-4 sm:flex-row sm:items-end sm:gap-3">
                {/* Card "Turnos online" + botón */}
                <div className="flex flex-col gap-2 rounded-xl border border-white/70 bg-white/90 p-2.5 shadow-sm backdrop-blur-md sm:flex-1 sm:p-3">
                  <div className="flex items-center gap-2">
                    <IconWrapper size="sm" variant="accent">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M3 11h18" />
                        <path d="M8 15h2" />
                        <path d="M14 15h2" />
                      </svg>
                    </IconWrapper>

                    <div className="min-w-0">
                      <p className="text-foreground text-sm font-bold leading-tight">Turnos online</p>
                      <p className="text-muted text-xs leading-tight">Sistema de turnos online</p>
                    </div>
                  </div>

                  <Button href={HERO_CONTENT.primaryAction.href} size="sm" fullWidth>
                    Sacar turno
                  </Button>
                </div>

                {/* Card "¿Por qué elegirnos?" */}
                <div className="rounded-xl border border-white/70 bg-white/90 p-3 shadow-sm backdrop-blur-md sm:flex-1">
                  <p className="text-foreground text-xs font-bold leading-tight">
                    {HERO_CONTENT.whyChooseUs.title}
                  </p>

                  <ul className="mt-2 flex gap-x-3 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-col sm:gap-1 sm:overflow-visible">
                    {HERO_CONTENT.whyChooseUs.items.map((item) => (
                      <li key={item} className="flex shrink-0 items-center gap-1.5 sm:items-start">
                        <IconWrapper
                          size="sm"
                          variant="primary"
                          className="size-3.5 shrink-0 [&>svg]:size-2.5"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </IconWrapper>

                        <span className="text-muted text-[0.7rem] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
