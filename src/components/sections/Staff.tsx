import { Container, Heading, Reveal, Section } from "@/components/ui";
import { StaffGrid } from "@/components/ui/StaffGrid";
import { STAFF } from "@/constants/staff";

export function Staff() {
  return (
    <Section id="equipo-medico" background="surface" spacing="lg">
      <Container>
        <Reveal direction="up">
          <Heading
            align="center"
            eyebrow="Nuestro equipo"
            description="Profesionales especializados, comprometidos con tu salud y la de tu familia."
            wrapperClassName="mx-auto max-w-2xl"
          >
            Staff médico
          </Heading>
        </Reveal>

        <div className="mt-12">
          <StaffGrid staff={STAFF} />
        </div>
      </Container>
    </Section>
  );
}