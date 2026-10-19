import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import ServiceWhatsAppLink from "../service-whatsapp-link";
import WhatsAppMark from "../whatsapp-mark";
import { SITE_URL } from "../site-url";
import type { CommercialServiceDraft } from "./commercial-service-drafts";
import styles from "./contact-service.module.css";

function hasReviewMarker(text: string) {
  return /\[\s*CONFIRMAR(?:[^\]]*)\]/i.test(text);
}

function CopyList({ items, isProduction }: { items: string[]; isProduction: boolean }) {
  const publicItems = isProduction ? items.filter((item) => !hasReviewMarker(item)) : items;
  return <ul>{publicItems.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function CopyParagraphs({ items, isProduction }: { items: string[]; isProduction: boolean }) {
  const publicItems = isProduction ? items.filter((item) => !hasReviewMarker(item)) : items;
  return <>{publicItems.map((item) => <p key={item}>{item}</p>)}</>;
}

export default function CommercialServiceDraftLanding({ content: c }: { content: CommercialServiceDraft }) {
  const contact = { service: c.shortTitle, message: c.message };
  const headingPrefix = `draft-${c.slug}`;
  const isProduction = process.env.NODE_ENV === "production";
  const showReviewNotes = !isProduction;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/servicos/${c.slug}#service`,
        "mainEntityOfPage": `${SITE_URL}/servicos/${c.slug}`,
        "serviceType": c.shortTitle,
        "name": c.shortTitle,
        "description": c.metaDescription,
        "provider": { "@type": "ProfessionalService", "@id": `${SITE_URL}/#business`, "name": "Envora Consultoria Ambiental", "url": SITE_URL },
        "url": `${SITE_URL}/servicos/${c.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${SITE_URL}/#solucoes` },
          { "@type": "ListItem", "position": 3, "name": c.shortTitle, "item": `${SITE_URL}/servicos/${c.slug}` },
        ],
      },
    ],
  };

  return <div className="service-page-shell">
    {showReviewNotes && <a className={styles.skip} href="#conteudo-servico">Ir para o conteúdo</a>}
    <header className="service-topbar">
      <Link className="brand" href="/" aria-label="Envora Ambiental — início">
        <Image src="/envora-logo-horizontal.svg" alt="Envora Ambiental" width={360} height={88} priority />
      </Link>
      <nav aria-label="Navegação da página de serviço">
        <Link href="/#solucoes">Todos os serviços</Link>
        <Link href="/#triagem">Triagem</Link>
      </nav>
      <ServiceWhatsAppLink {...contact} placement="header" className="button button-small">Falar com especialista <WhatsAppMark /></ServiceWhatsAppLink>
    </header>

    {showReviewNotes && <aside className={styles.draftNotice} aria-label="Aviso de rascunho">
      <strong>Notas internas · somente local</strong>
      <span>{c.statusNote ?? "Revisar os pontos [CONFIRMAR] antes de aprovar qualquer publicação."}</span>
    </aside>}

    <main id="conteudo-servico">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section aria-labelledby={`${headingPrefix}-title`}>
        <ServiceWhatsAppLink
          {...contact}
          placement="hero"
          className="service-visual-hero"
          style={{ "--service-visual": `url('${c.image}')`, ...(c.imagePosition ? { "--service-position": c.imagePosition } : {}) } as CSSProperties}
        >
          <div className="service-visual-copy">
            <p className="eyebrow">{c.shortTitle}</p>
            <h1 id={`${headingPrefix}-title`}>{c.title}</h1>
            <p>{c.intro}</p>
            <span className="visually-hidden">{c.imageAlt}</span>
            <span className="service-visual-link">{c.action} <WhatsAppMark /></span>
          </div>
          <span className="service-image-note" aria-hidden="true">Imagem ilustrativa</span>
        </ServiceWhatsAppLink>
      </section>

      <section className="service-execution" aria-labelledby={`${headingPrefix}-execution`}>
        <div>
          <p className="section-index light">A Envora conduz</p>
          <h2 id={`${headingPrefix}-execution`}>Você explica o que precisa. A Envora conduz o trabalho contratado.</h2>
        </div>
        <div>
          <p>{c.deliverablesIntro}</p>
          <ServiceWhatsAppLink {...contact} placement="execution" className="button service-primary">Quero que a Envora conduza <WhatsAppMark /></ServiceWhatsAppLink>
          <small>A conversa começa pela situação informada. O escopo e os limites são definidos antes da contratação; decisões de órgãos e serviços de terceiros não são garantidos pela Envora.</small>

          <div className="service-details-group">
            <details className="service-details">
              <summary>O que é e quando se aplica</summary>
              <div className="service-details-copy">
                <h3>O que é</h3>
                <CopyParagraphs items={c.whatIs} isProduction={isProduction} />
                <h3>Para quem e quando se aplica</h3>
                <CopyParagraphs items={c.audience} isProduction={isProduction} />
                <CopyList items={c.situations} isProduction={isProduction} />
              </div>
            </details>

            <details className="service-details">
              <summary>O que a Envora faz</summary>
              <div className="service-details-copy">
                <p>{c.deliverablesIntro}</p>
                <CopyList items={c.deliverables} isProduction={isProduction} />
                <h3>Etapas do atendimento</h3>
                <CopyList items={c.process} isProduction={isProduction} />
              </div>
            </details>

            <details className="service-details">
              <summary>O que ajuda na conversa inicial</summary>
              <div className="service-details-copy">
                <p>{c.clientIntro}</p>
                <CopyList items={c.clientItems} isProduction={isProduction} />
              </div>
            </details>

            <details className="service-details">
              <summary>O que depende de órgão ou terceiros</summary>
              <div className="service-details-copy">
                <p>{c.dependencyIntro}</p>
                <CopyList items={c.dependencyItems} isProduction={isProduction} />
              </div>
            </details>

            <details className="service-details">
              <summary>Limites do escopo</summary>
              <div className="service-details-copy">
                <p>{c.notIncludedIntro}</p>
                <CopyList items={c.notIncludedItems} isProduction={isProduction} />
              </div>
            </details>

            <details className="service-details">
              <summary>Dúvidas frequentes</summary>
              <div className="service-details-copy">
                {c.questions.filter((item) => !isProduction || (!hasReviewMarker(item.question) && !hasReviewMarker(item.answer))).map((item) => <details className="service-details-nested" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>)}
              </div>
            </details>
          </div>

          <ServiceWhatsAppLink {...contact} placement="closing" className="button service-primary">{c.action} <WhatsAppMark /></ServiceWhatsAppLink>
        </div>
      </section>

      {showReviewNotes && <aside className={styles.confirmationBox} aria-labelledby={`${headingPrefix}-confirm`}>
        <p className="section-index">Revisão técnica · somente local</p>
        <h2 id={`${headingPrefix}-confirm`}>Pontos a validar antes de ampliar o escopo.</h2>
        <ul>{c.confirmations.map((item) => <li key={item}>{item}</li>)}</ul>
        {c.sources.length > 0 && <p className={styles.reviewSources}>Referências consultadas: {c.sources.map((source, index) => <span key={source.url}>{index > 0 ? " · " : ""}<a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></span>)}</p>}
      </aside>}
    </main>

    <footer className="service-footer">
      <Link className="brand inverted" href="/" aria-label="Envora Ambiental — início">
        <Image src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" width={360} height={88} />
      </Link>
      <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      <nav aria-label="Links do site"><Link href="/#solucoes">Todos os serviços</Link><Link href="/privacidade">Privacidade</Link></nav>
    </footer>
    <div className="service-mobile-sticky"><ServiceWhatsAppLink {...contact} placement="mobile_sticky" className="button service-mobile-cta">Falar com a Envora <WhatsAppMark /></ServiceWhatsAppLink></div>
  </div>;
}
