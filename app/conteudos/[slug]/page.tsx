import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceWhatsAppLink from "../../service-whatsapp-link";
import { SITE_URL } from "../../site-url";
import { contentArticleBySlug, contentArticles } from "../content-data";

type ContentPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return contentArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ContentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = contentArticleBySlug.get(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Envora`,
    description: article.description,
    alternates: { canonical: `/conteudos/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/conteudos/${article.slug}`,
      type: "article",
      locale: "pt_BR",
      siteName: "Envora Consultoria Ambiental",
      publishedTime: article.publishedAt,
      images: [{ url: "/og.png", width: 1731, height: 909, alt: `${article.title} — Envora` }],
    },
  };
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { slug } = await params;
  const article = contentArticleBySlug.get(slug);
  if (!article) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: `${SITE_URL}/conteudos/${article.slug}`,
    author: { "@type": "Organization", name: "Envora Consultoria Ambiental", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Envora Consultoria Ambiental", url: SITE_URL },
  };

  return (
    <div className="service-page-shell content-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="service-topbar">
        <Link className="brand" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal.svg" alt="Envora Ambiental" width={360} height={88} priority /></Link>
        <nav aria-label="Navegação da página de conteúdo"><Link href="/#conteudos">Todos os conteúdos</Link><Link href="/#solucoes">Serviços</Link></nav>
        <ServiceWhatsAppLink service={article.category} className="button button-small">Falar com especialista</ServiceWhatsAppLink>
      </header>

      <main>
        <article>
          <header className="content-article-hero">
            <div className="service-breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/#conteudos">Conteúdos</Link><span>/</span><b>{article.category}</b></div>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="content-article-lead">{article.lead}</p>
            <div className="content-article-meta"><time dateTime={article.publishedAt}>4 de setembro de 2026</time><span>{article.readingTime} de leitura</span></div>
          </header>

          <div className="content-article-body">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>

          <aside className="content-article-sources" aria-labelledby="content-sources-title">
            <p className="section-index" id="content-sources-title">Fontes oficiais</p>
            <ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a></li>)}</ul>
          </aside>
        </article>

        <section className="service-final-cta">
          <p className="eyebrow">Aplicação ao seu caso</p>
          <h2>Você explica a situação. A Envora define o próximo passo.</h2>
          <ServiceWhatsAppLink service={article.category} className="button service-primary">Falar com a Envora <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
        </section>
      </main>

      <footer className="service-footer">
        <Link className="brand inverted" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} /></Link>
        <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      </footer>
    </div>
  );
}
