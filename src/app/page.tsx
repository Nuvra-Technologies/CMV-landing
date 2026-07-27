import { Hero } from "@/components/sections";
import {
  Container,
  CTA,
  Heading,
  Reveal,
  Section,
} from "@/components/ui";

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

      <Section
        id="especialidades"
        spacing="lg"
        className="flex min-h-[70dvh] items-center"
      >
        <Container>
          <Reveal direction="up">
            <Heading
              align="center"
              eyebrow="Atención integral"
              description="Esta sección será desarrollada posteriormente por el integrante responsable."
            >
              Especialidades médicas
            </Heading>
          </Reveal>
        </Container>
      </Section>

      <Section
        id="preguntas-frecuentes"
        background="secondary"
        spacing="lg"
        className="flex min-h-[70dvh] items-center"
      >
        <Container>
          <Reveal direction="up">
            <Heading
              align="center"
              eyebrow="Información útil"
              description="Aquí se mostrarán respuestas claras a las consultas más habituales de los pacientes."
            >
              Preguntas frecuentes
            </Heading>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}