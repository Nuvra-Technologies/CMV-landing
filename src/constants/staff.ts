export type StaffGender = "femenino" | "masculino";

export type StaffMember = {
  gender?: StaffGender;
  id: string;
  image?: { alt: string; src: string };
  name: string;
  slug: string;
  specialty: string;
};

// TODO: reemplazar por el staff real del centro médico.
// Para agregar un profesional nuevo: sumar un objeto acá.
// El campo "image" es opcional: si no está, se muestra un avatar
// con iniciales automáticamente (ver StaffAvatar).
export const STAFF: StaffMember[] = [
  {
    id: "martina-lopez",
    slug: "martina-lopez",
    name: "Dra. Martina López",
    specialty: "Cardiología",
    gender: "femenino",
  },
  {
    id: "lucas-fernandez",
    slug: "lucas-fernandez",
    name: "Dr. Lucas Fernández",
    specialty: "Traumatología",
    gender: "masculino",
  },
  {
    id: "sofia-gimenez",
    slug: "sofia-gimenez",
    name: "Dra. Sofía Giménez",
    specialty: "Pediatría",
    gender: "femenino",
  },
  {
    id: "ezequiel-torres",
    slug: "ezequiel-torres",
    name: "Dr. Ezequiel Torres",
    specialty: "Neurología",
    gender: "masculino",
  },
  {
    id: "camila-rojas",
    slug: "camila-rojas",
    name: "Dra. Camila Rojas",
    specialty: "Oftalmología",
    gender: "femenino",
  },
  {
    id: "nicolas-medina",
    slug: "nicolas-medina",
    name: "Dr. Nicolás Medina",
    specialty: "Clínica médica",
    gender: "masculino",
  },
];