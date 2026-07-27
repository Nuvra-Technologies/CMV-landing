import type { Metadata } from "next";

import {
  Badge,
  Container,
  Heading,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Prepaga",
  description: "Información sobre la futura prepaga de CMV.",
};

export default function PrepaidPage() {
  return (
    <Section
      background="primary-soft"
      spacing="lg"
      className="flex min-h-[calc(100dvh-var(--header-height))] items-center"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary">Próximamente</Badge>

          <Heading
            as="h1"
            align="center"
            size="xl"
            eyebrow="Prepaga CMV"
            description="Estamos preparando una nueva propuesta de cobertura médica. La información será incorporada próximamente."
            wrapperClassName="mt-5"
          >
            Cuidarte será más simple
          </Heading>
        </div>
      </Container>
    </Section>
  );
}