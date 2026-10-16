import Image from "next/image";
import Link from "next/link";
import ServiceWhatsAppLink from "../service-whatsapp-link";
import type { ContactServicePage } from "./contact-service-data";
import styles from "./contact-service.module.css";

function WhatsAppIcon() {
  return <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false" className={styles.whatsappIcon}>
    <path d="M14 4.1a9.7 9.7 0 0 0-8.3 14.7l-1.3 4.7 4.8-1.3A9.7 9.7 0 1 0 14 4.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.3 9.3c.3-.3.6-.4.9-.4h.7c.2 0 .5.1.6.5l1 2.1c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.7.5.9 1.2 1.6 2 2.1.3.2.5.2.7 0l.7-.7c.2-.2.4-.2.7-.1l2.1 1c.3.1.4.4.4.6 0 .3-.2 1-.6 1.4-.4.4-1.1.7-1.8.6-1.6-.2-3.4-1.2-5-2.6-1.4-1.3-2.5-3-2.7-4.4-.1-.9.2-1.7.7-2.2Z" fill="currentColor" />
  </svg>;
}

export default function ContactServiceLanding({ content: c }: { content: ContactServicePage }) {
  const contact = { service: c.shortTitle, message: c.contact.message };
  return <div className={styles.page}>
    <a className={styles.skip} href="#conteudo-servico">Ir para o conteúdo</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Envora — início"><Image src="/envora-logo-horizontal.svg" alt="Envora Consultoria Ambiental" width={198} height={49} priority /></Link>
      <Link href="/#solucoes" className={styles.servicesLink}>Serviços</Link>
      <ServiceWhatsAppLink {...contact} placement="header" className={`${styles.cta} ${styles.headerCta}`}>Falar no WhatsApp <WhatsAppIcon /></ServiceWhatsAppLink>
    </header>
    <main id="conteudo-servico">
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Envora Consultoria Ambiental · Joinville</p>
          <h1>{c.title}</h1>
          <p className={styles.lead}>{c.intro}</p>
          <ul className={styles.needs} aria-label="Situações que podem ser avaliadas">{c.contact.situations.map((item) => <li key={item}>{item}</li>)}</ul>
          <ServiceWhatsAppLink {...contact} placement="hero" className={styles.cta}>{c.contact.action}<WhatsAppIcon /></ServiceWhatsAppLink>
        </div>
        <figure className={styles.image}>
          <Image src={c.contact.image} alt={c.contact.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 44vw" />
          <figcaption>Imagem ilustrativa</figcaption>
        </figure>
      </section>
      <section className={styles.attendance} aria-labelledby="atendimento-titulo">
        <div>
          <p className={styles.eyebrow}>Do primeiro contato ao trabalho contratado</p>
          <h2 id="atendimento-titulo">Como começa o atendimento.</h2>
          <ol className={styles.steps}>{c.process.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
        <div className={styles.initialInformation}>
          <h2>O que ajuda na conversa.</h2>
          <ul>{c.contact.initialInformation.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Comece com o que já tem.</p>
          <ServiceWhatsAppLink {...contact} placement="initial_information" className={styles.cta}>Iniciar conversa no WhatsApp<WhatsAppIcon /></ServiceWhatsAppLink>
        </div>
        <p className={styles.boundary}>{c.boundary}</p>
      </section>
      <section className={styles.closing} aria-labelledby="conducao-titulo">
        <p className={styles.eyebrow}>A Envora conduz</p>
        <h2 id="conducao-titulo">Você explica o que precisa.<br /> A Envora conduz o trabalho contratado.</h2>
        <ServiceWhatsAppLink {...contact} placement="closing" className={styles.cta}>{c.contact.action}<WhatsAppIcon /></ServiceWhatsAppLink>
      </section>
    </main>
    <footer className={styles.footer}>
      <Link href="/" aria-label="Envora — início"><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Consultoria Ambiental" width={220} height={54} /></Link>
      <div><span>Joinville · Santa Catarina</span><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div>
      <nav aria-label="Informações complementares"><Link href="/#solucoes">Todos os serviços</Link><Link href="/privacidade">Privacidade</Link>{c.sources.map((source) => <a key={source.url} href={source.url} aria-label={source.label} target="_blank" rel="noreferrer">Referência técnica</a>)}</nav>
    </footer>
    <div className={styles.sticky}><ServiceWhatsAppLink {...contact} placement="mobile_sticky" className={styles.cta}>Falar no WhatsApp<WhatsAppIcon /></ServiceWhatsAppLink></div>
  </div>;
}
