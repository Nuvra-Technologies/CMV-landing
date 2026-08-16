export function getMedicalClinicSchema() {
    return {
        "@type": "MedicalClinic",
        "@id": "https://cmvcorazondejesus.com/#medical-clinic",
        name: "CMV Centro Médico",
        url: "https://cmvcorazondejesus.com/",
        description:
            "Centro Médico en Tucumán especializado en medicina vascular, cardiología, estudios cardiovasculares y múltiples especialidades médicas.",
        slogan: "Tu salud es nuestra prioridad",
        parentOrganization: {
            "@id": "https://cmvcorazondejesus.com/#organization",
        },
    };
}