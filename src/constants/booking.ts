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
      "Accedé desde el botón de esta página o escaneando el código QR con la cámara de tu celular.",
  },
  {
    id: "dni",
    number: 2,
    title: "Ingresá tu DNI",
    description:
      "Escribí tu número de DNI para identificarte en el sistema.",
  },
  {
    id: "especialidad",
    number: 3,
    title: "Elegí la especialidad",
    description:
      "Seleccioná la especialidad médica que necesitás de la lista disponible.",
  },
  {
    id: "profesional-horario",
    number: 4,
    title: "Seleccioná profesional y horario",
    description:
      "Elegí el profesional de tu preferencia y el día y horario que mejor se adapte a vos.",
  },
  {
    id: "confirmar-datos",
    number: 5,
    title: "Confirmá tus datos",
    description:
      "Completá tu nombre, obra social y datos de contacto para reservar el turno.",
  },
  {
    id: "confirmacion",
    number: 6,
    title: "Recibí la confirmación",
    description:
      "Vas a recibir un mensaje con el detalle de tu turno: fecha, horario y profesional.",
  },
];