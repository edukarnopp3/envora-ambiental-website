import Image from "next/image";
import Link from "next/link";
import ServiceWhatsAppLink from "../service-whatsapp-link";
import WhatsAppMark from "../whatsapp-mark";
import type { CommercialServiceDraft } from "./commercial-service-drafts";
import styles from "./contact-service.module.css";

function ContentList({ items }: { items: string[] }) {
  return <ul className={styles.draftList}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function CommercialServiceDraftLanding({ content: c }: { content: CommercialServiceDraft }) {
  const contact = { service: c.shortTitle, message: c.message };
  const headingPrefix = `draft-${c.slug}`;

  return <div className={styles.page}>
    <a className={styles.skip} href="#conteudo-servico">Ir para o conteúdo</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Envora — início"><Image src="/envora-logo-horizontal.svg" alt="Envora Consultoria Ambiental" width={198} height={49} priority /></Link>
      <Link href="/#solucoes" className={styles.servicesLink}>Serviços</Link>
      <ServiceWhatsAppLink {...contact} placement="header" className={`${styles.cta} ${styles.headerCta}`}>Falar no WhatsApp <WhatsAppMark /></ServiceWhatsAppLink>
    </header>
    <aside className={styles.draftNotice} aria-label="Aviso de rascunho">
      <strong>Rascunho local · não publicado</strong>
      <span>{c.statusNote ?? "Revisar os pontos [CONFIRMAR] antes de aprovar qualquer publicação."}</span>
    </aside>
    <main id="conteudo-servico">
      <section className={styles.hero} aria-labelledby={`${headingPrefix}-title`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{c.eyebrow} · Envora</p>
          <h1 id={`${headingPrefix}-title`}>{c.title}</h1>
          <p className={styles.lead}>{c.intro}</p>
          <ul className={styles.needs} aria-label="Situações que podem ser avaliadas">{c.situations.map((item) => <li key={item}>{item}</li>)}</ul>
          <ServiceWhatsAppLink {...contact} placement="hero" className={styles.cta}>{c.action}<WhatsAppMark /></ServiceWhatsAppLink>
        </div>
        <figure className={styles.image}>
          <Image src={c.image} alt={c.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 44vw" style={c.imagePosition ? { objectPosition: c.imagePosition } : undefined} />
          <figcaption>Imagem ilustrativa</figcaption>
        </figure>
      </section>

      <section className={styles.draftIntro} aria-label="O que é e para quem se aplica">
        <article>
          <p className={styles.eyebrow}>O que é</p>
          <h2>Entenda o procedimento.</h2>
          {c.whatIs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <article>
          <p className={styles.eyebrow}>Para quem e quando se aplica</p>
          <h2>A situação define o caminho.</h2>
          {c.audience.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
      </section>

      <section className={styles.draftDeliverables} aria-label="O que a Envora entrega e etapas do atendimento">
        <article>
          <p className={styles.eyebrow}>O que a Envora entrega</p>
          <h2>Escopo claro antes de começar.</h2>
          <p>{c.deliverablesIntro}</p>
          <ContentList items={c.deliverables} />
        </article>
        <article className={styles.draftLimit}>
          <p className={styles.eyebrow}>Etapas do atendimento</p>
          <h2>Da avaliação à condução.</h2>
          <ContentList items={c.process} />
          <ServiceWhatsAppLink {...contact} placement="process" className={styles.cta}>Quero que a Envora conduza <WhatsAppMark /></ServiceWhatsAppLink>
        </article>
      </section>

      <section className={styles.attendance} aria-labelledby={`${headingPrefix}-process` }>
        <div>
          <p className={styles.eyebrow}>A Envora conduz</p>
          <h2 id={`${headingPrefix}-process`}>Você explica o que precisa. A Envora conduz o trabalho contratado.</h2>
          <p className={styles.lead}>A conversa começa pelo WhatsApp. A Envora entende a situação e delimita o escopo antes da contratação.</p>
          <ServiceWhatsAppLink {...contact} placement="process" className={styles.cta}>Falar sobre esse serviço <WhatsAppMark /></ServiceWhatsAppLink>
        </div>
        <div className={styles.initialInformation}>
          <p className={styles.eyebrow}>Conversa inicial</p>
          <h2>O que ajuda a começar.</h2>
          <p>{c.clientIntro}</p>
          <ContentList items={c.clientItems} />
          <ServiceWhatsAppLink {...contact} placement="initial_information" className={styles.cta}>{c.action}<WhatsAppMark /></ServiceWhatsAppLink>
        </div>
      </section>

      <section className={styles.draftDetails} aria-label="Dependências e limites do serviço">
        <article>
          <p className={styles.eyebrow}>Dependências externas</p>
          <h2>O que depende de órgãos ou terceiros.</h2>
          <p>{c.dependencyIntro}</p>
          <ContentList items={c.dependencyItems} />
        </article>
        <article className={styles.draftLimit}>
          <p className={styles.eyebrow}>Escopo e limites</p>
          <h2>O que não está incluído.</h2>
          <p>{c.notIncludedIntro}</p>
          <ContentList items={c.notIncludedItems} />
        </article>
      </section>

      <section className={styles.draftFaq} aria-labelledby={`${headingPrefix}-faq`}>
        <div>
          <p className={styles.eyebrow}>Dúvidas frequentes</p>
          <h2 id={`${headingPrefix}-faq`}>Antes de iniciar.</h2>
        </div>
        <div className={styles.draftQuestions}>{c.questions.map((item) => <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>)}</div>
      </section>

      <aside className={styles.confirmationBox} aria-labelledby={`${headingPrefix}-confirm`}>
        <p className={styles.eyebrow}>Revisão comercial</p>
        <h2 id={`${headingPrefix}-confirm`}>Confirmar antes de publicar.</h2>
        <ContentList items={c.confirmations} />
      </aside>

      <section className={styles.closing} aria-labelledby={`${headingPrefix}-closing`}>
        <p className={styles.eyebrow}>Próximo passo</p>
        <h2 id={`${headingPrefix}-closing`}>Você explica a situação. A Envora avalia o escopo.</h2>
        <ServiceWhatsAppLink {...contact} placement="closing" className={styles.cta}>{c.action}<WhatsAppMark /></ServiceWhatsAppLink>
      </section>
    </main>
    <footer className={styles.footer}>
      <Link href="/" aria-label="Envora — início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Consultoria Ambiental" width={220} height={54} /></Link>
      <div><strong>Envora Consultoria Ambiental</strong><span>Joinville · Santa Catarina</span><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      <nav aria-label="Links e referências"><Link href="/#solucoes">Todos os serviços</Link><Link href="/privacidade">Privacidade</Link>{c.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}</a>)}</nav>
    </footer>
    <div className={styles.sticky}><ServiceWhatsAppLink {...contact} placement="mobile_sticky" className={styles.cta}>Falar no WhatsApp <WhatsAppMark /></ServiceWhatsAppLink></div>
  </div>;
}
