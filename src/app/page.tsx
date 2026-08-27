import { Hero } from "@/components/sections";
import {
  Container,
  CTA,
  Heading,
  Reveal,
  Section,
} from "@/components/ui";
import Link from "next/link";
import { SpecialtiesPreview } from "@/components/sections/SpecialtiesPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { Location } from "@/components/sections/Location";
import { InstitutionalPreview } from "@/components/sections/InstitutionalPreview"


export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="turnos"
        background="primary-soft"
        spacing="lg"
      >
        <Container>
          <Reveal direction="up">
            <CTA
              eyebrow="Turnos online"
              title="Solicitá tu turno paso a paso"
              description=""
              primaryAction={{
                label: "¿Cómo sacar turno?",
                href: "/como-sacar-turno",
              }}
            />
          </Reveal>
        </Container>
      </Section>

      <InstitutionalPreview />

      <SpecialtiesPreview />

      <FAQPreview />

      <Location />
    </>
  );
}