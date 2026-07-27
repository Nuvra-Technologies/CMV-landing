import type { Metadata } from "next";

import {
  Badge,
  Container,
  Heading,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Alquiler de consultorios",
  description: "Información sobre el alquiler de consultorios en CMV.",
};

export default function RentalOfficesPage() {
  return (
    <Section
      background="surface"
      spacing="lg"
      className="flex min-h-[calc(100dvh-var(--header-height))] items-center"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <Badge variant="accent">Profesionales</Badge>

          <Heading
            as="h1"
            size="xl"
            eyebrow="Espacios disponibles"
            description="Esta página será completada cuando estén disponibles las fotografías y la información de los consultorios."
            wrapperClassName="mt-5"
          >
            Alquiler de consultorios
          </Heading>
        </div>
      </Container>
    </Section>
  );
}