import Link from "next/link";

import { Container, Heading, Reveal, Section } from "@/components/ui";
import { SpecialtiesGrid } from "@/components/ui/SpecialtiesGrid";
import { SPECIALTIES } from "@/constants/specialties";

const PREVIEW_LIMIT = 6;

export function SpecialtiesPreview() {
  const featured = SPECIALTIES.slice(0, PREVIEW_LIMIT);

  return (
    <Section id="especialidades" spacing="lg">
      <Container>
        <Reveal direction="up">
          <Heading
            align="center"
            eyebrow="Atención integral"
            description="Contamos con un equipo de profesionales en distintas áreas para acompañarte en cada etapa de tu salud."
            wrapperClassName="mx-auto max-w-2xl"
          >
            Especialidades médicas
          </Heading>
        </Reveal>

        <div className="mt-12">
          <SpecialtiesGrid specialties={featured} />
        </div>

        {SPECIALTIES.length > PREVIEW_LIMIT && (
          <Reveal direction="up" delay={100}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/especialidades"
                className="text-primary hover:text-primary-hover inline-flex items-center gap-2 text-sm font-semibold"
              >
                Ver todas las especialidades

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-4"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}