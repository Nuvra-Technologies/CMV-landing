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
    question: "¿Cómo puedo sacar un turno médico?",
    answer:
      "Podés solicitar tu turno online desde la sección de turnos de la página, eligiendo la especialidad que necesites. También podés llamar a recepción si preferís coordinarlo por teléfono.",
  },
  {
    id: "que-obras-sociales-reciben",
    category: "Turnos y consultas",
    question: "¿Qué obras sociales y prepagas reciben?",
    answer:
      "Trabajamos con obras sociales y empresas de medicina prepaga. Si tenés dudas sobre tu cobertura, podés comunicarte con nosotros antes de solicitar el turno.",
  },
  {
    id: "que-especialidades-ofrecen",
    category: "Consultas generales",
    question: "¿Qué especialidades médicas ofrecen?",
    answer:
      "Contamos con Clínica Médica, Cardiología, Cirugía Vascular, Neumonología, Flebología, Nutrición, Endocrinología, Podología, Psiquiatría, Psicología, Fonoaudiología y Terapia Ocupacional.",
  },
  {
    id: "atienden-urgencias",
    category: "Consultas generales",
    question: "¿Atienden urgencias?",
    answer:
      "No. CMV brinda atención exclusivamente mediante turnos programados.",
  },
  {
    id: "que-estudios-cardiovasculares-realizan",
    category: "Consultas generales",
    question: "¿Qué estudios cardiovasculares realizan?",
    answer:
      "Realizamos ecodoppler cardíaco, ecodoppler vascular, electrocardiograma, Holter de ECG, MAPA, exámenes cardiovasculares y estudios orientados a la prevención y seguimiento de enfermedades cardiovasculares.",
  },
  {
    id: "donde-estan-ubicados",
    category: "Consultas generales",
    question: "¿Dónde está ubicado CMV Centro Médico?",
    answer:
      "Nos encontramos en Lavalle 584, San Miguel de Tucumán, Tucumán. Podés ver nuestra ubicación en el mapa de la sección de contacto.",
  },
  {
    id: "puedo-alquilar-consultorio",
    category: "Consultorios y alquileres",
    question: "¿Puedo alquilar un consultorio en CMV?",
    answer:
      "Sí. Contamos con consultorios completamente equipados disponibles en modalidad mensual y por módulos. Contactanos para conocer disponibilidad.",
  },
  {
    id: "cual-es-el-horario-de-atencion",
    category: "Consultas generales",
    question: "¿Cuál es el horario de atención?",
    answer:
      "Atendemos de lunes a viernes de 08:30 a 13:00 y de 16:00 a 19:00 con turno previo."
  },
];