import { Container, Heading, Reveal, Section } from "@/components/ui";
import { EquipmentHighlight } from "@/components/ui/EquipmentHighlight";
import { SpecialtiesGrid } from "@/components/ui/SpecialtiesGrid";
import { SPECIALTIES } from "@/constants/specialties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialidades Médicas en Tucumán",
  description:
    "Conocé las especialidades médicas de CMV Centro Médico en Tucumán, incluyendo cardiología, clínica, cirugía vascular, neumonología, flebología, nutrición y más.",
  alternates: {
    canonical: "/especialidades",
  },
  openGraph: {
    title: "Especialidades Médicas en Tucumán | CMV",
    description:
      "Conocé las especialidades médicas disponibles en CMV Centro Médico, Tucumán.",
    url: "/especialidades",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CMV Centro Médico en Tucumán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Especialidades Médicas en Tucumán | CMV",
    description:
      "Conocé las especialidades médicas disponibles en CMV Centro Médico.",
    images: ["/og-image.png"],
  },
}

function groupByCategory(specialties: typeof SPECIALTIES) {
  return specialties.reduce<Record<string, typeof SPECIALTIES>>((groups, specialty) => {
    groups[specialty.category] ??= [];
    groups[specialty.category].push(specialty);
    return groups;
  }, {});
}

export default function EspecialidadesPage() {
  const groups = groupByCategory(SPECIALTIES);

  return (
    <>
      <Section background="surface" spacing="md">
        <Container>
          <Reveal direction="up">
            <Heading
              as="h1"
              align="center"
              size="lg"
              eyebrow="Atención integral"
              description="Explorá todas las especialidades disponibles y sacá tu turno online en la que necesites."
              wrapperClassName="mx-auto max-w-2xl"
            >
              Especialidades médicas en Tucumán
            </Heading>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="flex flex-col gap-16">
            <Reveal direction="up">
              <EquipmentHighlight />
            </Reveal>

            {Object.entries(groups).map(([category, specialties]) => (
              <div key={category}>
                <Reveal direction="up">
                  <Heading as="h2" size="sm" wrapperClassName="mb-8">
                    {category}
                  </Heading>
                </Reveal>

                <SpecialtiesGrid specialties={specialties} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
