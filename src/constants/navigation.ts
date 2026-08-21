export type NavigationItem = {
  href: string;
  label: string;
};

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: "Especialidades",
    href: "/especialidades",
  },
  {
    label: "Alquiler de consultorios",
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