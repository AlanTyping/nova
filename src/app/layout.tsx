import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from "@/data/clinicData";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#0E2B38",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadentalnova.com"),
  title: {
    default: "Clínica Dental Nova | Odontología Integral & Estética en Palermo, CABA",
    template: "%s | Clínica Dental Nova Palermo",
  },
  description:
    "Clínica odontológica de excelencia en Palermo, CABA. Odontología integral, implantes dentales, ortodoncia invisible, estética dental y odontopediatría en Av. Santa Fe 3250. Solicitá tu turno por WhatsApp.",
  keywords: [
    "odontólogo en Palermo",
    "clínica odontológica en Palermo",
    "dentista en Palermo",
    "implantes dentales en Palermo",
    "ortodoncia en Palermo",
    "blanqueamiento dental CABA",
    "odontopediatría Palermo",
    "estética dental Buenos Aires",
    "Clínica Dental Nova",
  ],
  authors: [{ name: "Clínica Dental Nova" }],
  creator: "Clínica Dental Nova",
  publisher: "Clínica Dental Nova",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://clinicadentalnova.com",
    title: "Clínica Dental Nova | Odontología de Excelencia en Palermo",
    description:
      "Una atención dental pensada para vos. Profesionales especializados, tecnología de vanguardia y atención personalizada en Palermo, CABA.",
    siteName: "Clínica Dental Nova",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Clínica Dental Nova - Palermo CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Nova | Odontología en Palermo",
    description:
      "Odontología integral, estética, ortodoncia e implantes en Palermo, Buenos Aires.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC_INFO.name,
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "telephone": CLINIC_INFO.phone,
    "email": CLINIC_INFO.email,
    "url": "https://clinicadentalnova.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Santa Fe 3250",
      "addressLocality": "Palermo, Ciudad Autónoma de Buenos Aires",
      "addressRegion": "CABA",
      "postalCode": "C1425",
      "addressCountry": "AR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CLINIC_INFO.coordinates.lat,
      "longitude": CLINIC_INFO.coordinates.lng,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00",
      },
    ],
    "priceRange": "$$",
    "currenciesAccepted": "ARS, USD",
    "paymentAccepted": "Efectivo, Tarjeta de Crédito, Tarjeta de Débito, Transferencia, Obras Sociales / Prepagas",
    "medicalSpecialty": [
      "Dentistry",
      "Orthodontics",
      "PediatricDentistry",
      "DentalImplantology",
      "Prosthodontics",
    ],
  };

  return (
    <html lang="es" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FCFCFB] text-[#111315] font-sans antialiased selection:bg-[#0E2B38] selection:text-[#FAF8F5] flex flex-col">
        {children}
      </body>
    </html>
  );
}
