"use client";

import { FormEvent, useMemo, useState } from "react";

const WA_NUMBER = "5547984551622";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function track(event: string, details: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details });
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
  { code: "01", title: "Indústrias", text: "Licenciamento, renovação, condicionantes, resíduos e efluentes para manter a operação em conformidade." },
  { code: "02", title: "Clínicas e saúde", text: "PGRSS, resíduos de serviços de saúde e organização documental para exigências sanitárias." },
  { code: "03", title: "Postos de combustível", text: "Licenciamento, condicionantes, passivos ambientais e conformidade da operação." },
  { code: "04", title: "Construção civil", text: "Canteiro, resíduos, movimentação de solo, supressão e autorizações alinhadas ao cronograma." },
  { code: "05", title: "DANC, CCA e dispensa", text: "Enquadramento técnico da atividade e do porte para identificar a rota administrativa aplicável." },
];

const situations = [
  "Não sei se preciso de licença",
  "Preciso renovar ou verificar condicionantes",
  "Recebi uma exigência ou notificação",
  "Vou iniciar, ampliar ou alterar a operação",
  "Preciso de PGRS, PGRSS ou documento de resíduos",
];

const docsOptions = [
  "Ainda não tenho processo",
  "Tenho licença, certidão ou autorização",
  "Tenho um processo em andamento",
  "Não sei informar",
];

const faqs = [
  { q: "Minha empresa precisa de licença ambiental em Joinville?", a: "Depende da atividade, do porte, da localização e das características da operação. A triagem inicial organiza essas informações para indicar a rota provável e o que precisa ser confirmado." },
  { q: "Qual é a diferença entre DANC, CCA e licença ambiental?", a: "Em linhas gerais, a DANC formaliza que a atividade não consta da listagem sujeita ao licenciamento; a CCA pode se aplicar quando a atividade consta, mas está abaixo do porte; e a licença é exigida quando atividade e porte se enquadram. A conclusão depende da análise de cada caso." },
  { q: "A Envora garante a aprovação do processo?", a: "Não. A decisão cabe ao órgão competente. A Envora prepara a documentação com rigor técnico, reduz falhas evitáveis e acompanha as etapas previstas no escopo contratado." },
  { q: "Quanto tempo leva um processo ambiental?", a: "O prazo varia conforme modalidade, complexidade, documentos, estudos necessários e tempo de análise do órgão. A proposta separa o que depende da consultoria dos fatores externos." },
  { q: "Como começa o atendimento?", a: "Você descreve a atividade e a situação atual. A Envora faz a triagem, solicita os documentos essenciais e apresenta o próximo passo antes de definir o escopo." },
];

