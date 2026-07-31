import { Hero } from "@/components/sections";
import {
  Container,
  CTA,
  Heading,
  Reveal,
  Section,
} from "@/components/ui";
import { SpecialtiesPreview } from "@/components/sections/SpecialtiesPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { Location } from "@/components/sections/Location";


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
              title="Solicitá tu turno sin llamar a recepción"
              description="El acceso definitivo será reemplazado por el enlace del sistema de gestión."
              primaryAction={{
                label: "Acceso próximamente",
                href: "#turnos",
              }}
            />
          </Reveal>
        </Container>
      </Section>

      <SpecialtiesPreview />

      <FAQPreview />

      <Location />
    </>
  );
}