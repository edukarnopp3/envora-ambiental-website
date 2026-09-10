import Image from "next/image";
import Link from "next/link";
import ServiceWhatsAppLink from "../service-whatsapp-link";
import ServiceFilm from "./service-film";
import type { ConversionContent } from "./conversion-data";
import styles from "./conversion.module.css";

export default function ConversionLanding({ content: c, service }: { content: ConversionContent; service: string }) {
  return <div className={styles.page}>
    <a className={styles.skip} href="#conteudo-servico">Ir para o conteúdo</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Envora — início"><Image src="/envora-logo-horizontal.svg" alt="Envora" width={198} height={49} priority /></Link>
      <nav aria-label="Nesta página"><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a></nav>
      <a className={styles.phone} href="tel:+5547984551622">(47) 98455-1622</a>
    </header>
    <main id="conteudo-servico">
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Envora Consultoria Ambiental · Joinville</p>
          <h1>{c.title}</h1>
          <p className={styles.lead}>{c.lead}</p>
          <ServiceWhatsAppLink service={service} placement="hero" className={styles.cta}>{c.action}<span aria-hidden="true">↗</span></ServiceWhatsAppLink>
          <p className={styles.micro}>Pelo WhatsApp. Sem formulário para começar.</p>
        </div>
        <figure className={styles.heroImage}>
          <Image src={c.image} alt={c.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          <figcaption>Da sua operação à documentação técnica.<small>Imagem ilustrativa</small></figcaption>
        </figure>
      </section>
      <div className={styles.signals}><span>Engenharia ambiental e sanitária</span><span>Atendimento em Joinville</span><span>Escopo definido antes da contratação</span></div>

      <section className={styles.section} aria-labelledby="situacao-titulo">
        <p className={styles.eyebrow}>Comece pelo que você precisa</p>
        <div className={styles.heading}><h2 id="situacao-titulo">Qual é a sua situação?</h2></div>
        <div className={styles.cards}>{c.situations.map(s => <ServiceWhatsAppLink key={s.title} service={service} situation={s.title} placement="situation" className={styles.card}><h3>{s.title}</h3><span>Falar no WhatsApp <b aria-hidden="true">↗</b></span></ServiceWhatsAppLink>)}</div>
        <ServiceWhatsAppLink service={service} situation="Ainda não sei qual serviço preciso" placement="unsure" className={styles.textLink}>Ainda não sei qual opção escolher →</ServiceWhatsAppLink>
      </section>

      <section id="como-funciona" className={styles.institutional} aria-labelledby="envora-titulo">
        <ServiceFilm />
        <div><p className={styles.eyebrow}>Deixe com a Envora</p><h2 id="envora-titulo">Você conta.<br />A gente cuida<br />da parte técnica.</h2><p>Da orientação aos documentos: a Envora conduz o trabalho contratado por você.</p><ServiceWhatsAppLink service={service} placement="institutional" className={styles.cta}>Quero resolver isso <span aria-hidden="true">↗</span></ServiceWhatsAppLink><small>Paisagem ilustrativa.</small></div>
      </section>

      <section id="duvidas" className={`${styles.section} ${styles.faq}`} aria-labelledby="duvidas-titulo"><div><h2 id="duvidas-titulo">Dúvidas frequentes</h2></div><div><details><summary>O que está incluído?</summary><ul>{c.deliverables.map(d => <li key={d}>{d}</li>)}</ul><p>{c.boundary}</p></details>{c.questions.map(q => <details key={q.question}><summary>{q.question}</summary><p>{q.answer}</p></details>)}</div></section>
      <section className={styles.closing}><p className={styles.eyebrow}>O próximo passo começa com contexto</p><h2>Conte o que sua empresa precisa resolver.</h2><ServiceWhatsAppLink service={service} placement="closing" className={styles.cta}>{c.action}<span aria-hidden="true">↗</span></ServiceWhatsAppLink><p>O primeiro contato define a demanda. A análise técnica completa segue o escopo contratado.</p></section>
    </main>
    <footer className={styles.footer}><Image src="/envora-logo-horizontal-dark.svg" alt="Envora Consultoria Ambiental" width={220} height={54} /><div><strong>Joinville · Santa Catarina</strong><a href="tel:+5547984551622">(47) 98455-1622</a><a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a></div><div><Link href="/#solucoes">Todos os serviços</Link><Link href="/privacidade">Privacidade</Link></div></footer>
    <div className={styles.sticky}><ServiceWhatsAppLink service={service} placement="mobile_sticky" className={styles.cta}>{c.action}<span aria-hidden="true">↗</span></ServiceWhatsAppLink></div>
  </div>;
}
