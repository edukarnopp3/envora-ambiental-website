import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import GoogleConsent from "./google-consent";
import { SITE_URL } from "./site-url";

const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? "AW-18413899550";
const WHATSAPP_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL ?? "HU26COPXjOkcEJ6et8xE";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Envora | Consultoria Ambiental em Joinville",
  description:
    "Consultoria ambiental em Joinville para autos de infração e exigências ambientais, licenciamento, DANC, CCA, PGRS, PGRSS, PGRCC, resíduos e controle acústico.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Envora | Consultoria Ambiental em Joinville",
    description:
      "Regularização com clareza técnica, escopo transparente e acompanhamento ambiental em Joinville.",
    type: "website",
    locale: "pt_BR",
    siteName: "Envora Consultoria Ambiental",
    url: "/",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Consultoria Ambiental em Joinville — Envora" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envora | Consultoria Ambiental em Joinville",
    description: "Licenciamento e regularização ambiental em Joinville.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  verification: {
    google: "Tvlr0L-QgNCp2Lrw4Kzbi7LNdHwDUknwOrEfhwCZmHg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173b35",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Envora Consultoria Ambiental",
  description: "Consultoria ambiental independente em Joinville para licenciamento, regularização, resíduos, autos de infração e gestão de condicionantes.",
  url: SITE_URL,
  logo: `${SITE_URL}/envora-mark.svg`,
  image: `${SITE_URL}/og.png`,
  telephone: "+55 47 98455-1622",
  email: "envoraambiental@gmail.com",
  sameAs: ["https://www.instagram.com/envoraambiental/"],
  founder: {
    "@type": "Person",
    name: "Eduardo Karnopp",
    jobTitle: "Engenheiro Ambiental e Sanitarista",
  },
  areaServed: {
    "@type": "City",
    name: "Joinville",
    containedInPlace: {
      "@type": "State",
      name: "Santa Catarina",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Joinville",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Licenciamento ambiental",
    "Licença Ambiental Prévia (LAP)",
    "Licença Ambiental de Instalação (LAI)",
    "Licença Ambiental de Operação (LAO)",
    "Autorização Ambiental (AuA)",
    "Autos de infração e exigências ambientais",
    "DANC",
    "CCA",
    "PGRS",
    "PGRSS",
    "PGRCC",
    "Laudo acústico",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="envora-google-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});`}
        </Script>
        <Script
          id="envora-google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`}
          strategy="afterInteractive"
        />
        <Script id="envora-google-tag-config" strategy="afterInteractive">
          {`gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');
window.envoraGoogleAdsConversionTarget = '${GOOGLE_TAG_ID}/${WHATSAPP_CONVERSION_LABEL}';`}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
        />
        {children}
        <GoogleConsent />
      </body>
    </html>
  );
}
