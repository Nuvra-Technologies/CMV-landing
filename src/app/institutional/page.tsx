import {
  Badge,
  Container,
  Button,
  Heading,
  IconWrapper,
  Reveal,
  Section,
} from "@/components/ui";
import { InfoCard } from "@/components/ui/InfoCard";
import {
  INSTITUTIONAL,
  getYearsSinceFoundation,
} from "@/constants/institutional";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMV Centro Médico | Información institucional en Tucumán",
  description:
    "Conocé CMV Centro Médico en Tucumán: nuestra historia, instalaciones, horarios de atención y servicios para pacientes y profesionales de la salud.",
  alternates: {
    canonical: "/institucional",
  },
  openGraph: {
    title: "CMV Centro Médico | Información institucional en Tucumán",
    description:
      "Conocé la historia, instalaciones, horarios y servicios de CMV Centro Médico en Tucumán.",
    url: "/institucional",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMV Centro Médico | Información institucional en Tucumán",
    description:
      "Conocé la historia, instalaciones, horarios y servicios de CMV Centro Médico en Tucumán.",
  },
};

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21v-4h6v4M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="m10.5 12.5 8-8M16 5l2 2M13 8l2 2" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function InstitutionalPage() {
  const years = getYearsSinceFoundation();

  return (
    <>
      <Section background="surface" spacing="md">
        <Container>
          <Reveal direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary">
                Fundados el {INSTITUTIONAL.foundedDate}
              </Badge>

              <Heading
                as="h1"
                align="center"
                size="lg"
                eyebrow="Sobre nosotros"
                wrapperClassName="mt-5"
              >
                CMV Centro Médico en Tucumán
              </Heading>

              <p className="text-primary mt-4 text-lg font-semibold italic">
                “{INSTITUTIONAL.slogan}”
              </p>

              <p className="text-muted mt-4 text-base leading-7 sm:text-lg whitespace-pre-line">
                {INSTITUTIONAL.fullInfo}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <Reveal direction="up">
            <Heading
              align="center"
              eyebrow="Nuestras instalaciones"
              description={INSTITUTIONAL.facilities.title}
              wrapperClassName="mx-auto max-w-2xl"
            >
              Instalaciones de CMV Centro Médico
            </Heading>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INSTITUTIONAL.facilities.features.map((feature) => (
                <li
                  key={feature.id}
                  className="border-border bg-background flex items-center gap-3 rounded-xl border p-4 shadow-sm"
                >
                  <IconWrapper size="sm" variant="primary">
                    <CheckIcon />
                  </IconWrapper>

                  <span className="text-foreground text-sm font-semibold">
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section background="primary-soft" spacing="lg">
        <Container>
          <Reveal direction="up">
            <Heading
              align="center"
              eyebrow="Horarios"
              description="Conocé cuándo podés visitarnos como paciente o gestionar el alquiler de un consultorio."
              wrapperClassName="mx-auto max-w-2xl"
            >
              Horarios de atención de CMV
            </Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal direction="up" delay={80}>
              <InfoCard title="Atención a pacientes" icon={<ClockIcon />}>
                <p>{INSTITUTIONAL.attentionSchedule.days}</p>
                <p className="text-foreground mt-1 font-semibold">
                  {INSTITUTIONAL.attentionSchedule.morning} y{" "}
                  {INSTITUTIONAL.attentionSchedule.afternoon}
                </p>
              </InfoCard>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <InfoCard title="Alquiler de consultorios" icon={<KeyIcon />}>
                <p>{INSTITUTIONAL.officeRental.schedule.days}</p>
                <p className="text-foreground mt-1 font-semibold">
                  {INSTITUTIONAL.officeRental.schedule.morning} y{" "}
                  {INSTITUTIONAL.officeRental.schedule.afternoon}
                </p>
              </InfoCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal direction="left">
              <IconWrapper size="lg" variant="accent">
                <BuildingIcon />
              </IconWrapper>

              <Heading
                eyebrow="Para profesionales"
                description={INSTITUTIONAL.officeRental.description}
                wrapperClassName="mt-5"
              >
                Alquiler de consultorios
              </Heading>

              <ul className="mt-6 flex flex-wrap gap-3">
                {INSTITUTIONAL.officeRental.modalities.map((modality) => (
                  <li
                    key={modality}
                    className="border-primary text-primary rounded-full border px-4 py-1.5 text-sm font-semibold"
                  >
                    {modality}
                  </li>
                ))}
              </ul>

              <p className="text-muted mt-6 text-sm leading-6">
                Horario disponible: {INSTITUTIONAL.officeRental.schedule.morning}{" "}
                (mañana) y {INSTITUTIONAL.officeRental.schedule.afternoon}{" "}
                (tarde), de {INSTITUTIONAL.officeRental.schedule.days.toLowerCase()}.
              </p>

              <Button
                href="/alquiler-consultorios"
                size="lg"
                className="mt-8"
              >
                Consultar disponibilidad
              </Button>
            </Reveal>

            <Reveal
              direction="right"
              delay={100}
              className="border-border relative aspect-[4/3] overflow-hidden rounded-3xl border bg-gradient-to-br from-secondary via-background to-primary-soft shadow-md"
            >
              <Image
                src="/images/office-2.jpg"
                alt="Consultorio del Centro Médico CMV en Tucumán"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}