import Link from "next/link";

import { Accordion } from "@/components/ui/Accordion";
import { Container, Heading, Reveal, Section } from "@/components/ui";
import { FAQ_ITEMS } from "@/constants/faq";

const PREVIEW_LIMIT = 5;

export function FAQPreview() {
  const featured = FAQ_ITEMS.slice(0, PREVIEW_LIMIT);

  return (
    <Section id="preguntas-frecuentes" background="secondary" spacing="lg">
      <Container>
        <Reveal direction="up">
          <Heading
            align="center"
            eyebrow="Información útil"
            description="Respuestas claras a las consultas más habituales de los pacientes."
            wrapperClassName="mx-auto max-w-2xl"
          >
            Preguntas frecuentes
          </Heading>
        </Reveal>

        <Reveal direction="up" delay={80}>
          <div className="bg-background border-border mx-auto mt-10 max-w-3xl rounded-3xl border px-6 shadow-sm sm:px-8">
            <Accordion items={featured} />
          </div>
        </Reveal>

        {FAQ_ITEMS.length > PREVIEW_LIMIT && (
          <Reveal direction="up" delay={140}>
            <div className="mt-8 flex justify-center">
              <Link
                href="/preguntas-frecuentes"
                className="text-primary hover:text-primary-hover inline-flex items-center gap-2 text-sm font-semibold"
              >
                Ver todas las preguntas

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