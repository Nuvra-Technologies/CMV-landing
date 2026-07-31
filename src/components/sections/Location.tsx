// src/components/sections/Location.tsx
import { Container, Heading, IconWrapper, Reveal, Section } from "@/components/ui";
import { CLINIC_LOCATION } from "@/constants/location";

const CONTACT_ITEMS = [
  {
    label: "Dirección",
    value: CLINIC_LOCATION.address,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Teléfono",
    value: CLINIC_LOCATION.phone,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2Z" />
      </svg>
    ),
  },
  {
    label: "Horarios",
    value: CLINIC_LOCATION.schedule,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export function Location() {
  return (
    <Section id="ubicacion" spacing="lg">
      <Container>
        <Reveal direction="up">
          <Heading
            align="center"
            eyebrow="Cómo llegar"
            description="Visitanos en nuestra sede o encontrá acá toda la información de contacto."
            wrapperClassName="mx-auto max-w-2xl"
          >
            Ubicación
          </Heading>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal
            direction="left"
            className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-sm sm:aspect-video lg:col-span-3 lg:aspect-auto"
          >
            <iframe
              src={CLINIC_LOCATION.mapEmbedSrc}
              title="Ubicación del centro médico en el mapa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          </Reveal>

          <Reveal
            direction="right"
            delay={100}
            className="border-border bg-surface flex flex-col justify-center gap-6 rounded-2xl border p-6 shadow-sm sm:p-8 lg:col-span-2"
          >
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <IconWrapper size="md" variant="primary">
                  {item.icon}
                </IconWrapper>

                <div>
                  <p className="text-muted text-xs font-semibold tracking-wide uppercase">
                    {item.label}
                  </p>
                  <p className="text-foreground mt-1 text-sm leading-6 font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <a
              href={CLINIC_LOCATION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover mt-2 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Ver en Google Maps

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}