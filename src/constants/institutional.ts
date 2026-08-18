export const INSTITUTIONAL = {
  foundedDate: "23 de diciembre de 2011",
  // Fecha en formato ISO
  foundedDateISO: "2011-12-23",
  slogan: "Tu salud es nuestra prioridad",
  intro:
    "CMV Centro Médico es una institución de salud de Tucumán dedicada a la atención médica y al diagnóstico, con un equipo interdisciplinario de profesionales.",
  fullInfo: 
    `En CMV creemos que una buena atención médica comienza con la confianza. Desde nuestra fundación, el 23 de diciembre de 2011, trabajamos para brindar un servicio basado en la excelencia profesional, la actualización constante y el acompañamiento de cada paciente.
    Somos el único Centro de Medicina Vascular en Tucumán y contamos con un equipo interdisciplinario de especialistas que trabaja de manera coordinada para ofrecer diagnósticos precisos y tratamientos adaptados a cada necesidad.
    Nuestra institución combina experiencia médica, tecnología para estudios de alta complejidad y un sistema de atención organizado que permite acceder fácilmente a consultas, controles y estudios complementarios.`,

  facilities: {
    consultoriosCount: 25,
    title:
      "Una infraestructura pensada para brindar atención médica en un entorno cómodo y profesional.",
    description:
      `CMV pone a disposición de médicos y profesionales de la salud un espacio preparado para desarrollar su actividad en un entorno moderno, confortable y profesional.
      Disponemos de 25 consultorios amoblados, equipados con aire acondicionado frío/calor, servicio de secretaría, conexión a internet y todas las comodidades necesarias para la atención ambulatoria.
      Ofrecemos modalidades de alquiler mensual y por módulos, adaptándonos a las necesidades de cada profesional.`,
    features: [
      { id: "consultorios", label: "25 consultorios amoblados" },
      { id: "climatizacion", label: "Aire acondicionado frío/calor" },
      { id: "secretaria", label: "Secretarías" },
      { id: "internet", label: "Internet" },
      { id: "ubicacion", label: "Ubicación en San Miguel de Tucumán" },
      { id: "mensual", label: "Alquiler mensual" },
      { id: "modulos", label: "Alquiler por módulos" },
      { id: "horariosDisponibles", label: "Horarios disponibles de 08:00 a 13:00 y de 16:00 a 21:00" },
    ],
  },

  attentionSchedule: {
    days: "Lunes a viernes",
    morning: "8:30 a 13hs",
    afternoon: "16 a 21hs",
  },

  officeRental: {
    description:
      "Alquilamos consultorios a profesionales de la salud, con la posibilidad de elegir la modalidad que mejor se adapte a tu actividad.",
    modalities: ["Alquiler mensual", "Alquiler por módulos"],
    schedule: {
      days: "Lunes a viernes",
      morning: "8 a 13hs",
      afternoon: "16 a 21hs",
    },
  },
} as const;

export function getYearsSinceFoundation() {
  const founded = new Date(INSTITUTIONAL.foundedDateISO);
  const now = new Date();
  let years = now.getFullYear() - founded.getFullYear();

  const hasNotHadAnniversaryYet =
    now.getMonth() < founded.getMonth() ||
    (now.getMonth() === founded.getMonth() && now.getDate() < founded.getDate());

  if (hasNotHadAnniversaryYet) years -= 1;

  return years;
}