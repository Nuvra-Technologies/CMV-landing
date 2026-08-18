import { Button, Container, Heading, Reveal, Section } from "@/components/ui";
import { BookingQRCode } from "@/components/ui/BookingQRCode";
import { BookingStepItem } from "@/components/ui/BookingStepItem";
import { BOOKING_STEPS } from "@/constants/booking";
import { APPOINTMENT_URL } from "@/constants/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo sacar un turno médico | CMV Centro Médico",
  description:
    "Aprendé cómo sacar un turno médico online en CMV Centro Médico, Tucumán. Seguí el paso a paso y accedé fácilmente al sistema de turnos.",
  keywords: [
    "sacar turno médico Tucumán",
    "turnos médicos Tucumán",
    "turnos online Tucumán",
    "solicitar turno médico",
    "CMV Centro Médico",
    "turnos CMV",
  ],
  alternates: {
    canonical: "/como-sacar-turno",
  },
  openGraph: {
    title: "Cómo sacar un turno médico | CMV Centro Médico",
    description:
      "Conocé el paso a paso para solicitar tu turno médico online en CMV Centro Médico.",
    url: "/como-sacar-turno",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo sacar un turno médico | CMV Centro Médico",
    description:
      "Conocé el paso a paso para solicitar tu turno médico online en CMV Centro Médico.",
  },
}

export default function BookingGuidePage() {
  return (
    <>
      <Section background="surface" spacing="md">
        <Container>
          <Reveal direction="up">
            <Heading
              as="h1"
              align="center"
              size="lg"
              eyebrow="Turnos online"
              description="Conocé el paso a paso para solicitar tu turno médico en CMV Centro Médico de forma rápida y sencilla."
              wrapperClassName="mx-auto max-w-2xl"
            >
              Cómo sacar un turno médico
            </Heading>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <div className="mt-8 flex justify-center">
              <Button href={APPOINTMENT_URL} size="lg">
                Sacar turno ahora
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <Reveal direction="up" className="lg:col-span-2">
              <ol className="flex flex-col">
                {BOOKING_STEPS.map((step, index) => (
                  <BookingStepItem
                    key={step.id}
                    step={step}
                    isLast={index === BOOKING_STEPS.length - 1}
                  />
                ))}
              </ol>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="border-border bg-surface sticky top-24 flex flex-col items-center gap-5 rounded-2xl border p-6 text-center shadow-sm sm:p-8">
                <h2 className="text-foreground text-lg font-bold">
                  Escaneá para acceder
                </h2>

                <BookingQRCode value={"https://corazondejesus.ar/autoturno.html"} />

                <p className="text-muted text-sm leading-6">
                  Apuntá la cámara de tu celular al código para ir directo al
                  sistema de turnos.
                </p>

                <Button href={APPOINTMENT_URL} size="lg" fullWidth>
                  Sacar turno
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}