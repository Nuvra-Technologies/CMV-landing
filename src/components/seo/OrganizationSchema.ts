import { siteConfig } from "@/lib/seo/site-config";

export function getOrganizationSchema() {
    return {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        
        name: siteConfig.name,
        url: siteConfig.url,
        
        description: siteConfig.description,
        slogan: siteConfig.slogan,
        
        foundingDate: siteConfig.founded,
        
        logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${siteConfig.logo}`,
        },
    
        image: `${siteConfig.url}${siteConfig.ogImage}`,
    
        contactPoint: {
            "@id": `${siteConfig.url}/#contact`,
        },
    
        sameAs: siteConfig.social,
    };
}