import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceWhatsAppLink from "../../service-whatsapp-link";
import { SITE_URL } from "../../site-url";
import { servicePageBySlug, servicePages } from "../service-data";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
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
  const service = servicePageBySlug.get(slug);
  if (!service) notFound();

  const related = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: "Envora Consultoria Ambiental", url: SITE_URL },
    areaServed: { "@type": "City", name: "Joinville" },
    url: `${SITE_URL}/servicos/${service.slug}`,
  };

  return (
    <div className="service-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
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
              <ServiceWhatsAppLink service={service.shortTitle} className="button service-primary">Solicitar triagem inicial <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
            </div>
            <div className="service-highlights" aria-label="Resumo do serviço">
              {service.highlights.map((highlight, index) => <div key={highlight}><small>{String(index + 1).padStart(2, "0")}</small><strong>{highlight}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="service-content-block service-when">
          <div><p className="section-index">Quando faz sentido</p><h2>Sinais de que vale analisar este serviço.</h2></div>
          <ul>{service.situations.map((situation) => <li key={situation}>{situation}</li>)}</ul>
        </section>

        {service.comparison ? (
          <section className="service-comparison" aria-labelledby="comparison-title">
            <div><p className="section-index light">Diferença prática</p><h2 id="comparison-title">Dois documentos, enquadramentos diferentes.</h2></div>
            <div className="comparison-grid">{service.comparison.map((item) => <article key={item.title}><span>{item.title}</span><p>{item.text}</p></article>)}</div>
          </section>
        ) : null}

        <section className="service-content-block service-scope">
          <div><p className="section-index">Escopo técnico</p><h2>Como a Envora organiza o trabalho.</h2></div>
          <ol>{service.scope.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </section>

        <section className="service-inputs">
          <div><p className="section-index light">Para começar</p><h2>O que precisamos analisar.</h2></div>
          <ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="service-delivery">
          <div><p className="section-index">Entrega esperada</p><h2>{service.deliverable}</h2></div>
          <aside><strong>Limite do escopo</strong><p>{service.boundary}</p></aside>
        </section>

        <section className="service-final-cta">
          <p className="eyebrow">Próximo passo</p>
          <h2>Explique sua situação antes de definir o escopo.</h2>
          <p>A triagem inicial organiza atividade, documentos e objetivo para indicar o que precisa ser conferido.</p>
          <ServiceWhatsAppLink service={service.shortTitle} className="button service-primary">Falar com a Envora <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
        </section>

        <section className="related-services" aria-labelledby="related-title">
          <p className="section-index">Outros serviços</p>
          <h2 id="related-title">Demandas relacionadas.</h2>
          <div>{related.map((item) => <Link key={item.slug} href={`/servicos/${item.slug}`}><span>{item.shortTitle}</span><b aria-hidden="true">↗</b></Link>)}</div>
        </section>
      </main>

      <footer className="service-footer">
        <Link className="brand inverted" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} /></Link>
        <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      </footer>
    </div>
  );
}
