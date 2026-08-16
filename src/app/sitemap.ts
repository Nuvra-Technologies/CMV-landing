import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://cmvcorazondejesus.com/",
            priority: 1,
            changeFrequency: "monthly",
        },
        {
            url: "https://cmvcorazondejesus.com/alquiler-consultorios",
            priority: 0.9,
            changeFrequency: "monthly",
        },
        {
            url: "https://cmvcorazondejesus.com/especialidades",
            priority: 0.9,
            changeFrequency: "monthly",
        },
        {
            url: "https://cmvcorazondejesus.com/preguntas-frecuentes",
            priority: 0.8,
            changeFrequency: "monthly",
        },
        {
            url: "https://cmvcorazondejesus.com/institucional",
            priority: 0.8,
            changeFrequency: "monthly",
        },
        {
            url: "https://cmvcorazondejesus.com/como-sacar-turno",
            priority: 0.8,
            changeFrequency: "monthly",
        },
    ];
}