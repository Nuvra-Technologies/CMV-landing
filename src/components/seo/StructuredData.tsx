import { getContactPointSchema } from "./ContactPointSchema";
import { getMedicalClinicSchema } from "./MedicalClinicSchema";
import { getOrganizationSchema } from "./OrganizationSchema";

export function StructuredData() {
    const organization = getOrganizationSchema();
    const medicalClinic = getMedicalClinicSchema();
    const contactPoint = getContactPointSchema();

    const structuredData = {
        "@context": "https://schema.org",

        "@graph": [
            organization,
            
            medicalClinic,
            
            contactPoint,
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
}