// src/constants/location.ts

export const CLINIC_LOCATION = {
  address: "Lavalle 584, San Miguel de Tucumán, Tucumán",
  // TODO: reemplazar por la URL real de Google Maps Embed
  // (Google Maps → Compartir → Insertar un mapa → copiar el "src" del iframe)
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7120.03038388093!2d-65.21171661522948!3d-26.839469103722898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c438ee2209f%3A0x6652e9f0ad395636!2sCentro%20de%20Medicina%20Vascular%20%22Coraz%C3%B3n%20de%20Jes%C3%BAs%22!5e0!3m2!1ses-419!2sar!4v1785514678165!5m2!1ses-419!2sar",
  mapsUrl: "https://maps.app.goo.gl/EUpjp24QrikfK7GK9",
  phone: "+54 381 420-3593",
  schedule: "Lun. a vie. de 8 a 20hs | Sáb. de 8 a 13hs",
} as const;