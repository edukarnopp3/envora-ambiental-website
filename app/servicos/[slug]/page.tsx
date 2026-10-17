import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ServiceWhatsAppLink from "../../service-whatsapp-link";
import WhatsAppMark from "../../whatsapp-mark";
import { SITE_URL } from "../../site-url";
import { serviceInputsBySlug, servicePageBySlug, servicePages } from "../service-data";
import { conversionPages } from "../conversion-data";
import { contactServicePageBySlug } from "../contact-service-data";

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
  imagePosition?: string;
};

const serviceVisualBySlug: Record<string, ServiceVisual> = {
  "auto-de-infracao-ambiental": {
    image: "/auto-infracao-visual.webp",
    headline: "Auto recebido. Prazo correndo.",
    description: "Organize a resposta ambiental com método antes de perder o prazo.",
    execution: "A partir do auto e dos documentos já disponíveis, a Envora organiza a análise técnica, as evidências e a resposta ambiental prevista no escopo contratado.",
  },
  "diagnostico-e-enquadramento-ambiental": {
    image: "/diagnostico-enquadramento-visual.webp",
    headline: "Antes de protocolar, defina a rota certa.",
    description: "Atividade, porte, estrutura e localização definem o caminho técnico.",
    execution: "A partir da sua operação, a Envora identifica o enquadramento, organiza as informações e aponta a rota ambiental aplicável ao seu caso.",
  },
  danc: {
    image: "/danc-visual.webp",
    headline: "Comprovar a dispensa começa pelo enquadramento.",
    description: "A atividade precisa ser lida como ela realmente funciona.",
    execution: "A partir da atividade e do local, a Envora organiza o enquadramento e a documentação necessária para o procedimento aplicável.",
  },
  cca: {
    image: "/cca-visual.webp",
    headline: "Abaixo do porte também precisa estar documentado.",
    description: "Porte, capacidade e atividade precisam conversar entre si.",
    execution: "A partir dos dados reais da operação, a Envora confere o porte, organiza o enquadramento e conduz a documentação técnica necessária.",
  },
  "licenciamento-ambiental": {
    image: "/licenciamento-ambiental-visual.webp",
    headline: "A licença começa antes do protocolo.",
    description: "O caminho correto aparece quando se entende a operação por inteiro.",
    execution: "A partir do empreendimento e da operação, a Envora identifica a modalidade, prepara a documentação técnica contratada, protocola e acompanha o processo.",
  },
  "autorizacao-ambiental-aua": {
    image: "/aua-visual.webp",
    headline: "Uma autorização para a atividade certa.",
    description: "Quando a AuA se aplica, a rota precisa ser precisa desde o início.",
    execution: "A partir da atividade e da estrutura, a Envora confirma o enquadramento, organiza as peças técnicas e conduz o processo de Autorização Ambiental.",
  },
  "autorizacao-corte-vegetacao-auc": {
    image: "/auc-visual.webp",
    headline: "Vegetação nativa. Autorização antes da supressão.",
    description: "A documentação começa pela leitura do local e da intervenção pretendida.",
    execution: "A Envora organiza o enquadramento, o levantamento e as peças técnicas previstas para o processo de AuC, incluindo a verificação das etapas relacionadas ao Sinaflor quando aplicáveis.",
  },
  "projeto-recuperacao-area-degradada-prad": {
    image: "/prad-recuperacao-etapas.webp",
    headline: "Recuperar começa por entender a área.",
    description: "Da área alterada à implantação das medidas e à vegetação recomposta: o projeto organiza as etapas da recuperação.",
    execution: "A Envora caracteriza a área, define medidas técnicas de recuperação e estrutura o PRAD conforme a exigência identificada, com documentação de acompanhamento prevista no escopo.",
  },
  "autorizacao-corte-arvores-isoladas-cai": {
    image: "/cai-visual.webp",
    headline: "Árvore isolada. Autorização específica.",
    description: "Caracterize o indivíduo e a justificativa antes de solicitar o corte.",
    execution: "A Envora organiza a avaliação técnica, a justificativa e os documentos para o pedido de autorização de árvores isoladas, conforme o procedimento aplicável.",
  },
  "renovacao-e-regularizacao": {
    image: "/renovacao-regularizacao-visual.webp",
    headline: "Sua licença ainda representa sua operação?",
    description: "A empresa muda; a licença precisa acompanhar a realidade atual.",
    execution: "A partir da licença e da operação atual, a Envora identifica a rota necessária e organiza a renovação ou regularização.",
  },
  "gestao-de-condicionantes": {
    image: "/condicionantes-visual.webp",
    headline: "Prazo, responsável e evidência.",
    description: "Condicionante só está controlada quando pode ser comprovada.",
    execution: "A partir da licença e dos registros disponíveis, a Envora estrutura obrigações, prazos, responsáveis e evidências para a condução técnica contratada.",
  },
  "planos-de-gerenciamento-de-residuos": {
    image: "/residuos-visual.webp",
    headline: "Resíduos mapeados. Rotina funcionando.",
    description: "O plano precisa caber na operação e resistir à conferência.",
    execution: "A partir da rotina de geração e movimentação dos resíduos, a Envora identifica o plano aplicável e estrutura a documentação técnica necessária.",
  },
  "mtr-e-documentacao-de-residuos": {
    image: "/mtr-documentacao-visual.webp",
    headline: "Sem registro, a rastreabilidade quebra.",
    description: "Geração, transporte e destinação precisam deixar evidências coerentes.",
    execution: "A partir da rotina e dos documentos existentes, a Envora organiza o controle de MTR, DMR, CDF e comprovantes conforme o escopo contratado.",
  },
  "laudo-e-controle-acustico": {
    image: "/acustico-visual.webp",
    headline: "Identifique a fonte antes de controlar o ruído.",
    description: "A solução técnica começa pela fonte, pelo entorno e pelo limite aplicável.",
    execution: "A partir da atividade, dos equipamentos e do entorno, a Envora define a avaliação técnica necessária e orienta a documentação e as medidas aplicáveis.",
  },
  "responsabilidade-tecnica-ambiental": {
    image: "/condicionantes-visual.webp",
    headline: "Responsabilidade técnica com escopo definido.",
    description: "A Envora avalia a atividade, a necessidade de acompanhamento e a compatibilidade da atuação antes da contratação.",
    execution: "Você informa a atividade e a necessidade. A Envora confirma a possibilidade de atendimento e define entregas e responsabilidades na proposta. Após a contratação, a Envora conduz o trabalho contratado conforme o escopo acordado.",
  },
  "outorga-e-regularizacao-de-uso-da-agua": {
    image: "/outorga-captacao-real.webp",
    headline: "O uso da água define o caminho técnico.",
    description: "Poços, captações e documentos de uso são avaliados conforme a localização e a situação de cada imóvel.",
    execution: "Você informa onde fica o imóvel e como a água é utilizada. A Envora avalia o procedimento e define as etapas técnicas antes da proposta. Após a contratação, a Envora conduz o trabalho contratado conforme o escopo. A modalidade é definida caso a caso.",
    imagePosition: "53% center",
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
      images: [{ url: "/og.png", width: 8192, height: 4302, alt: `${service.shortTitle} — Envora` }],
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
  const isLicenseJourney = service.slug === "lap-lai-lao";
  const contactService = contactServicePageBySlug.get(slug);
  const conversion = conversionPages[slug];
  const visual = serviceVisualBySlug[service.slug] ?? {
    image: "/licenciamento-ambiental-visual.webp",
    headline: contactService?.title ?? conversion?.title ?? service.title,
    description: service.intro,
    execution: "Você explica o que precisa. A Envora organiza a condução técnica prevista no escopo contratado.",
  };
  const contactLinkProps = {
    service: service.shortTitle,
    message: contactService?.contact.message,
    contextPrompt: conversion?.contactPrompt,
  };
  const actionLabel = contactService?.contact.action ?? conversion?.action ?? "Contar minha situação";
  const firstContactInfo = contactService?.contact.initialInformation ?? conversion?.documents ?? serviceInputsBySlug[slug] ?? [];
  const processSteps = contactService?.process ?? service.process;
  const boundary = contactService?.boundary ?? conversion?.boundary ?? service.boundary;
  return (
    <div className="service-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="service-topbar">
        <Link className="brand" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal.svg" alt="Envora Ambiental" width={360} height={88} priority /></Link>
        <nav aria-label="Navegação da página de serviço">
          <Link href="/#solucoes">Todos os serviços</Link>
          <Link href="/#triagem">Triagem</Link>
        </nav>
        <ServiceWhatsAppLink {...contactLinkProps} placement="header" className="button button-small">Falar com especialista <WhatsAppMark /></ServiceWhatsAppLink>
      </header>

      <main>
        {isLicenseJourney ? (
          <>
            <section className="license-journey" aria-label="Etapas do licenciamento ambiental">
              <h1 className="visually-hidden">{service.title}</h1>
              <div className="license-stage-track" aria-label="Etapas do licenciamento ambiental">
                {licenseStages.map((stage) => (
                  <ServiceWhatsAppLink service={stage.contact} placement={`licenca_${stage.code.toLowerCase()}`} className="license-stage" key={stage.code}>
                    <div className="license-stage-top"><span>{stage.step}</span><strong>{stage.code}</strong></div>
                    <div className="license-stage-copy">
                      <p>{stage.eyebrow}</p>
                      <h3>{stage.title}</h3>
                      <span className="license-stage-description">{stage.text}</span>
                    </div>
                    <span className="license-stage-cta"><span>Falar sobre {stage.code}</span><WhatsAppMark /></span>
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
                <p>Você conta o que está acontecendo. A Envora identifica a etapa, organiza a documentação, protocola e executa a condução técnica do processo por você.</p>
                <ServiceWhatsAppLink {...contactLinkProps} placement="closing" className="button service-primary">Quero que a Envora resolva <WhatsAppMark /></ServiceWhatsAppLink>
                <small>A emissão da licença e o prazo de análise são decisões do órgão ambiental competente.</small>
              </div>
            </section>
          </>
        ) : (
          <>
            <section aria-labelledby="service-visual-title">
              <ServiceWhatsAppLink {...contactLinkProps} placement="hero" className="service-visual-hero" style={{ "--service-visual": `url('${visual.image}')`, ...(visual.imagePosition ? { "--service-position": visual.imagePosition } : {}) } as CSSProperties}>
                <div className="service-visual-copy">
                  <p className="eyebrow">{service.shortTitle}</p>
                  <h1 id="service-visual-title">{visual.headline}</h1>
                  <p>{visual.description}</p>
                  {contactService && <span className="visually-hidden">{contactService.contact.imageAlt}</span>}
                  <span className="service-visual-link">{actionLabel}<WhatsAppMark /></span>
                </div>
              </ServiceWhatsAppLink>
              {contactService?.contact.imageCredit && <p className="service-image-credit">Foto: <a href={contactService.contact.imageCredit.source} target="_blank" rel="noreferrer">{contactService.contact.imageCredit.author}</a> · <a href={contactService.contact.imageCredit.licenseUrl} target="_blank" rel="noreferrer">{contactService.contact.imageCredit.license}</a></p>}
            </section>

            <section className="service-execution" aria-labelledby="service-execution-title">
              <div>
                <p className="section-index light">A Envora conduz</p>
                <h2 id="service-execution-title">Você explica o que precisa. A Envora conduz o trabalho contratado.</h2>
              </div>
              <div>
                <p>{visual.execution}</p>
                <ServiceWhatsAppLink {...contactLinkProps} placement="execution" className="button service-primary">Quero que a Envora resolva <WhatsAppMark /></ServiceWhatsAppLink>
                {contactService && <ServiceWhatsAppLink {...contactLinkProps} placement="initial_information" className="button service-primary service-secondary-contact">Iniciar conversa no WhatsApp <WhatsAppMark /></ServiceWhatsAppLink>}
                <small>{boundary}</small>
                <div className="service-details-group">
                  <details className="service-details">
                    <summary>Como começa o atendimento</summary>
                    <ol>{processSteps.map((step) => <li key={step}>{step}</li>)}</ol>
                  </details>
                  <details className="service-details">
                    <summary>O que ajuda na conversa</summary>
                    <ul>{firstContactInfo.map((item) => <li key={item}>{item}</li>)}</ul>
                  </details>
                  {conversion ? <details className="service-details">
                    <summary>Dúvidas frequentes</summary>
                    <div className="service-details-copy">
                      <h3>Situações que podem ser avaliadas</h3>
                      <ul>{conversion.situations.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.text}</li>)}</ul>
                      <h3>Escopo e limites</h3>
                      <ul>{conversion.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                      <p>{conversion.boundary}</p>
                      {conversion.continuity && <><h3>{conversion.continuity.title}</h3><p>{conversion.continuity.text}</p><ul>{conversion.continuity.items.map((item) => <li key={item}>{item}</li>)}</ul></>}
                      {conversion.questions.map((item) => <details className="service-details-nested" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
                    </div>
                  </details> : <details className="service-details">
                    <summary>Ver detalhes deste serviço</summary>
                    <div className="service-details-copy"><p>{service.applies}</p><p>{service.deliverable}</p><ul>{service.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  </details>}
                </div>
              </div>
            </section>

          </>
        )}

      </main>

      <footer className="service-footer">
        <Link className="brand inverted" href="/" aria-label="Envora Ambiental - início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} /></Link>
        <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      </footer>
      <div className="service-mobile-sticky"><ServiceWhatsAppLink {...contactLinkProps} placement="mobile_sticky" className="button service-mobile-cta">Falar com a Envora <WhatsAppMark /></ServiceWhatsAppLink></div>
    </div>
  );
}
