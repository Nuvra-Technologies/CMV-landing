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
  title: {
    default: "CMV",
    template: "%s | CMV",
  },
  description: "Centro médico CMV.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
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
