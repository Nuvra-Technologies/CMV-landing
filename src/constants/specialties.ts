export type SpecialtyIconName =
  | "heart"
  | "bone"
  | "eye"
  | "brain"
  | "stethoscope"
  | "baby"
  | "pulse"
  | "lungs"
  | "apple"
  | "gland"
  | "foot"
  | "hand"
  | "speech"
  | "veins";

export type Specialty = {
  category: string;
  description: string;
  icon: SpecialtyIconName;
  id: string;
  name: string;
  slug: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "cardiologia",
    slug: "cardiologia",
    name: "Cardiología",
    category: "Cardiovascular",
    description:
      "Prevención y tratamiento de enfermedades del corazón.",
    icon: "heart",
  },
  {
    id: "clinica-medica",
    slug: "clinica-medica",
    name: "Clínica médica",
    category: "Clínica general",
    description:
      "Atención general y chequeos generales.",
    icon: "stethoscope",
  },
  {
    id: "cirugia-vascular",
    slug: "cirugia-vascular",
    name: "Cirugía Vascular",
    category: "Cardiovascular",
    description:
      "Tratamiento quirúrgicos de arterias y venas.",
    icon: "pulse",
  },
  {
    id: "flebologia",
    slug: "flebologia",
    name: "Flebología",
    category: "Cardiovascular",
    description:
      "Diagnóstico y cuidado de la salud venosa.",
    icon: "veins",
  },
  {
    id: "neumonologia",
    slug: "neumonologia",
    name: "Neumonología",
    category: "Respiratoria",
    description:
      "Tratamiento de enfermedades respiratorias y pulmonares.",
    icon: "lungs",
  },
  {
    id: "nutricion",
    slug: "nutricion",
    name: "Nutrición",
    category: "Clínica general",
    description:
      "Planes alimentarios para mejorar tu salud.",
    icon: "apple",
  },
  {
    id: "endocrinologia",
    slug: "endocrinologia",
    name: "Endocrinología",
    category: "Clínica general",
    description:
      "Diagnóstico y control de trastornos hormonales.",
    icon: "gland",
  },
  {
    id: "podologia",
    slug: "podologia",
    name: "Podología",
    category: "Rehabilitación y Funcionalidad",
    description:
      "Cuidado y tratamiento de la salud del pie.",
    icon: "foot",
  },
  {
    id: "psiquiatria",
    slug: "psiquiatria",
    name: "Psiquiatría",
    category: "Salud mental",
    description:
      "Atención médica de trastornos mentales.",
    icon: "brain",
  },
  {
    id: "psicologia",
    slug: "psicologia",
    name: "Psicología",
    category: "Salud mental",
    description:
      "Terapia y acompañamiento emocional.",
    icon: "brain",
  },
  {
    id: "fonoaudiologia",
    slug: "fonoaudiologia",
    name: "Fonoaudiología",
    category: "Rehabilitación y Funcionalidad",
    description:
      "Rehabilitación del habla y la comunicación.",
    icon: "speech",
  },
  {
    id: "terapia-ocupacional",
    slug: "terapia-ocupacional",
    name: "Terapia ocupacional",
    category: "Rehabilitación y Funcionalidad",
    description:
      "Promoción de autonomía y funcionalidad diaria.",
    icon: "hand",
  },
];


export function getBookingHref(specialtySlug: string) {
  return `/#turnos?especialidad=${specialtySlug}`;
}