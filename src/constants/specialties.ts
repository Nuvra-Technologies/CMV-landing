export type SpecialtyIconName =
  | "heart"
  | "bone"
  | "eye"
  | "tooth"
  | "brain"
  | "stethoscope"
  | "baby"
  | "pulse";

export type Specialty = {
  category: string;
  description: string;
  icon: SpecialtyIconName;
  id: string;
  name: string;
  slug: string;
};

// TODO: reemplazar por la info real del centro médico.
// Para agregar una especialidad nueva: sumar un objeto acá,
// eligiendo un icon existente o agregando uno nuevo en medical-icons.tsx
export const SPECIALTIES: Specialty[] = [
  {
    id: "cardiologia",
    slug: "cardiologia",
    name: "Cardiología",
    category: "Clínica médica",
    description:
      "Diagnóstico y seguimiento de enfermedades cardiovasculares con equipamiento actualizado.",
    icon: "heart",
  },
  {
    id: "pediatria",
    slug: "pediatria",
    name: "Pediatría",
    category: "Clínica médica",
    description:
      "Control y cuidado de la salud de bebés, niños y adolescentes en cada etapa.",
    icon: "baby",
  },
  {
    id: "traumatologia",
    slug: "traumatologia",
    name: "Traumatología",
    category: "Especialidades quirúrgicas",
    description:
      "Tratamiento de lesiones óseas, musculares y articulares, con y sin cirugía.",
    icon: "bone",
  },
  {
    id: "oftalmologia",
    slug: "oftalmologia",
    name: "Oftalmología",
    category: "Diagnóstico y prevención",
    description:
      "Evaluación de la salud visual y tratamiento de afecciones oculares.",
    icon: "eye",
  },
  {
    id: "odontologia",
    slug: "odontologia",
    name: "Odontología",
    category: "Diagnóstico y prevención",
    description:
      "Atención odontológica integral, desde controles hasta tratamientos especializados.",
    icon: "tooth",
  },
  {
    id: "neurologia",
    slug: "neurologia",
    name: "Neurología",
    category: "Especialidades quirúrgicas",
    description:
      "Diagnóstico y tratamiento de trastornos del sistema nervioso.",
    icon: "brain",
  },
  {
    id: "clinica-medica",
    slug: "clinica-medica",
    name: "Clínica médica",
    category: "Clínica médica",
    description:
      "Consultas generales, chequeos preventivos y derivación a especialistas.",
    icon: "stethoscope",
  },
  {
    id: "kinesiologia",
    slug: "kinesiologia",
    name: "Kinesiología",
    category: "Diagnóstico y prevención",
    description:
      "Rehabilitación física y tratamiento de lesiones para recuperar la movilidad.",
    icon: "pulse",
  },
];


export function getBookingHref(specialtySlug: string) {
  return `/#turnos?especialidad=${specialtySlug}`;
}