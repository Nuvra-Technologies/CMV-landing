import Image from "next/image";

import {
  Badge,
  Button,
  Container,
  Heading,
  IconWrapper,
  Reveal,
  Section,
} from "@/components/ui";
import { HERO_CONTENT } from "@/constants/hero";

export function Hero() {
  return (
    <Section
      id="inicio"
      background="surface"
      spacing="sm"
      className="isolate"
    >
      <Container>
        <div className="grid min-h-[calc(100dvh-var(--header-height))] items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
          <Reveal direction="left" className="relative z-10">
            <Badge variant="secondary">
              {HERO_CONTENT.eyebrow}
            </Badge>

            <Heading
              as="h1"
              size="xl"
              description={HERO_CONTENT.description}
              wrapperClassName="mt-5 max-w-3xl"
            >
              {HERO_CONTENT.title}
            </Heading>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            </div>

            <ul
              aria-label="Características principales"
              className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            >
              {HERO_CONTENT.indicators.map((indicator) => (
                <li
                  key={indicator}
                  className="flex items-center gap-3"
                >
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

                  <span className="text-foreground text-sm font-semibold leading-5">
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

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-secondary via-background to-primary-soft shadow-md sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={HERO_CONTENT.image.src}
                alt={HERO_CONTENT.image.alt}
                fill
                preload
                unoptimized
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]" //cuando tengamos la foto cambiar esto por className="object-cover" --- otra cosa, la foto debe ser webp o avif y con buena resolucion -> 1600px de ancho y ser vertical no seas qlll --- dejá de llorar pa
              />

              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-md sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <IconWrapper size="md" variant="accent">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                      />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M3 11h18" />
                      <path d="M8 15h2" />
                      <path d="M14 15h2" />
                    </svg>
                  </IconWrapper>

                  <div>
                    <p className="text-foreground font-bold">
                      Turnos online
                    </p>

                    <p className="text-muted text-sm">
                      Disponible desde nuestro sistema de turnos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}