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
  title: "Alquiler de Consultorios Médicos en Tucumán",
  description:
    "Alquilá consultorios médicos equipados en CMV Centro Médico, Tucumán. Espacios climatizados, Wi-Fi, sala de espera y módulos horarios para profesionales de la salud.",
  alternates: {
    canonical: "/alquiler-consultorios",
  },
  openGraph: {
    title: "Alquiler de Consultorios Médicos en Tucumán | CMV",
    description:
      "Consultorios médicos equipados y climatizados para profesionales de la salud en CMV Centro Médico, Tucumán.",
    url: "/alquiler-consultorios",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CMV Centro Médico en Tucumán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alquiler de Consultorios Médicos en Tucumán | CMV",
    description:
      "Consultorios médicos equipados y climatizados para profesionales de la salud en CMV Centro Médico.",
    images: ["/og-image.png"],
  },
};

const benefits = [
  {
    title: "Consultorios médicos equipados",
    description:
      "Consultorios amoblados y preparados para que profesionales de la salud puedan comenzar a atender.",
    icon: "office",
  },
  {
    title: "Ubicación en Tucumán",
    description:
      "Una ubicación accesible en San Miguel de Tucumán, pensada para facilitar la llegada de profesionales y pacientes.",
    icon: "location",
  },
  {
    title: "Módulos horarios",
    description:
      "Elegí entre módulos de atención por la mañana o por la tarde, según la disponibilidad y las necesidades de tu práctica.",
    icon: "clock",
  },
  {
    title: "Entorno profesional",
    description:
      "Espacios cómodos y funcionales dentro de un centro médico pensado para la atención de pacientes.",
    icon: "professional",
  },
] satisfies {
  title: string;
  description: string;
  icon: RentalIconName;
}[];

const includes = [
  "Consultorios médicos completamente equipados",
  "Aire acondicionado frío/calor",
  "Secretaría y recepción",
  "Sala de espera para pacientes",
  "Conexión a internet",
  "Espacios luminosos y confortables",
  "Infraestructura profesional",
  "Módulos de alquiler mensuales o por horario",
];

const gallery = [
  {
    src: "/images/office-1.jpg",
    alt: "Espacio profesional para atención médica",
  },
  {
    src: "/images/office-2.jpg",
    alt: "Consultorio médico amoblado y equipado en CMV Centro Médico",
  },
  {
    src: "/images/office-3.jpg",
    alt: "Consultorio médico con escritorio y equipamiento en CMV Centro Médico",
  },
  {
    src: "/images/reception.jpg",
    alt: "Recepción de CMV Centro Médico en Tucumán",
  },
  {
    src: "/images/waiting-room.jpg",
    alt: "Sala de espera de CMV Centro Médico",
  },
];

export const WHATSAPP_RENTAL_URL =
  "https://wa.me/5493816051033?text=Hola%2C%20quiero%20consultar%20por%20el%20alquiler%20de%20consultorios%20en%20CMV%20Centro%20M%C3%A9dico.";

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
              Alquiler de consultorios médicos en Tucumán
            </Heading>

            <p className="mt-6 text-lg leading-8 text-muted">
              En CMV Centro Médico contamos con 25 consultorios amoblados,
              climatizados y preparados para la atención profesional. Ofrecemos
              modalidades de alquiler mensual y por módulos horarios, con
              instalaciones pensadas para brindar comodidad tanto a profesionales
              como a pacientes.
            </p>

            <div className="mt-10 flex justify-center">
              <Button href={WHATSAPP_RENTAL_URL} size="lg" target="_blank">
                Solicitar información
              </Button>
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
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Superior derecha */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-5">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Inferior derecha */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-5">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Inferiores */}

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-6">
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-border lg:col-span-6">
              <Image
                src={gallery[4].src}
                alt={gallery[4].alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
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
                href={WHATSAPP_RENTAL_URL}
                target="_blank"
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