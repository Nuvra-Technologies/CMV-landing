import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "CMV Centro Médico",
        short_name: "CMV",
        description:
            "Centro Médico CMV en Tucumán. Medicina vascular, cardiología y múltiples especialidades médicas.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        lang: "es-AR",
        dir: "ltr",
    };
}