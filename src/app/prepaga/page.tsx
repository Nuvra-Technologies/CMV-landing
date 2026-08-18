import type { Metadata } from "next";

import {
  Badge,
  Container,
  Heading,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Prepaga CMV | Próximamente",
  description:
    "CMV está preparando una nueva propuesta de cobertura médica. Próximamente encontrarás más información sobre la futura prepaga.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/prepaga",
  },
  openGraph: {
    title: "Prepaga CMV | Próximamente",
    description:
      "Conocé próximamente la nueva propuesta de cobertura médica de CMV Centro Médico.",
    url: "/prepaga",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepaga CMV | Próximamente",
    description:
      "CMV está preparando una nueva propuesta de cobertura médica.",
  },
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
            Prepaga CMV: próximamente
          </Heading>
        </div>
      </Container>
    </Section>
  );
}