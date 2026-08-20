import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://envora-consultoria-ambiental.site"),
  title: "Consultoria Ambiental em Joinville | Envora",
  description:
    "Consultoria ambiental em Joinville para licenciamento, DANC, CCA, renovação, PGRS, PGRSS e regularização empresarial.",
  keywords: [
    "consultoria ambiental em Joinville",
    "licenciamento ambiental Joinville",
    "licença ambiental Joinville",
    "DANC Joinville",
    "CCA Joinville",
    "PGRS Joinville",
    "PGRSS Joinville",
  ],
  openGraph: {
    title: "Consultoria Ambiental em Joinville | Envora",
    description:
      "Regularize sua empresa com clareza técnica, escopo transparente e acompanhamento ambiental em Joinville.",
    type: "website",
    locale: "pt_BR",
    siteName: "Envora Consultoria Ambiental",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Consultoria Ambiental em Joinville — Envora" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria Ambiental em Joinville | Envora",
    description: "Licenciamento e regularização ambiental para empresas em Joinville.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173b35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