export default function EnvoraLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [sector, setSector] = useState("");
  const [situation, setSituation] = useState("");
  const [docs, setDocs] = useState("");
  const [lead, setLead] = useState({ name: "", phone: "", company: "", city: "Joinville" });

  const triageReady = Boolean(sector && situation && docs);
  const triageMessage = useMemo(() =>
    `Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville.\n\nSetor/atividade: ${sector || "não informado"}\nSituação: ${situation || "não informada"}\nDocumentação atual: ${docs || "não informada"}\n\nGostaria de receber uma triagem inicial e entender o próximo passo.`,
  [sector, situation, docs]);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("generate_lead", { source: "contact_form", city: lead.city });
    const message = `Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville.\n\nNome: ${lead.name}\nWhatsApp: ${lead.phone}\nEmpresa/atividade: ${lead.company}\nCidade: ${lead.city}\n\nGostaria de receber uma triagem inicial.`;
    window.open(wa(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Envora - início">ENVORA<span>.</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
          <a href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a>
          <a href="#setores" onClick={() => setMenuOpen(false)}>Setores</a>
          <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        </nav>
        <WhatsAppLink className="button button-small header-cta" source="header" message={baseMessage}>Falar com especialista</WhatsAppLink>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>{menuOpen ? "Fechar" : "Menu"}</button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Consultoria ambiental para empresas · Joinville/SC</p>
            <h1>Consultoria Ambiental em <em>Joinville</em></h1>
            <p className="hero-lead">Regularize sua empresa e mantenha a operação avançando.</p>
            <p className="hero-text">Enquadramento, documentação e acompanhamento técnico com clareza sobre exigências, responsabilidades e próximos passos.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#triagem">Fazer triagem inicial <span>↗</span></a>
              <WhatsAppLink className="text-link" source="hero" message={baseMessage}>Falar direto no WhatsApp <span>→</span></WhatsAppLink>
            </div>
            <div className="hero-proof" aria-label="Diferenciais"><span>Base em Joinville</span><span>Atendimento técnico direto</span><span>ART quando aplicável</span></div>
          </div>
          <div className="hero-visual" role="img" aria-label="Vista aérea de área industrial">
            <div className="technical-tag"><b>TRIAGEM 01</b><span>atividade</span><span>porte</span><span>localização</span></div>
            <div className="hero-caption"><span>Leitura técnica antes do protocolo</span><b>Menos incerteza.<br />Mais controle.</b></div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Credenciais">
          <div><small>01</small><b>Atendimento local</b><span>Joinville e região</span></div>
          <div><small>02</small><b>Experiência prática</b><span>Licenciamento municipal</span></div>
          <div><small>03</small><b>Formação técnica</b><span>Engenharia Ambiental e Sanitária</span></div>
          <div><small>04</small><b>Escopo transparente</b><span>Etapas e responsabilidades definidas</span></div>
        </section>

        <section className="intro-section" id="solucoes">
          <div className="section-index">01 — Soluções</div>
          <div className="section-heading"><h2>Clareza para decidir<br />antes de protocolar.</h2><p>A contratação começa pelo entendimento da atividade e da situação atual — não por uma lista genérica de documentos.</p></div>
          <div className="service-lines">
            {[
              ["Enquadramento ambiental", "Atividade, porte, localização e contexto da operação."],
              ["Licenças e autorizações", "Preparação documental, protocolo e acompanhamento."],
              ["DANC e CCA", "Análise da listagem e do porte aplicável."],
              ["Resíduos e condicionantes", "PGRS, PGRSS e organização das obrigações."],
            ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="sectors-section" id="setores">
          <div className="section-index light">02 — Setores atendidos</div>
          <div className="sectors-head"><h2>Cada operação exige<br />uma leitura própria.</h2><p>Demandas organizadas por setor, sem pacotes genéricos.</p></div>
          <div className="sector-list">
            {sectors.map((item) => (
              <WhatsAppLink key={item.code} className="sector-row" source={`setor_${item.title}`} message={`Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Meu setor é ${item.title} e gostaria de uma triagem inicial.`}>
                <span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p><b>↗</b>
              </WhatsAppLink>
            ))}
          </div>
        </section>

        <section className="triage-section" id="triagem">
          <div className="triage-copy">
            <div className="section-index">03 — Triagem inicial</div>
            <h2>Explique o cenário<br />em menos de 1 minuto.</h2>
            <p>As respostas iniciam a conversa com contexto. A indicação final depende da análise técnica e dos documentos aplicáveis.</p>
            <div className="triage-output"><span>Ao final você solicita</span><b>Rota inicial provável</b><b>Documentos a conferir</b><b>Próximo passo recomendado</b></div>
          </div>
          <div className="triage-form">
            <fieldset><legend><span>01</span> Qual é o setor ou atividade?</legend><select value={sector} onChange={(e) => setSector(e.target.value)}><option value="">Selecione uma opção</option>{["Indústria", "Clínica ou serviço de saúde", "Posto de combustível", "Construção civil", "Comércio ou serviço", "Outra atividade"].map((item) => <option key={item}>{item}</option>)}</select></fieldset>
            <fieldset><legend><span>02</span> O que descreve a situação?</legend><div className="choice-grid">{situations.map((item) => <button className={situation === item ? "selected" : ""} type="button" key={item} onClick={() => setSituation(item)}>{item}</button>)}</div></fieldset>
            <fieldset><legend><span>03</span> Situação documental atual?</legend><div className="choice-grid two">{docsOptions.map((item) => <button className={docs === item ? "selected" : ""} type="button" key={item} onClick={() => setDocs(item)}>{item}</button>)}</div></fieldset>
            <WhatsAppLink className={triageReady ? "button button-accent full" : "button button-disabled full"} source="triagem" message={triageMessage}>Enviar respostas pelo WhatsApp <span>↗</span></WhatsAppLink>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="section-index">04 — Método Envora</div>
          <div className="section-heading"><h2>Do primeiro contato<br />ao acompanhamento.</h2><p>Um processo legível, com entregas e responsabilidades definidas.</p></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Triagem</h3><p>Atividade, localização, documentos e objetivo da empresa.</p></div></li>
            <li><span>02</span><div><h3>Enquadramento e escopo</h3><p>Rota provável, exigências a confirmar e proposta.</p></div></li>
            <li><span>03</span><div><h3>Elaboração e protocolo</h3><p>Documentos e estudos contratados, revisão e formalização.</p></div></li>
            <li><span>04</span><div><h3>Acompanhamento</h3><p>Tramitação e respostas técnicas dentro do escopo.</p></div></li>
          </ol>
          <p className="ethics-note"><b>Transparência:</b> a Envora não promete aprovação nem prazo controlado pelo órgão público. O compromisso é com rigor técnico, comunicação clara e execução do escopo contratado.</p>
        </section>

        <section className="faq-section" id="faq">
          <div><div className="section-index light">05 — Dúvidas frequentes</div><h2>Antes de contratar<br />uma consultoria ambiental.</h2></div>
          <div className="faq-list">{faqs.map((item, index) => <div className="faq-item" key={item.q}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<b>{faqOpen === index ? "−" : "+"}</b></button>{faqOpen === index && <p>{item.a}</p>}</div>)}</div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-copy"><p className="eyebrow">Consultoria ambiental em Joinville</p><h2>O que está impedindo sua empresa de avançar?</h2><p>Envie os dados essenciais. O WhatsApp abre com a mensagem pronta para iniciar a triagem.</p><div className="contact-place"><b>JOINVILLE</b><span>Santa Catarina · Brasil</span></div></div>
          <form onSubmit={submitLead} className="lead-form"><label>Nome<input required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Seu nome" /></label><label>WhatsApp<input required type="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="(47) 99999-9999" /></label><label>Empresa ou atividade<input required value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="Ex.: indústria metalúrgica" /></label><label>Cidade<input required value={lead.city} onChange={(e) => setLead({ ...lead, city: e.target.value })} /></label><button className="button button-accent full" type="submit">Iniciar triagem pelo WhatsApp <span>↗</span></button><small id="privacidade">Os dados são usados apenas para iniciar o atendimento solicitado pelo WhatsApp.</small></form>
        </section>
      </main>

      <footer><a className="brand inverted" href="#inicio">ENVORA<span>.</span></a><p>Consultoria ambiental em Joinville para empresas.</p><div><span>Joinville · Santa Catarina</span><span>Responsabilidade técnica e ART conforme o escopo aplicável.</span><a href="#privacidade">Privacidade</a></div><small>Fotografia: Azli Nawawi / Pexels</small></footer>
      <WhatsAppLink className="mobile-sticky" source="mobile_sticky" message={baseMessage}>Falar com a Envora no WhatsApp <span>↗</span></WhatsAppLink>
    </div>
  );
}
