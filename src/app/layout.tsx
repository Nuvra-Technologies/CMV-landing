import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://cmvcorazondejesus.com"),

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

  creator: "CMV Centro Médico",
  publisher: "CMV Centro Médico",

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

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://cmvcorazondejesus.com/",
    siteName: "CMV Centro Médico",

    title: "CMV | Centro Médico en Tucumán",

    description:
      "Centro Médico especializado en medicina vascular, cardiología y especialidades médicas.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CMV Centro Médico en Tucumán",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CMV | Centro Médico en Tucumán",

    description:
      "Centro Médico en Tucumán especializado en medicina vascular, cardiología y estudios cardiovasculares.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // Cuando esté el Search Console
  // verification: {
  //   google: "codigo-google",
  // },

  alternates: {
    canonical: "/",
  },

  applicationName: "CMV Centro Médico",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  appleWebApp: {
    capable: true,
    title: "CMV",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es-AR">
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
