import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ServiceWhatsAppLink from "../../service-whatsapp-link";
import { SITE_URL } from "../../site-url";
import { relatedServiceSlugs, serviceInputsBySlug, servicePageBySlug, servicePages } from "../service-data";

type ServicePageProps = { params: Promise<{ slug: string }> };

const licenseStages = [
  {
    code: "LAP",
    step: "01",
    eyebrow: "Antes de implantar",
    title: "Validar a viabilidade.",
    text: "Aprova a localização e a concepção do empreendimento e define as condições para as próximas fases.",
    contact: "Licença Ambiental Prévia (LAP)",
  },
  {
    code: "LAI",
    step: "02",
    eyebrow: "Antes de instalar",
    title: "Autorizar a instalação.",
    text: "Permite implantar o empreendimento conforme os projetos e controles ambientais aprovados.",
    contact: "Licença Ambiental de Instalação (LAI)",
  },
  {
    code: "LAO",
    step: "03",
    eyebrow: "Antes de operar",
    title: "Autorizar a operação.",
    text: "Permite iniciar a atividade após a verificação das exigências e medidas de controle aplicáveis.",
    contact: "Licença Ambiental de Operação (LAO)",
  },
] as const;

type ServiceVisual = {
  image: string;
  headline: string;
  description: string;
  execution: string;
};

