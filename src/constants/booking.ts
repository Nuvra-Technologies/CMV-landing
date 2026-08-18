export type BookingStep = {
  description: string;
  id: string;
  image?: { alt: string; src: string };
  number: number;
  title: string;
};

// reemplazar description por el texto exacto según cómo funcione
// el sistema real, y sumar "image" con la captura de pantalla de cada paso
// (ej: image: { src: "/booking-steps/paso-1.webp", alt: "..." })
export const BOOKING_STEPS: BookingStep[] = [
  {
    id: "ingresar",
    number: 1,
    title: "Ingresá al sistema de turnos",
    description:
      "Accedé al sistema de turnos online de CMV Centro Médico desde el botón de esta página o escaneando el código QR con la cámara de tu celular.",
  },
  {
    id: "dni",
    number: 2,
    title: "Ingresá tu DNI",
    description:
      "Ingresá tu número de DNI para identificarte y continuar con la solicitud de tu turno médico.",
  },
  {
    id: "especialidad",
    number: 3,
    title: "Elegí la especialidad médica",
    description:
      "Seleccioná la especialidad médica que necesitás para consultar las opciones de atención disponibles.",
  },
  {
    id: "profesional-horario",
    number: 4,
    title: "Seleccioná profesional y el horario",
    description:
      "Elegí el profesional que querés consultar y seleccioná entre los días y horarios disponibles para tu turno.",
  },
  {
    id: "confirmar-datos",
    number: 5,
    title: "Confirmá tus datos",
    description:
      "Revisá y completá los datos solicitados por el sistema antes de confirmar la reserva de tu turno.",
  },
  {
    id: "confirmacion",
    number: 6,
    title: "Recibí la confirmación de tu turno",
    description:
      "Una vez completado el proceso, recibirás la confirmación con los datos correspondientes a tu turno médico.",
  },
];