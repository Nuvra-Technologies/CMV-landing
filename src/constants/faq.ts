export type FAQItem = {
  answer: string;
  category: string;
  id: string;
  question: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "como-saco-turno",
    category: "Turnos y consultas",
    question: "¿Cómo puedo sacar un turno?",
    answer:
      "Podés solicitar tu turno online desde la sección de turnos de la página, eligiendo la especialidad que necesites. También podés llamar a recepción si preferís coordinarlo por teléfono.",
  },
  {
    id: "cancelar-turno",
    category: "Turnos y consultas",
    question: "¿Puedo cancelar o reprogramar un turno ya solicitado?",
    answer:
      "Sí, podés cancelar o reprogramar tu turno desde el mismo sistema de gestión, con al menos 24 horas de anticipación.",
  },
  {
    id: "obras-sociales",
    category: "Obras sociales y coberturas",
    question: "¿Con qué obras sociales trabajan?",
    answer:
      "Trabajamos con las principales obras sociales y prepagas de la provincia. Te recomendamos consultar la cobertura específica de tu plan antes de sacar el turno.",
  },
  {
    id: "particular",
    category: "Obras sociales y coberturas",
    question: "¿Atienden pacientes particulares sin obra social?",
    answer:
      "Sí, todas nuestras especialidades están disponibles también para consultas particulares.",
  },
  {
    id: "resultados-estudios",
    category: "Estudios y resultados",
    question: "¿Cómo puedo retirar los resultados de mis estudios?",
    answer:
      "Los resultados se entregan en recepción o, según el estudio, se envían digitalmente al mail registrado en tu turno.",
  },
  {
    id: "preparacion-estudios",
    category: "Estudios y resultados",
    question: "¿Necesito algún tipo de preparación previa para un estudio?",
    answer:
      "Depende del estudio solicitado. Al confirmar tu turno vas a recibir las indicaciones específicas de preparación, si corresponden.",
  },
  {
    id: "horarios-atencion",
    category: "Información general",
    question: "¿Cuál es el horario de atención del centro médico?",
    answer:
      "Atendemos de lunes a viernes de 8 a 20hs, y los sábados de 8 a 13hs.",
  },
  {
    id: "urgencias",
    category: "Información general",
    question: "¿Atienden urgencias?",
    answer:
      "No contamos con guardia de urgencias. Para emergencias médicas, recomendamos dirigirse al servicio de guardia hospitalaria más cercano.",
  },
];