import { siteConfig } from "@/lib/seo/site-config";

export function getContactPointSchema() {
    return {
        "@type": "ContactPoint",
        "@id": `${siteConfig.url}/#contact`,
        
        contactType: "customer service",
        
        telephone: siteConfig.contact.telephone,
        
        availableLanguage: ["es-AR"],
    };
}