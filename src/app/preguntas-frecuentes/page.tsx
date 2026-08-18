// src/app/preguntas-frecuentes/page.tsx
import { Accordion } from "@/components/ui/Accordion";
import { Container, Heading, Reveal, Section } from "@/components/ui";
import { FAQ_ITEMS } from "@/constants/faq";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | CMV Centro Médico Tucumán",
  description:
    "Encontrá respuestas sobre turnos médicos, especialidades, estudios, coberturas, atención y servicios de CMV Centro Médico en Tucumán.",
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas frecuentes | CMV Centro Médico Tucumán",
    description:
      "Respuestas a las consultas más frecuentes sobre turnos, especialidades, estudios, coberturas y atención en CMV Centro Médico.",
    url: "/preguntas-frecuentes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas frecuentes | CMV Centro Médico Tucumán",
    description:
      "Respuestas a las consultas más frecuentes sobre turnos, especialidades, estudios, coberturas y atención en CMV Centro Médico.",
  },
};

function groupByCategory(items: typeof FAQ_ITEMS) {
  return items.reduce<Record<string, typeof FAQ_ITEMS>>((groups, item) => {
    groups[item.category] ??= [];
    groups[item.category].push(item);
    return groups;
  }, {});
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function FAQPage() {
  const groups = groupByCategory(FAQ_ITEMS);
  const categories = Object.keys(groups);

  return (
    <>
      <Section background="surface" spacing="md">
        <Container>
          <Reveal direction="up">
            <Heading
              as="h1"
              align="center"
              size="lg"
              eyebrow="Información útil"
              description="Encontrá respuestas sobre turnos médicos, especialidades, estudios, coberturas y atención en CMV Centro Médico."
              wrapperClassName="mx-auto max-w-2xl"
            >
              Preguntas frecuentes
            </Heading>
          </Reveal>

          <nav
            aria-label="Categorías de preguntas frecuentes"
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <a
                key={category}
                href={`#${slugify(category)}`}
                className={cn(
                  "border-border text-foreground rounded-full border bg-background",
                  "hover:border-primary hover:text-primary px-4 py-2 text-sm font-medium",
                  "transition-colors",
                )}
              >
                {category}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-14">
            {Object.entries(groups).map(([category, items]) => (
              <div key={category} id={slugify(category)} className="scroll-mt-24">
                <Reveal direction="up">
                  <Heading as="h2" size="sm" wrapperClassName="mb-6">
                    {category}
                  </Heading>
                </Reveal>

                <Reveal direction="up" delay={80}>
                  <div className="bg-background border-border rounded-3xl border px-6 shadow-sm sm:px-8">
                    <Accordion items={items} />
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}