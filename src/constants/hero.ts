export const HERO_CONTENT = {
  eyebrow: "Centro médico CMV",
  title: "Tu turno médico, de forma rápida y simple",
  description:
    "Accedé al sistema de turnos online y encontrá la atención que necesitás sin llamar a recepción.",

  primaryAction: {
    label: "Sacar turno",
    href: "/#turnos",
  },

  secondaryAction: {
    label: "Ver especialidades",
    href: "/#especialidades",
  },

  image: {
    src: "/images/logo.webp", // aqui hay que poner la foto del hero y cambiar la propiedad en Hero.tsx de sections, linea 120
    alt: "Logo provisional del Centro Médico CMV",
  },

  indicators: [
    "Turnos online",
    "Atención profesional",
    "Acceso simple y rápido",
  ],
} as const;