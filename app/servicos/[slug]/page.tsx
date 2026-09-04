import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ServiceWhatsAppLink from "../../service-whatsapp-link";
import { SITE_URL } from "../../site-url";
import { relatedServiceSlugs, serviceInputsBySlug, servicePageBySlug, servicePages } from "../service-data";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...servicePages.map(({ slug }) => ({ slug })),
    ...["pgrs", "pgrss", "pgrcc"].map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageBySlug.get(slug);
  if (!service) return {};

  return {
    title: `${service.shortTitle} em Joinville | Envora`,
    description: service.description,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.shortTitle} em Joinville | Envora`,
      description: service.description,
      url: `/servicos/${service.slug}`,
      type: "website",
      locale: "pt_BR",
      siteName: "Envora Consultoria Ambiental",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: `${service.shortTitle} — Envora` }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  if (slug === "danc-e-cca") redirect("/servicos/danc");
  if (["pgrs", "pgrss", "pgrcc"].includes(slug)) redirect("/servicos/planos-de-gerenciamento-de-residuos");
  const service = servicePageBySlug.get(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@type": "Service",
    "@id": `${SITE_URL}/servicos/${service.slug}#service`,
    mainEntityOfPage: `${SITE_URL}/servicos/${service.slug}`,
    serviceType: service.shortTitle,
    name: service.shortTitle,
    description: service.description,
    provider: { "@type": "ProfessionalService", "@id": `${SITE_URL}/#business`, name: "Envora Consultoria Ambiental", url: SITE_URL },
    areaServed: { "@type": "City", name: "Joinville" },
    url: `${SITE_URL}/servicos/${service.slug}`,
  };
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/#solucoes` },
      { "@type": "ListItem", position: 3, name: service.shortTitle, item: `${SITE_URL}/servicos/${service.slug}` },
    ],
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema],
  };
  const inputs = serviceInputsBySlug[service.slug] ?? [];
  const relatedServices = (relatedServiceSlugs[service.slug] ?? [])
    .map((relatedSlug) => servicePageBySlug.get(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));

  return (
    <div className="service-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="service-topbar">
        <Link className="brand" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal.svg" alt="Envora Ambiental" width={360} height={88} priority /></Link>
        <nav aria-label="Navegação da página de serviço">
          <Link href="/#solucoes">Todos os serviços</Link>
          <Link href="/#triagem">Triagem</Link>
        </nav>
        <ServiceWhatsAppLink service={service.shortTitle} className="button button-small">Falar com especialista</ServiceWhatsAppLink>
      </header>

      <main>
        <section className="service-hero">
          <div className="service-breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/#solucoes">Serviços</Link><span>/</span><b>{service.shortTitle}</b></div>
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{service.eyebrow}</p>
              <h1>{service.title}</h1>
              <p className="service-hero-intro">{service.intro}</p>
              <ServiceWhatsAppLink service={service.shortTitle} className="button service-primary">Quero resolver esta situação <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
            </div>
            <div className="service-highlights" aria-label="Resumo do serviço">
              {service.highlights.map((highlight, index) => <div key={highlight}><small>{String(index + 1).padStart(2, "0")}</small><strong>{highlight}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="service-explainer">
          <div className="service-applies">
            <p className="section-index">Quando se aplica</p>
            <h2>O que essa situação significa.</h2>
            <p>{service.applies}</p>
          </div>
          <div className="service-process">
            <p className="section-index">O que acontece na prática</p>
            <ol>{service.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
          </div>
        </section>

        <section className="service-inputs" aria-labelledby="service-inputs-title">
          <div>
            <p className="section-index light">Informações para a análise</p>
            <h2 id="service-inputs-title">O que é útil ter em mãos.</h2>
          </div>
          <ul>{inputs.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="service-delivery" aria-labelledby="service-delivery-title">
          <div>
            <p className="section-index">Entrega técnica</p>
            <h2 id="service-delivery-title">{service.deliverable}</h2>
          </div>
          <aside>
            <strong>Limites do escopo</strong>
            <p>{service.boundary}</p>
          </aside>
        </section>

        <aside className="service-sources" aria-labelledby="service-sources-title">
          <div>
            <p className="section-index" id="service-sources-title">Fontes oficiais consultadas</p>
            <p>Conteúdo técnico resumido a partir de orientações publicadas pelos órgãos responsáveis. O enquadramento final depende dos dados do caso e da análise do órgão competente.</p>
          </div>
          <ul>
            {service.sources.map((source) => (
              <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </aside>

        <section className="related-services" aria-labelledby="related-services-title">
          <p className="section-index">Serviços relacionados</p>
          <h2 id="related-services-title">Continue pela rota adequada ao caso.</h2>
          <div>
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/servicos/${related.slug}`}>
                {related.shortTitle}<b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="service-final-cta">
          <p className="eyebrow">Próximo passo</p>
          <h2>Você explica o cenário. A Envora organiza a solução técnica.</h2>
          <p>Envie o que já tem em mãos. Definimos o enquadramento inicial, os documentos necessários e o escopo para resolver a demanda.</p>
          <ServiceWhatsAppLink service={service.shortTitle} className="button service-primary">Falar com a Envora agora <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
        </section>
      </main>

      <footer className="service-footer">
        <Link className="brand inverted" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} /></Link>
        <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      </footer>
    </div>
  );
}
