import Image from "next/image";
import Link from "next/link";
import styles from "../teste-capa/teste-capa.module.css";
import VideoBackground from "./video-background";

export const metadata = {
  title: "Teste de capa com rio | Envora",
  robots: { index: false, follow: false },
};

const services = [
  "Autos de infração e exigências",
  "Licenciamento e regularização",
  "PGRS, PGRSS e PGRCC",
  "DANC, CCA e obrigações ambientais",
];

export default function TesteCapaRioPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-rio-title">
        <Image
          src="/teste-capa-rio-poster.jpg"
          alt="Instalação industrial ao lado de um rio e área verde"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        {/* Vídeo de Marc Espejo, disponibilizado gratuitamente no Pexels. */}
        <VideoBackground />
        <div className={styles.heroShade} />

        <header className={styles.header}>
          <Image src="/envora-logo-horizontal-dark.svg" width={180} height={44} alt="Envora Ambiental" />
          <nav className={styles.nav} aria-label="Navegação de demonstração">
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className={styles.headerCta} href="#contato">Falar com a Envora</a>
        </header>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>CONSULTORIA AMBIENTAL · JOINVILLE</p>
          <h1 id="hero-rio-title">Clareza para sua empresa avançar.</h1>
          <p className={styles.lead}>Licenciamento, regularização e gestão ambiental com orientação técnica.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contato">Fazer triagem inicial <span aria-hidden="true">↗</span></a>
            <a className={styles.secondary} href="#contato">Falar no WhatsApp <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section id="servicos" className={styles.services}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>O QUE A ENVORA FAZ</p>
          <h2>Serviços que aparecem logo de cara.</h2>
        </div>
        <ol>
          {services.map((service, index) => <li key={service}><span>0{index + 1}</span>{service}<b aria-hidden="true">↗</b></li>)}
        </ol>
      </section>

      <section id="metodo" className={styles.method}>
        <p className={styles.eyebrow}>ANTES DE INDICAR UMA ROTA</p>
        <h2>A análise começa pela operação, não por uma lista genérica de documentos.</h2>
        <Link href="/teste-capa" className={styles.back}>Comparar com a versão estática <span aria-hidden="true">→</span></Link>
      </section>
      <section id="contato" className={styles.contact}><p>Teste local de capa — nenhum contato é enviado por esta página.</p></section>
    </main>
  );
}
