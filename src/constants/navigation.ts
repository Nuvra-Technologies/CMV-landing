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
    label: "Alquiler consultorios",
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

export const APPOINTMENT_URL = "https://corazondejesus.ar/autoturno.html";