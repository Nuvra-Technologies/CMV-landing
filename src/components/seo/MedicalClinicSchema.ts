import { siteConfig } from "@/lib/seo/site-config";

export function getMedicalClinicSchema() {
    return {
        "@type": "MedicalClinic",
        "@id": `${siteConfig.url}/#medical-clinic`,

        name: siteConfig.name,
        url: siteConfig.url,

        description: siteConfig.description,
        slogan: siteConfig.slogan,

        image: [
            `${siteConfig.url}${siteConfig.ogImage}`,
        ],

        logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${siteConfig.logo}`,
        },

        telephone: siteConfig.contact.telephone,

        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.location.streetAddress,
            addressLocality: siteConfig.location.addressLocality,
            addressRegion: siteConfig.location.addressRegion,
            postalCode: siteConfig.location.postalCode,
            addressCountry: siteConfig.location.addressCountry,
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.location.latitude,
            longitude: siteConfig.location.longitude,
        },

        openingHoursSpecification: siteConfig.hours.map((schedule) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: schedule.days.map(
                (day) => `https://schema.org/${day}`,
            ),
            opens: schedule.opens,
            closes: schedule.closes,
        })),

        parentOrganization: {
            "@id": `${siteConfig.url}/#organization`,
        },
    };
}