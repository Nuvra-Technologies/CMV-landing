export type NavigationItem = {
  href: string;
  label: string;
};

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: "Inicio",
    href: "/#inicio",
  },
  {
    label: "Especialidades",
    href: "/especialidades",
  },
  {
    label: "Consultorios",
    href: "/alquiler-consultorios",
  },
  {
    label: "Prepaga",
    href: "/prepaga",
  },
  {
    label: "Preguntas frecuentes",
    href: "/preguntas-frecuentes",
  },
];

export const APPOINTMENT_URL = "/#turnos";