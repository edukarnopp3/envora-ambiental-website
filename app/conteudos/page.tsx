import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceWhatsAppLink from "../service-whatsapp-link";
import { SITE_URL } from "../site-url";
import { contentArticles } from "./content-data";

export const metadata: Metadata = {
  title: "Blog ambiental | Envora Consultoria Ambiental",
  description: "Conteúdos técnicos sobre licenciamento ambiental, inventários de GEE, créditos de carbono e regularização, com fontes oficiais e aplicação prática.",
  alternates: { canonical: "/conteudos" },
  openGraph: {
    title: "Blog ambiental | Envora Consultoria Ambiental",
    description: "Conteúdos técnicos sobre licenciamento ambiental, inventários de GEE e créditos de carbono.",
    url: "/conteudos",
    type: "website",
    locale: "pt_BR",
    siteName: "Envora Consultoria Ambiental",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Conteúdos ambientais — Envora" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog ambiental da Envora",
  description: "Conteúdos técnicos sobre licenciamento ambiental, emissões de GEE e mercado de carbono.",
  url: `${SITE_URL}/conteudos`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: contentArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/conteudos/${article.slug}`,
      name: article.title,
    })),
  },
};

export default function ContentIndexPage() {
  return (
    <div className="service-page-shell content-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="service-topbar">
        <Link className="brand" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal.svg" alt="Envora Ambiental" width={360} height={88} priority /></Link>
        <nav aria-label="Navegação do blog"><Link href="/">Início</Link><Link href="/#solucoes">Serviços</Link></nav>
        <ServiceWhatsAppLink service="Orientação ambiental" className="button button-small">Falar com especialista</ServiceWhatsAppLink>
      </header>

      <main>
        <section className="content-section content-index-section" aria-labelledby="content-title">
          <div className="content-section-heading">
            <div>
              <p className="section-index">Blog · Envora</p>
              <h1 id="content-title">O ambiental explicado sem rodeios.</h1>
            </div>
          </div>
          <ul className="content-card-grid" aria-label="Artigos do blog">
            {contentArticles.map((article, index) => (
              <li className="content-card-item" key={article.slug}>
                <Link href={`/conteudos/${article.slug}`} className="content-card">
                  <div><span>{String(index + 1).padStart(2, "0")}</span><b>{article.category}</b></div>
                  <h2>{article.title}</h2>
                  <strong>{article.readingTime} de leitura <i aria-hidden="true">↗</i></strong>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-final-cta content-index-cta">
          <p className="eyebrow">Atendimento ambiental</p>
          <h2>Quer entender como isso se aplica ao seu caso?</h2>
          <ServiceWhatsAppLink service="Orientação ambiental" className="button service-primary">Falar com a Envora <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
        </section>
      </main>

      <footer className="service-footer">
        <Link className="brand inverted" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} /></Link>
        <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><Link href="/">Voltar ao início</Link><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      </footer>
    </div>
  );
}
