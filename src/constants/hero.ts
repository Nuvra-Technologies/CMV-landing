export const HERO_CONTENT = {
  eyebrow: "Centro médico CMV",
  title: "Atención Médica especializada: Cardiología, Medicina Vascular y otras Especialidades Médicas en Tucumán",
  description:
    "Tu salud es nuestra prioridad. Desde 2011 a través de su Centro Médico y Servicios sociales realizamos investigación, prevención, educación, diagnóstico y atención médica especializada en Cardiología, Medicina Vascular y otras especialidades médicas en Tucumán.",
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
  
  whyChooseUs: {
    title: "¿Por qué elegirnos?",
    items: [
      "Equipamiento de alta complejidad",
      "Atención profesional y personalizada",
      "Todas las especialidades en un solo lugar"
    ],
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