const serviceVisualBySlug: Record<string, ServiceVisual> = {
  "auto-de-infracao-ambiental": {
    image: "/auto-infracao-visual.webp",
    headline: "Auto recebido. Prazo correndo.",
    description: "Organize a resposta ambiental com método antes de perder o prazo.",
    execution: "Você envia o auto e o que já tem em mãos. A Envora organiza a análise técnica, as evidências e a resposta ambiental prevista no escopo contratado.",
  },
  "diagnostico-e-enquadramento-ambiental": {
    image: "/diagnostico-enquadramento-visual.webp",
    headline: "Antes de protocolar, defina a rota certa.",
    description: "Atividade, porte, estrutura e localização definem o caminho técnico.",
    execution: "Você explica a operação. A Envora identifica o enquadramento, organiza as informações e aponta a rota ambiental aplicável ao seu caso.",
  },
  danc: {
    image: "/danc-visual.webp",
    headline: "Comprovar a dispensa começa pelo enquadramento.",
    description: "A atividade precisa ser lida como ela realmente funciona.",
    execution: "Você descreve a atividade e o local. A Envora organiza o enquadramento e a documentação necessária para o procedimento aplicável.",
  },
  cca: {
    image: "/cca-visual.webp",
    headline: "Abaixo do porte também precisa estar documentado.",
    description: "Porte, capacidade e atividade precisam conversar entre si.",
    execution: "Você informa os dados reais da operação. A Envora confere o porte, organiza o enquadramento e conduz a documentação técnica necessária.",
  },
  "licenciamento-ambiental": {
    image: "/licenciamento-ambiental-visual.webp",
    headline: "A licença começa antes do protocolo.",
    description: "O caminho correto aparece quando se entende a operação por inteiro.",
    execution: "Você explica o empreendimento. A Envora identifica a modalidade, prepara a documentação técnica contratada, protocola e acompanha o processo.",
  },
  "autorizacao-ambiental-aua": {
    image: "/aua-visual.webp",
    headline: "Uma autorização para a atividade certa.",
    description: "Quando a AuA se aplica, a rota precisa ser precisa desde o início.",
    execution: "Você apresenta a atividade e a estrutura. A Envora confirma o enquadramento, organiza as peças técnicas e conduz o processo de Autorização Ambiental.",
  },
  "renovacao-e-regularizacao": {
    image: "/renovacao-regularizacao-visual.webp",
    headline: "Sua licença ainda representa sua operação?",
    description: "A empresa muda; a licença precisa acompanhar a realidade atual.",
    execution: "Você envia a licença e explica o que mudou. A Envora compara a operação atual, identifica a rota necessária e organiza a renovação ou regularização.",
  },
  "gestao-de-condicionantes": {
    image: "/condicionantes-visual.webp",
    headline: "Prazo, responsável e evidência.",
    description: "Condicionante só está controlada quando pode ser comprovada.",
    execution: "Você envia a licença e os registros disponíveis. A Envora estrutura obrigações, prazos, responsáveis e evidências para a condução técnica contratada.",
  },
  "planos-de-gerenciamento-de-residuos": {
    image: "/residuos-visual.webp",
    headline: "Resíduos mapeados. Rotina funcionando.",
    description: "O plano precisa caber na operação e resistir à conferência.",
    execution: "Você mostra como os resíduos são gerados e movimentados. A Envora identifica o plano aplicável e estrutura a rotina e a documentação técnica necessária.",
  },
  "mtr-e-documentacao-de-residuos": {
    image: "/mtr-documentacao-visual.webp",
    headline: "Sem registro, a rastreabilidade quebra.",
    description: "Geração, transporte e destinação precisam deixar evidências coerentes.",
    execution: "Você apresenta a rotina e os documentos existentes. A Envora organiza o controle de MTR, DMR, CDF e comprovantes conforme o escopo contratado.",
  },
  "laudo-e-controle-acustico": {
    image: "/acustico-visual.webp",
    headline: "Identifique a fonte antes de controlar o ruído.",
    description: "A solução técnica começa pela fonte, pelo entorno e pelo limite aplicável.",
    execution: "Você explica a atividade, os equipamentos e o entorno. A Envora define a avaliação técnica necessária e orienta a documentação e as medidas aplicáveis.",
  },
};

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
  const isLicenseJourney = service.slug === "lap-lai-lao";
  const visual = serviceVisualBySlug[service.slug] ?? {
    image: "/licenciamento-ambiental-visual.webp",
    headline: service.title,
    description: service.intro,
    execution: "Você explica o que precisa. A Envora organiza a condução técnica prevista no escopo contratado.",
  };
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
        {isLicenseJourney ? (
          <>
            <section className="license-journey" aria-label="Etapas do licenciamento ambiental">
              <h1 className="visually-hidden">{service.title}</h1>
              <div className="license-stage-track" aria-label="Etapas do licenciamento ambiental">
                {licenseStages.map((stage) => (
                  <ServiceWhatsAppLink service={stage.contact} className="license-stage" key={stage.code}>
                    <div className="license-stage-top"><span>{stage.step}</span><strong>{stage.code}</strong></div>
                    <div className="license-stage-copy">
                      <p>{stage.eyebrow}</p>
                      <h3>{stage.title}</h3>
                      <span className="license-stage-description">{stage.text}</span>
                    </div>
                  </ServiceWhatsAppLink>
                ))}
              </div>
            </section>

            <section className="license-handoff" aria-labelledby="license-handoff-title">
              <div>
                <p className="section-index light">A Envora conduz</p>
                <h2 id="license-handoff-title">Você não precisa saber qual licença pedir.</h2>
              </div>
              <div>
                <p>Você explica o que precisa. A Envora identifica a etapa, organiza a documentação, protocola e executa a condução técnica do processo por você.</p>
                <ServiceWhatsAppLink service={service.shortTitle} className="button service-primary">Deixar a Envora resolver <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
                <small>A emissão da licença e o prazo de análise são decisões do órgão ambiental competente.</small>
              </div>
            </section>
          </>
        ) : (
          <>
            <section aria-labelledby="service-visual-title">
              <ServiceWhatsAppLink service={service.shortTitle} className="service-visual-hero" style={{ "--service-visual": `url('${visual.image}')` } as CSSProperties}>
                <div className="service-visual-copy">
                  <p className="eyebrow">{service.shortTitle}</p>
                  <h1 id="service-visual-title">{visual.headline}</h1>
                  <p>{visual.description}</p>
                  <span className="service-visual-link">Explicar minha situação <b aria-hidden="true">↗</b></span>
                </div>
              </ServiceWhatsAppLink>
            </section>

            <section className="service-execution" aria-labelledby="service-execution-title">
              <div>
                <p className="section-index light">A Envora conduz</p>
                <h2 id="service-execution-title">Você explica o que precisa. A Envora resolve a parte técnica.</h2>
              </div>
              <div>
                <p>{visual.execution}</p>
                <ServiceWhatsAppLink service={service.shortTitle} className="button service-primary">Deixar a Envora resolver <span aria-hidden="true">↗</span></ServiceWhatsAppLink>
                <small>A decisão do órgão competente, quando aplicável, permanece sujeita à análise oficial.</small>
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
          </>
        )}

        {!isLicenseJourney && <aside className="service-sources" aria-labelledby="service-sources-title">
          <div>
            <p className="section-index" id="service-sources-title">Fontes oficiais consultadas</p>
            <p>Conteúdo técnico resumido a partir de orientações publicadas pelos órgãos responsáveis. O enquadramento final depende dos dados do caso e da análise do órgão competente.</p>
          </div>
          <ul>
            {service.sources.map((source) => (
              <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </aside>}

        {!isLicenseJourney && <section className="related-services" aria-labelledby="related-services-title">
          <p className="section-index">Serviços relacionados</p>
          <h2 id="related-services-title">Continue pela rota adequada ao caso.</h2>
          <div>
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/servicos/${related.slug}`}>
                {related.shortTitle}<b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </section>}

      </main>

      <footer className="service-footer">
        <Link className="brand inverted" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} /></Link>
        <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      </footer>
    </div>
  );
}
