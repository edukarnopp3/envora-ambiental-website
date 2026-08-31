import type { Metadata } from "next";
import LinksHub from "./links-hub";

export const metadata: Metadata = {
  title: "Envora | Contato",
  description: "Canais oficiais da Envora Consultoria Ambiental.",
  alternates: { canonical: "/links" },
  robots: { index: false, follow: true },
};

export default function LinksPage() {
  return <LinksHub />;
}
