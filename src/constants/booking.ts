export type BookingStep = {
  description: string[];
  id: string;
  image?: {
    alt: string;
    src: string;
  };
  number: number;
  title: string;
};

export const BOOKING_STEPS: BookingStep[] = [
  {
    id: "ingresar",
    number: 1,
    title: "Ingresá al sistema de turnos",
    description: [
      "Accedé al sistema de turnos online de CMV Centro Médico desde el botón de esta página o escaneando el código QR con la cámara de tu celular.",
    ],
  },
  {
    id: "dni",
    number: 2,
    title: "Ingresá tu DNI",
    description: [
      "Ingresá tu número de DNI sin puntos y seleccioná “Continuar”.",
    ],
    image: {
      src: "/images/turno-1.png",
      alt: "Captura de pantalla del paso 1 para solicitar un turno",
    },
  },
  {
    id: "profesional",
    number: 3,
    title: "Buscá al profesional",
    description: [
      "Ingresá la especialidad médica o el nombre del médico que querés consultar y seleccioná “Buscar”.",
      "En los resultados podrás ver los profesionales disponibles y sus horarios de atención.",
      "Luego, seleccioná “Ver disponibilidad y gestionar turnos”.",
    ],
    image: {
      src: "/images/turno-2.png",
      alt: "Captura de pantalla del paso 2 para solicitar un turno",
    },
  },
  {
    id: "horario",
    number: 4,
    title: "Elegí el día y horario",
    description: [
      "Seleccioná el día y horario que prefieras para tu consulta.",
      "Luego, verificá tus datos personales y seleccioná tu obra social. Completá obligatoriamente tu número de teléfono y correo electrónico.",
      "Finalmente, seleccioná “Confirmar”.",
    ],
    image: {
      src: "/images/turno-3.png",
      alt: "Captura de pantalla del paso 3 para solicitar un turno",
    },
  },
  {
    id: "confirmacion",
    number: 5,
    title: "¡Turno confirmado!",
    description: [
      "Una vez procesado correctamente, verás en pantalla la confirmación de tu turno junto con el código de turno.",
    ],
    image: {
      src: "/images/turno-4.png",
      alt: "Captura de pantalla del paso 4 con la confirmación del turno",
    },
  },
];