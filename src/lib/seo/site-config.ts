export const siteConfig = {
    name: "CMV Centro Médico",
    shortName: "CMV",

    url: "https://cmvcorazondejesus.com",

    description:
        "CMV Centro Médico en Tucumán. Medicina vascular, cardiología, estudios cardiovasculares y múltiples especialidades médicas.",

    slogan: "Tu salud es nuestra prioridad",

    locale: "es_AR",

    founded: "2011-12-23",

    location: {
        streetAddress: "Lavalle 585",
        addressLocality: "San Miguel de Tucumán",
        addressRegion: "Tucumán",
        postalCode: "4000",
        addressCountry: "AR",

        latitude: -26.8387580240748,
        longitude: -65.20796597116413,
    },

    contact: {
        telephone: "+543816305232"
    },

    hours: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "13:00",
        },
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "16:00",
            closes: "19:00",
        },
    ],

    social: [
        "https://www.instagram.com/cmv.corazondejesus/"
    ],

    logo: "/images/logo-cmv.png",

    ogImage: "/og-image.png",

    appointmentsUrl: "https://corazondejesus.ar/autoturno.html",

    specialties: [
        "Clínica",
        "Cardiología",
        "Cirugía vascular",
        "Neumonología",
        "Flebología",
        "Podología",
        "Nutrición",
        "Endocrinología",
        "Psiquiatría",
        "Psicología",
        "Fonoaudiología",
        "Terapia ocupacional",
    ],
} as const;