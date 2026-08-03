import Link from "next/link";

import { Badge, Container, Heading, Reveal, Section } from "@/components/ui";
import {
  INSTITUTIONAL,
  getYearsSinceFoundation,
} from "@/constants/institutional";

export function InstitutionalPreview() {
  const years = getYearsSinceFoundation();

  return (
    <Section id="institucional" background="primary-soft" spacing="md">
      <Container>
        <Reveal direction="up">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary">
              +{years} años cuidando tu salud
            </Badge>

            <Heading
              align="center"
              eyebrow="Quiénes somos"
              wrapperClassName="mt-5"
            >
              {INSTITUTIONAL.slogan}
            </Heading>

            <p className="text-muted mt-4 text-base leading-7 sm:text-lg">
              {INSTITUTIONAL.intro}
            </p>

            <Link
              href="/institutional"
              className="text-primary hover:text-primary-hover mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Conocé más sobre nosotros

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
      </Container>
    </Section>
  );
}