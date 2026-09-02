"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import HeroBackgroundVideo from "./hero-background-video";

const WA_NUMBER = "5547984551622";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    envoraGoogleAdsConversionTarget?: string;
  }
}

function track(event: string, details: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details });
  if ((event === "whatsapp_click" || event === "generate_lead") && window.gtag && window.envoraGoogleAdsConversionTarget) {
    window.gtag("event", "conversion", {
      send_to: window.envoraGoogleAdsConversionTarget,
      event_callback: () => undefined,
      event_timeout: 1500,
    });
  }
}

function wa(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLink({ children, message, source, className = "" }: {
  children: React.ReactNode;
  message: string;
  source: string;
  className?: string;
}) {
  return <a className={className} href={wa(message)} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click", { source })}>{children}</a>;
}

const baseMessage = "Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville e gostaria de explicar minha situação.";

const sectors = [
  { code: "01", title: "Indústrias", text: "Licenciamento, renovação, condicionantes, PGRS, MTR e controle acústico." },
  { code: "02", title: "Clínicas e saúde", text: "PGRSS, segregação de resíduos de serviços de saúde e organização dos comprovantes de destinação." },
  { code: "03", title: "Postos de combustível", text: "Licenciamento, renovação, condicionantes e organização da documentação ambiental da operação." },
  { code: "04", title: "Construção civil", text: "PGRCC e documentação de transporte e destinação dos resíduos da construção civil." },
  { code: "05", title: "Comércios e serviços", text: "Enquadramento, DANC, CCA, licenciamento e controle acústico conforme a atividade." },
];

const services = [
  { code: "01", title: "Autos de infração e exigências ambientais", text: "Análise técnica do documento, levantamento do que foi solicitado e organização da resposta dentro do escopo profissional.", featured: true },
  { code: "02", title: "Diagnóstico e enquadramento ambiental", text: "Análise da atividade, porte, localização e situação documental para definir a rota aplicável.", featured: false },
  { code: "03", title: "DANC", text: "Preparação e acompanhamento da Declaração de Atividade Não Constante.", featured: false },
  { code: "04", title: "CCA", text: "Certidão de Conformidade Ambiental para atividades abaixo do porte de licenciamento.", featured: false },
  { code: "05", title: "Licenciamento ambiental", text: "LAP, LAI, LAO e AuA para indústrias e atividades diversas.", featured: false },
  { code: "06", title: "Renovação e regularização", text: "Análise da licença existente e organização da documentação para continuidade da operação.", featured: false },
  { code: "07", title: "Gestão de condicionantes", text: "Organização de obrigações, evidências, prazos e entregas previstas na licença.", featured: false },
  { code: "08", title: "PGRS", text: "Plano de Gerenciamento de Resíduos Sólidos para a operação da empresa.", featured: false },
  { code: "09", title: "PGRSS", text: "Plano de Gerenciamento de Resíduos de Serviços de Saúde para clínicas e geradores.", featured: false },
  { code: "10", title: "PGRCC", text: "Plano de Gerenciamento de Resíduos da Construção Civil.", featured: false },
  { code: "11", title: "MTR e documentação de resíduos", text: "Organização de manifestos e comprovantes de transporte e destinação.", featured: false },
  { code: "12", title: "Laudo e controle acústico", text: "Avaliação técnica, documentação e protocolo conforme as exigências aplicáveis.", featured: false },
];

const situations = [
  "Não sei se preciso de licença",
  "Preciso renovar ou verificar condicionantes",
  "Recebi um auto de infração ou exigência",
  "Vou iniciar, ampliar ou alterar a operação",
  "Preciso de PGRS, PGRSS, PGRCC ou documento de resíduos",
  "Preciso de laudo ou controle acústico",
  "Outra situação",
];

const docsOptions = [
  "Ainda não tenho processo",
  "Tenho licença, certidão ou autorização",
  "Tenho um processo em andamento",
  "Não sei informar",
];

const faqs = [
  { q: "Recebi um auto de infração ambiental. O que faço?", a: "Confira o órgão emissor, o prazo indicado e os documentos solicitados. A Envora pode analisar o conteúdo técnico, organizar as informações e preparar os itens ambientais previstos no escopo. Quando houver matéria jurídica, a atuação deve ser complementada por advogado." },
  { q: "Minha empresa precisa de licença ambiental em Joinville?", a: "Depende da atividade, do porte, da localização e das características da operação. A triagem inicial organiza essas informações para indicar a rota provável e o que precisa ser confirmado." },
  { q: "Qual é a diferença entre DANC, CCA e licença ambiental?", a: "Em linhas gerais, a DANC formaliza que a atividade não consta da listagem sujeita ao licenciamento; a CCA pode se aplicar quando a atividade consta, mas está abaixo do porte; e a licença é exigida quando atividade e porte se enquadram. A conclusão depende da análise de cada caso." },
  { q: "A Envora garante a aprovação do processo?", a: "Não. A decisão cabe ao órgão competente. A Envora prepara a documentação com rigor técnico, reduz falhas evitáveis e acompanha as etapas previstas no escopo contratado." },
  { q: "Quanto tempo leva um processo ambiental?", a: "O prazo varia conforme modalidade, complexidade, documentos, estudos necessários e tempo de análise do órgão. A proposta separa o que depende da consultoria dos fatores externos." },
  { q: "Como começa o atendimento?", a: "Você descreve a atividade e a situação atual. A Envora faz a triagem, solicita os documentos essenciais e apresenta o próximo passo antes de definir o escopo." },
];

export default function EnvoraLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [sector, setSector] = useState("");
  const [situation, setSituation] = useState("");
  const [otherSituation, setOtherSituation] = useState("");
  const [docs, setDocs] = useState("");
  const [lead, setLead] = useState({ name: "", phone: "", company: "", city: "Joinville" });

  const situationDetail = situation === "Outra situação"
    ? `Outra situação — ${otherSituation.trim() || "não descrita"}`
    : situation;
  const triageReady = Boolean(sector && situation && docs && (situation !== "Outra situação" || otherSituation.trim()));
  const triageMessage = useMemo(() =>
    `Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville.\n\nSetor/atividade: ${sector || "não informado"}\nSituação: ${situationDetail || "não informada"}\nDocumentação atual: ${docs || "não informada"}\n\nGostaria de receber uma triagem inicial e entender o próximo passo.`,
  [sector, situationDetail, docs]);

  useEffect(() => {
    const navigationSections = ["inicio", "solucoes", "setores", "triagem", "processo", "faq", "contato"];
    let frame = 0;

    function updateActiveSection() {
      const headerHeight = document.querySelector<HTMLElement>(".topbar")?.offsetHeight ?? 88;
      const readingLine = window.scrollY + headerHeight + Math.min(160, window.innerHeight * 0.22);
      let current = "inicio";
      navigationSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (section.offsetTop <= readingLine) current = id;
      });
      setActiveSection(current);
    }

    function onScroll() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function selectSection(id: string) {
    setActiveSection(id);
    setMenuOpen(false);
  }

  function scrollToSection(id: string) {
    const target = document.getElementById(id);
    if (!target) return;

    const headerHeight = document.querySelector<HTMLElement>(".topbar")?.offsetHeight ?? 88;
    const destination = Math.max(0, target.offsetTop - headerHeight);
    window.history.pushState(null, "", `#${id}`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, destination);
      return;
    }

    const start = window.scrollY;
    const distance = destination - start;
    const duration = 520;
    const startedAt = performance.now();
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    function step(now: number) {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, start + distance * eased);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        root.style.scrollBehavior = previousScrollBehavior;
      }
    }

    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const desktopPointer = window.matchMedia("(min-width: 901px) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let accumulatedDelta = 0;
    let resetTimer = 0;
    let locked = false;
    let scrollAnimationFrame = 0;

    function animateScrollTo(target: number) {
      const start = window.scrollY;
      const distance = target - start;
      const duration = 460;
      const startedAt = performance.now();

      function step(now: number) {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) scrollAnimationFrame = window.requestAnimationFrame(step);
      }

      window.cancelAnimationFrame(scrollAnimationFrame);
      scrollAnimationFrame = window.requestAnimationFrame(step);
    }

    function onWheel(event: WheelEvent) {
      if (!desktopPointer.matches || reducedMotion.matches || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const target = event.target as Element | null;
      if (target?.closest("input, select, textarea, [contenteditable='true']")) return;

      const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-panel]"));
      if (!panels.length) return;

      const headerOffset = 88;
      const direction = Math.sign(event.deltaY);

      event.preventDefault();
      if (locked) return;

      accumulatedDelta += event.deltaY;
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => { accumulatedDelta = 0; }, 180);
      if (Math.abs(accumulatedDelta) < 32) return;

      const viewportStep = Math.max(320, window.innerHeight - headerOffset);
      const stops = panels.flatMap((panel) => {
        const start = Math.max(0, panel.offsetTop - headerOffset);
        const end = Math.max(start, panel.offsetTop + panel.offsetHeight - window.innerHeight);
        if (end - start <= 40) return [start];
        const panelStops = [start];
        for (let stop = start + viewportStep; stop < end - 40; stop += viewportStep) panelStops.push(stop);
        panelStops.push(end);
        return panelStops;
      }).filter((stop, index, all) => index === 0 || Math.abs(stop - all[index - 1]) > 4);
      const current = window.scrollY;
      const nextStop = direction > 0
        ? stops.find((stop) => stop > current + 8)
        : [...stops].reverse().find((stop) => stop < current - 8);

      accumulatedDelta = 0;
      if (nextStop === undefined) return;

      locked = true;
      animateScrollTo(nextStop);
      window.setTimeout(() => { locked = false; }, 540);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.clearTimeout(resetTimer);
      window.cancelAnimationFrame(scrollAnimationFrame);
    };
  }, []);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("generate_lead", { source: "contact_form", city: lead.city });
    const message = `Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville.\n\nNome: ${lead.name}\nWhatsApp: ${lead.phone}\nEmpresa/atividade: ${lead.company}\nCidade: ${lead.city}\n\nGostaria de receber uma triagem inicial.`;
    window.open(wa(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site-shell">
      <header className={`topbar${activeSection === "inicio" && !menuOpen ? " on-hero" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Envora Ambiental - início"><img src={activeSection === "inicio" && !menuOpen ? "/envora-logo-horizontal-dark.svg" : "/envora-logo-horizontal.svg"} alt="Envora Ambiental" /></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
          <a className={activeSection === "inicio" ? "active" : ""} aria-current={activeSection === "inicio" ? "location" : undefined} href="#inicio" onClick={() => selectSection("inicio")}>Início</a>
          <a className={activeSection === "solucoes" ? "active" : ""} aria-current={activeSection === "solucoes" ? "location" : undefined} href="#solucoes" onClick={() => selectSection("solucoes")}>Serviços</a>
          <a className={activeSection === "setores" ? "active" : ""} aria-current={activeSection === "setores" ? "location" : undefined} href="#setores" onClick={() => selectSection("setores")}>Setores</a>
          <a className={activeSection === "triagem" ? "active" : ""} aria-current={activeSection === "triagem" ? "location" : undefined} href="#triagem" onClick={() => selectSection("triagem")}>Triagem</a>
          <a className={activeSection === "processo" ? "active" : ""} aria-current={activeSection === "processo" ? "location" : undefined} href="#processo" onClick={() => selectSection("processo")}>Como funciona</a>
          <a className={activeSection === "faq" ? "active" : ""} aria-current={activeSection === "faq" ? "location" : undefined} href="#faq" onClick={() => selectSection("faq")}>Dúvidas</a>
          <a className={activeSection === "contato" ? "active" : ""} aria-current={activeSection === "contato" ? "location" : undefined} href="#contato" onClick={() => selectSection("contato")}>Contato</a>
        </nav>
        <WhatsAppLink className="button button-small header-cta" source="header" message={baseMessage}>Falar com especialista</WhatsAppLink>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>{menuOpen ? "Fechar" : "Menu"}</button>
      </header>

      <main>
        <section className="hero hero-home" id="inicio" data-scroll-panel>
          <HeroBackgroundVideo />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Consultoria Ambiental · Joinville</p>
            <h1>Clareza para sua empresa avançar.</h1>
            <p className="hero-text hero-summary">Licenciamento, regularização e gestão ambiental com orientação técnica.</p>
            <div className="hero-actions">
              <a
                className="button hero-primary"
                href="#triagem"
                onClick={(event) => {
                  event.preventDefault();
                  selectSection("triagem");
                  track("triage_start", { source: "hero" });
                  scrollToSection("triagem");
                }}
              >Fazer triagem inicial <span aria-hidden="true">↓</span></a>
              <WhatsAppLink className="text-link hero-secondary" source="hero_whatsapp" message={baseMessage}>Falar no WhatsApp <span>→</span></WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="intro-section" id="solucoes" data-scroll-panel>
          <div className="section-index">01 — Serviços</div>
          <div className="section-heading section-heading-solo"><h2>Serviços ambientais<br />para sua empresa.</h2></div>
          <div className="service-grid">
            {services.map((service) => (
              <WhatsAppLink
                key={service.code}
                className={`service-card${service.featured ? " featured" : ""}`}
                source={`servico_${service.title}`}
                message={`Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Preciso de informações sobre ${service.title}.`}
              >
                <span>{service.code}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b>
              </WhatsAppLink>
            ))}
          </div>
        </section>

        <section className="sectors-section" id="setores" data-scroll-panel>
          <div className="section-index light">02 — Setores atendidos</div>
          <div className="sectors-head sectors-head-solo"><h2>Cada operação exige<br />uma leitura própria.</h2></div>
          <div className="sector-list">
            {sectors.map((item) => (
              <WhatsAppLink key={item.code} className="sector-row" source={`setor_${item.title}`} message={`Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Meu setor é ${item.title} e gostaria de uma triagem inicial.`}>
                <span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p><b>↗</b>
              </WhatsAppLink>
            ))}
          </div>
        </section>

        <section className="triage-section" id="triagem" data-scroll-panel>
          <div className="triage-copy">
            <div className="section-index">03 — Triagem inicial</div>
            <h2>Explique o cenário<br />em menos de 1 minuto.</h2>
            <div className="triage-output"><span>Ao final você solicita</span><b>Rota inicial provável</b><b>Documentos a conferir</b><b>Próximo passo recomendado</b></div>
          </div>
          <div className="triage-form">
            <fieldset><legend><span>01</span> Qual é o setor ou atividade?</legend><select value={sector} onChange={(e) => setSector(e.target.value)}><option value="">Selecione uma opção</option>{["Indústria", "Clínica ou serviço de saúde", "Posto de combustível", "Construção civil", "Comércio ou serviço", "Outra atividade"].map((item) => <option key={item}>{item}</option>)}</select></fieldset>
            <fieldset>
              <legend><span>02</span> O que descreve a situação?</legend>
              <select
                value={situation}
                onChange={(event) => {
                  setSituation(event.target.value);
                  if (event.target.value !== "Outra situação") setOtherSituation("");
                }}
              >
                <option value="">Selecione uma opção</option>
                {situations.map((item) => <option key={item}>{item}</option>)}
              </select>
              {situation === "Outra situação" && (
                <label className="other-situation">
                  Descreva brevemente a situação
                  <textarea
                    value={otherSituation}
                    onChange={(event) => setOtherSituation(event.target.value)}
                    placeholder="Ex.: recebi um documento do órgão e não sei qual providência tomar."
                    rows={4}
                    maxLength={600}
                    required
                  />
                </label>
              )}
            </fieldset>
            <fieldset><legend><span>03</span> Situação documental atual?</legend><div className="choice-grid two">{docsOptions.map((item) => <button className={docs === item ? "selected" : ""} type="button" key={item} onClick={() => setDocs(item)}>{item}</button>)}</div></fieldset>
            <WhatsAppLink className={triageReady ? "button button-accent full" : "button button-disabled full"} source="triagem" message={triageMessage}>Enviar respostas pelo WhatsApp <span>↗</span></WhatsAppLink>
          </div>
        </section>

        <section className="process-section" id="processo" data-scroll-panel>
          <div className="section-index">04 — Método Envora</div>
          <div className="section-heading section-heading-solo"><h2>Do primeiro contato<br />ao acompanhamento.</h2></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Triagem</h3><p>Atividade, localização, documentos e objetivo da empresa.</p></div></li>
            <li><span>02</span><div><h3>Enquadramento e escopo</h3><p>Rota provável, exigências a confirmar e proposta.</p></div></li>
            <li><span>03</span><div><h3>Elaboração e protocolo</h3><p>Documentos e estudos contratados, revisão e formalização.</p></div></li>
            <li><span>04</span><div><h3>Acompanhamento</h3><p>Tramitação e respostas técnicas dentro do escopo.</p></div></li>
          </ol>
        </section>

        <section className="faq-section" id="faq" data-scroll-panel>
          <div><div className="section-index light">05 — Dúvidas frequentes</div><h2>Antes de contratar<br />uma consultoria ambiental.</h2></div>
          <div className="faq-list">{faqs.map((item, index) => <div className="faq-item" key={item.q}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<b>{faqOpen === index ? "−" : "+"}</b></button>{faqOpen === index && <p>{item.a}</p>}</div>)}</div>
        </section>

        <section className="contact-section" id="contato" data-scroll-panel>
          <div className="contact-copy"><p className="eyebrow">Consultoria ambiental em Joinville</p><h2>O que está impedindo sua empresa de avançar?</h2><p>Envie os dados essenciais. O WhatsApp abre com a mensagem pronta para iniciar a triagem.</p><div className="contact-place"><b>JOINVILLE</b><span>Santa Catarina · Brasil</span></div></div>
          <form onSubmit={submitLead} className="lead-form"><label>Nome<input required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Seu nome" /></label><label>WhatsApp<input required type="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="(47) 99999-9999" /></label><label>Empresa ou atividade<input required value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="Ex.: indústria metalúrgica" /></label><label>Cidade<input required value={lead.city} onChange={(e) => setLead({ ...lead, city: e.target.value })} /></label><button className="button button-accent full" type="submit">Iniciar triagem pelo WhatsApp <span>↗</span></button><small id="privacidade">Os dados são usados apenas para iniciar o atendimento solicitado pelo WhatsApp.</small></form>
        </section>
      </main>

      <footer>
        <div className="footer-brand-panel">
          <a className="brand inverted" href="#inicio" aria-label="Envora Ambiental - início"><img src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" /></a>
        </div>
        <div className="footer-content">
          <p className="footer-lead">Consultoria ambiental em Joinville para empresas.</p>
          <div className="footer-details">
            <span>Joinville · Santa Catarina</span>
            <strong>Eduardo Karnopp</strong>
            <span>Engenheiro Ambiental e Sanitarista</span>
            <a href="tel:+5547984551622" onClick={() => track("phone_click", { source: "footer" })}>(47) 98455-1622</a>
            <a href="mailto:envoraambiental@gmail.com" onClick={() => track("email_click", { source: "footer" })}>envoraambiental@gmail.com</a>
            <a className="instagram-link" href="https://www.instagram.com/envoraambiental/" target="_blank" rel="noopener noreferrer" onClick={() => track("instagram_click", { source: "footer" })}>Instagram · @envoraambiental <span aria-hidden="true">↗</span></a>
            <a className="privacy-text" href="/privacidade">Privacidade</a>
          </div>
        </div>
      </footer>
      <WhatsAppLink className="mobile-sticky" source="mobile_sticky" message={baseMessage}>Falar com a Envora no WhatsApp <span>↗</span></WhatsAppLink>
    </div>
  );
}
