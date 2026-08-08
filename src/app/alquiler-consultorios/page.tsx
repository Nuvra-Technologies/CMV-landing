import type { Metadata } from "next";
import Image from "next/image";
import {
  Badge,
  Button,
  Container,
  Heading,
  Section,
} from "@/components/ui";
import { RentalIcon, type RentalIconName } from "@/components/ui/icons/rental-icons";

export const metadata: Metadata = {
  title: "Alquiler de consultorios",
  description:
    "Consultorios médicos equipados para profesionales de la salud en CMV Centro Médico.",
};

const benefits = [
  {
    title: "Consultorios equipados",
    description:
      "Espacios preparados para comenzar a atender desde el primer día.",
    icon: "office",
  },
  {
    title: "Excelente ubicación",
    description:
      "Un entorno accesible y pensado para brindar comodidad a profesionales y pacientes.",
    icon: "location",
  },
  {
    title: "Horarios flexibles",
    description:
      "Disponibilidad de módulos adaptados a las necesidades de cada profesional.",
    icon: "clock",
  },
  {
    title: "Ambiente profesional",
    description:
      "Instalaciones modernas dentro de un centro médico reconocido.",
    icon: "professional",
  },
] satisfies {
  title: string;
  description: string;
  icon: RentalIconName;
}[];

const includes = [
  "Consultorios completamente equipados",
  "Ambientes climatizados",
  "Sala de espera para pacientes",
  "Conexión Wi-Fi",
  "Espacios luminosos y confortables",
  "Excelente ubicación",
  "Entorno profesional",
  "Infraestructura moderna",
];

const gallery = [
  {
    src: "/images/office-1.jpg",
    alt: "Consultorio médico equipado en CMV",
  },
  {
    src: "/images/office-2.jpg",
    alt: "Sala de espera del centro médico",
  },
  {
    src: "/images/office-3.jpg",
    alt: "Consultorio luminoso con mobiliario",
  },
  {
    src: "/images/reception.jpg",
    alt: "Espacio profesional para atención médica",
  },
  {
    src: "/images/waiting-room.jpg",
    alt: "Recepción de CMV",
  },
];

export default function RentalOfficesPage() {
  return (
    <>
      {/* HERO */}

      <Section className="bg-secondary">
        <Container>
          <div className="mx-auto max-w-3xl py-20 text-center">
            <Badge>Profesionales</Badge>

            <Heading
              as="h1"
              size="xl"
              eyebrow="Espacios disponibles"
              description="Consultorios completamente equipados para profesionales de la salud que buscan un espacio cómodo, moderno y listo para atender pacientes."
              wrapperClassName="mt-5"
            >
              Alquiler de consultorios
            </Heading>

            <p className="mt-6 text-lg leading-8 text-muted">
              En CMV ofrecemos espacios diseñados para brindar una atención
              médica de calidad, con instalaciones modernas, excelente ubicación
              y un entorno profesional pensado para vos y tus pacientes.
            </p>

            <div className="mt-10 flex justify-center">
              <Button size="lg">Solicitar información</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* BENEFICIOS */}

      <Section>
        <Container>
          <div className="text-center">
            <Heading
              as="h2"
              size="lg"
              eyebrow="Beneficios"
              description="Todo lo necesario para que puedas desarrollar tu actividad profesional con comodidad."
            >
              ¿Por qué elegir CMV?
            </Heading>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, description, icon }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <RentalIcon name={icon} className="size-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* IMAGEN + TEXTO */}

      <Section className="bg-surface">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-md">
              <Image
                src="/images/office-4.jpg"
                alt="Consultorio médico completamente equipado en CMV Centro Médico"
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <Badge>Espacios modernos</Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground">
                Diseñados para brindar una excelente experiencia
              </h2>

              <p className="mt-6 leading-8 text-muted">
                Nuestros consultorios están preparados para recibir distintas
                especialidades médicas en un entorno cómodo, seguro y
                profesional. Cada espacio fue pensado para favorecer tanto la
                experiencia del profesional como la comodidad de los pacientes.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Consultorios totalmente equipados.",
                  "Ambientes climatizados.",
                  "Espacios luminosos.",
                  "Recepción cómoda.",
                  "Excelente conectividad.",
                  "Entorno profesional.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">

                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <RentalIcon name="check" className="size-4" />
                    </span>

                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* QUÉ INCLUYE */}

      <Section>
        <Container>
          <div className="text-center">
            <Heading
              as="h2"
              size="lg"
              eyebrow="Servicios"
              description="Todo lo que encontrarás al alquilar un consultorio."
            >
              ¿Qué incluye?
            </Heading>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-5 shadow-sm transition hover:bg-surface hover:shadow-md"
              >

                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* GALERÍA */}

      <Section className="bg-surface">
        <Container>
          <div className="text-center">
            <Heading
              as="h2"
              size="lg"
              eyebrow="Galería"
              description="Conocé algunos de los espacios disponibles para desarrollar tu actividad profesional."
            >
              Nuestros consultorios
            </Heading>
          </div>

          <div className="mt-14 grid auto-rows-[240px] gap-5 lg:grid-cols-12">
            {/* Imagen grande */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-7 lg:row-span-2">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Superior derecha */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-5">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Inferior derecha */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-5">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Inferiores */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-6">
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-6">
              <Image
                src={gallery[4].src}
                alt={gallery[4].alt}
                fill
                className="object-cover object-[center_57%] transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}

      <Section>
        <Container>
          <div className="rounded-[2rem] bg-primary px-8 py-16 text-center text-white shadow-md">
            <Badge className="border-white/20 bg-white/10 text-white">
              Consultas
            </Badge>

            <h2 className="mt-5 text-3xl font-bold">
              ¿Te interesa alquilar un consultorio?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-white/90">
              Contactanos para conocer la disponibilidad, horarios y condiciones
              de alquiler. Nuestro equipo responderá todas tus consultas y te
              ayudará a encontrar el espacio ideal para desarrollar tu actividad
              profesional.
            </p>

            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
              >
                Solicitar información
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}