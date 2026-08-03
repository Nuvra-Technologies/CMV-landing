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
              title="Solicitá tu turno sin llamar a recepción"
              description="El acceso definitivo será reemplazado por el enlace del sistema de gestión."
              primaryAction={{
                label: "Acceso próximamente",
                href: "#turnos",
              }}
            />
            <p className="text-muted mt-4 text-center text-sm">
              ¿No sabés cómo sacar un turno?{" "}
              <Link
                href="/como-sacar-turno"
                className="text-primary hover:text-primary-hover font-semibold"
              >
                Mirá el paso a paso
              </Link>
            </p>
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