export const INSTITUTIONAL = {
  foundedDate: "23 de diciembre de 2011",
  // Fecha en formato ISO
  foundedDateISO: "2011-12-23",
  slogan: "Tu salud es nuestra prioridad",
  intro:
    "Somos un centro médico dedicado a brindar atención de calidad, con infraestructura moderna y un equipo de profesionales comprometidos con el bienestar de cada paciente.",

  facilities: {
    consultoriosCount: 25,
    description:
      "Contamos con consultorios totalmente amoblados y equipados para el ejercicio profesional.",
    features: [
      { id: "consultorios", label: "25 consultorios amoblados" },
      { id: "climatizacion", label: "Aire acondicionado frío/calor" },
      { id: "secretaria", label: "Secretarías" },
      { id: "internet", label: "Internet" },
      { id: "comodidades", label: "Todas las comodidades" },
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