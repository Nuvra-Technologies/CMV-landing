export const HERO_CONTENT = {
  eyebrow: "Centro médico CMV",
  title: "Medicina Vascular, Cardiología y Especialidades Médicas en Tucumán",
  description:
    "Tu salud es nuestra prioridad. Desde 2011 brindamos atención médica especializada en Tucumán, con un equipo de profesionales comprometidos, estudios cardiovasculares de alta complejidad y un sistema de turnos online pensado para ofrecer una experiencia ágil, cómoda y segura.",

  primaryAction: {
    label: "Solicitar turno",
    href: "/#turnos",
  },

  secondaryAction: {
    label: "Conocer especialidades",
    href: "/especialidades",
  },

  tertiaryAction: {
    label: "Alquilar consultorios",
    href: "/alquiler-consultorios",
  },

  images: [
    {
      src: "/images/hero-image.jpg",
      alt: "Imagen del Centro Médico CMV visto desde afuera",
    },
    {
      src: "/images/reception.jpg",
      alt: "Recepción del Centro Médico CMV",
    },
    {
      src: "/images/waiting-room.jpg",
      alt: "Sala de espera del Centro Médico CMV",
    },
  ],

  indicators: [
    "Más de 14 años de trayectoria",
    "Único Centro de Medicina Vascular en Tucumán",
    "Atención con obras sociales y prepagas",
  ],
} as const;