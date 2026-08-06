import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { 
  Footer,
  Header, 
  SiteLayout, 
} from "@/components/layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://cmv.com"), //cambiar por el dominio real

  title: {
    default: "CMV | Centro Médico en Tucumán",
    template: "%s | CMV",
  },

  description: "Centro Médico CMV en Tucumán. Especialistas en medicina vascular, cardiología, estudios cardiovasculares y múltiples especialidades médicas.",

  keywords: [
    "Centro Médico Tucumán",
    "Cardiología Tucumán",
    "Medicina vascular",
    "Cirugía vascular",
    "Estudios cardiovasculares",
    "Turnos médicos",
    "Consultorios médicos",
  ],

  authors: [{ name: "CMV Centro Médico" }],

  creator: "CMV",

  publisher: "CMV",

  category: "Health",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Falta openGraph
// Falta twitter card
// Falta icons
// Falta manifest
// Falta verification
// Falta metadataBase
// Falta themeColor
// Falta colorScheme

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteLayout
          header={<Header />}
          footer={<Footer />}
        >
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
