"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import HeroBackgroundVideo from "./hero-background-video";
import { trackWhatsAppClickConversion } from "./google-ads-events";

const WA_NUMBER = "5547984551622";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
  }
}

function track(event: string, details: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details });
}

function trackWhatsAppClick(source: string) {
  track("whatsapp_click", { source });
  trackWhatsAppClickConversion();
}

function wa(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppMark() {
  return (
    <span className="whatsapp-mark" aria-hidden="true">
      <svg viewBox="0 0 28 28" focusable="false">
        <path d="M14 4.1a9.7 9.7 0 0 0-8.3 14.7l-1.3 4.7 4.8-1.3A9.7 9.7 0 1 0 14 4.1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.3 9.3c.3-.3.6-.4.9-.4h.7c.2 0 .5.1.6.5l1 2.1c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.7.5.9 1.2 1.6 2 2.1.3.2.5.2.7 0l.7-.7c.2-.2.4-.2.7-.1l2.1 1c.3.1.4.4.4.6 0 .3-.2 1-.6 1.4-.4.4-1.1.7-1.8.6-1.6-.2-3.4-1.2-5-2.6-1.4-1.3-2.5-3-2.7-4.4-.1-.9.2-1.7.7-2.2Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function WhatsAppLink({ children, message, source, className = "" }: {
  children: React.ReactNode;
  message: string;
  source: string;
  className?: string;
}) {
  return <a className={className} href={wa(message)} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick(source)}>{children}</a>;
}

function ServiceGroupMark({ group }: { group: string }) {
  return (
    <span className="service-group-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" focusable="false">
        {group === "licenciamento" && <>
          <path d="M11 4h12l9 9v23H11a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm11 3v8h8" fill="currentColor" />
          <path d="M14 21h13M14 26h13M14 31h9" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" />
        </>}
        {group === "vegetacao" && <>
          <path d="M33.5 5.5C20.2 5.3 8 11.2 6.6 23.1c-.8 6.7 3.1 11.4 9.2 11.4 12.6 0 19-14.2 17.7-29Z" fill="currentColor" />
          <path d="M10 33 28.5 12.1" fill="none" stroke="var(--paper)" strokeWidth="2.2" strokeLinecap="round" />
        </>}
        {group === "residuos" && <>
          <path d="M13 12h14l-1.2 23H14.2L13 12Zm-2-3h18l1 3H10l1-3Zm5-4h8l1 3h-10l1-3Z" fill="currentColor" />
          <path d="M18 17v13M22 17v13" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" />
        </>}
        {group === "autos" && <>
          <path d="M20 4.5c1.1 0 2 .6 2.6 1.6l14.1 24.4c1.2 2.1-.3 4.8-2.7 4.8H6c-2.4 0-3.9-2.7-2.7-4.8L17.4 6.1c.6-1 1.5-1.6 2.6-1.6Z" fill="currentColor" />
          <path d="M20 14v9" fill="none" stroke="var(--paper)" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="20" cy="28" r="1.6" fill="var(--paper)" />
        </>}
      </svg>
    </span>
  );
}

function ServiceMark({ code }: { code: string }) {
  const icons: Record<string, React.ReactNode> = {
    "01": <><path d="M12 3 22 20H2L12 3Z" /><path d="M12 9v5m0 3h.01" /></>,
    "02": <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5M8 12l2-2 2 2 2-3" /></>,
    "03": <><path d="M6 3.5h8l4 4V20.5H6z" /><path d="M14 3.5v4h4M9 12h6m-6 3h3" /></>,
    "04": <><path d="M12 3.5 14.4 5l2.9-.2 1.3 2.6 2.5 1.5-.6 2.8.6 2.8-2.5 1.5-1.3 2.6-2.9-.2-2.4 1.5-2.4-1.5-2.9.2-1.3-2.6-2.5-1.5.6-2.8-.6-2.8 2.5-1.5 1.3-2.6 2.9.2L12 3.5Z" /><path d="m9 12 2 2 4-4" /></>,
    "05": <><path d="M6 3.5h8l4 4V20.5H6z" /><path d="M14 3.5v4h4m-9 5 2 2 4-4" /></>,
    "06": <><path d="M5 5h11v14H5zM8 2.5h11v14" /><path d="M8 9h5m-5 3h5m-5 3h3" /></>,
    "07": <><path d="M8 4.5H5v16h14v-7" /><path d="M9 4.5h6v3H9zM9 12h6m-6 4h4m1-9 2 2 4-4" /></>,
    "08": <><path d="M20 7V3m0 4h-4" /><path d="M20 7a8.5 8.5 0 1 0 1 8" /><path d="M12 7v5l3 2" /></>,
    "09": <><path d="m4 7 1.5 1.5L8 6m3 1h9M4 14l1.5 1.5L8 13m3 1h9M4 21l1.5 1.5L8 20m3 1h9" /></>,
    "10": <><path d="M20.5 3.5C11 3.8 5.1 7.4 4 14.1c-.7 4.1 1.5 6.4 5 6.4 7.3 0 11.7-7.4 11.5-17Z" /><path d="M4 21 16 8" /></>,
    "11": <><path d="M12 21v-8m0 2c-4.5 0-7-2.7-7-6.5 4.7 0 7 2.1 7 6.5Zm0-3c0-4.4 2.5-7 7-7 0 3.9-2.6 7-7 7Z" /></>,
    "12": <><path d="M12 21V9m0 4c-3.2 0-5-1.8-5-4.5 3.3 0 5 1.4 5 4.5Zm0-2c0-3.4 2-5.5 5-5.5 0 3.1-1.8 5.5-5 5.5Z" /><path d="M8 21h8" /></>,
    "13": <><path d="M6 4h12v17H6zM9 8h6m-6 4h6m-6 4h4" /><path d="M9 2h6" /></>,
    "14": <><path d="M3 7h11v10H3zM14 11h4l3 3v3h-7z" /><circle cx="7" cy="19" r="1.5" /><circle cx="18" cy="19" r="1.5" /></>,
    "15": <><path d="M3 12h2l2-5 3 10 3-13 3 16 2-8 2 3h2" /></>,
    "16": <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20zM16 11l2 2 4-5" /></>,
    "17": <><path d="M12 3.5S5.5 11 5.5 15.5a6.5 6.5 0 0 0 13 0C18.5 11 12 3.5 12 3.5Z" /><path d="M9 16a3 3 0 0 0 3 3" /></>,
  };

  return (
    <span className="service-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        {icons[code] ?? icons["03"]}
      </svg>
    </span>
  );
}

function SectorMark({ sector }: { sector: string }) {
  return (
    <span className="sector-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {sector === "industry" && <>
          <path d="M4.5 27V14l7 4v-5l7 5V9l9 5v13H4.5Z" />
          <path d="M7 14V6h4v10M10 22h.01M16 22h.01M22 22h.01" />
        </>}
        {sector === "health" && <>
          <rect x="5.5" y="5" width="21" height="22" rx="2" />
          <path d="M16 10v12M10 16h12" />
        </>}
        {sector === "fuel" && <>
          <path d="M6 27V6.5h13V27M9.5 10h6v6h-6zM19 12h3l3 3v8a2 2 0 0 1-4 0v-4" />
          <path d="M4.5 27h22" />
        </>}
        {sector === "construction" && <>
          <path d="M4 8h24M8 8v19M6 27h22M8 8l4-4h13l3 4M20 4v4M16 8l8 8M13 17h9v10" />
        </>}
        {sector === "commerce" && <>
          <path d="m6 13 2-7h16l2 7M6 13v14h20V13M4.5 13a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
          <path d="M12 27v-8h8v8" />
        </>}
      </svg>
    </span>
  );
}

const baseMessage = "Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville e gostaria de explicar minha situação.";

const sectors = [
  { icon: "industry", title: "Indústrias", text: "Licenciamento · resíduos · ruído" },
  { icon: "health", title: "Clínicas e saúde", text: "PGRSS · resíduos · destinação" },
  { icon: "fuel", title: "Postos de combustível", text: "Licenciamento · renovação" },
  { icon: "construction", title: "Construção civil", text: "PGRCC · destinação" },
  { icon: "commerce", title: "Comércios e serviços", text: "DANC · CCA · acústica" },
];

const services = [
  { code: "01", group: "autos", title: "Autos de infração e exigências ambientais", href: "/servicos/auto-de-infracao-ambiental" },
  { code: "02", group: "licenciamento", title: "Diagnóstico e enquadramento ambiental", href: "/servicos/diagnostico-e-enquadramento-ambiental" },
  { code: "03", group: "licenciamento", title: "DANC · Declaração de Atividade Não Constante", href: "/servicos/danc" },
  { code: "04", group: "licenciamento", title: "CCA · Certidão de Conformidade Ambiental", href: "/servicos/cca" },
  { code: "05", group: "licenciamento", title: "Licenciamento ambiental", href: "/servicos/licenciamento-ambiental" },
  { code: "06", group: "licenciamento", title: "Licença prévia, de instalação e de operação (LAP, LAI e LAO)", href: "/servicos/lap-lai-lao" },
  { code: "07", group: "licenciamento", title: "Autorização Ambiental (AuA)", href: "/servicos/autorizacao-ambiental-aua" },
  { code: "08", group: "licenciamento", title: "Renovação e regularização", href: "/servicos/renovacao-e-regularizacao" },
  { code: "09", group: "licenciamento", title: "Gestão de condicionantes", href: "/servicos/gestao-de-condicionantes" },
  { code: "10", group: "vegetacao", title: "Autorização para Corte de Vegetação (AuC)", href: "/servicos/autorizacao-corte-vegetacao-auc" },
  { code: "11", group: "vegetacao", title: "Projeto de Recuperação de Área Degradada (PRAD)", href: "/servicos/projeto-recuperacao-area-degradada-prad" },
  { code: "12", group: "vegetacao", title: "Autorização para Corte de Árvores Isoladas (CAI)", href: "/servicos/autorizacao-corte-arvores-isoladas-cai" },
  { code: "13", group: "residuos", title: "Planos de gerenciamento de resíduos · PGRS, PGRSS e PGRCC", href: "/servicos/planos-de-gerenciamento-de-residuos" },
  { code: "14", group: "residuos", title: "MTR e documentação de resíduos", href: "/servicos/mtr-e-documentacao-de-residuos" },
  { code: "15", group: "residuos", title: "Laudo e controle acústico", href: "/servicos/laudo-e-controle-acustico" },
  { code: "16", group: "licenciamento", title: "Responsabilidade Técnica Ambiental (RT)", href: "/servicos/responsabilidade-tecnica-ambiental" },
  { code: "17", group: "licenciamento", title: "Outorga e regularização de poços/uso da água", href: "/servicos/outorga-e-regularizacao-de-uso-da-agua" },
];

const serviceGroups = [
  { id: "licenciamento", title: "Licenciamento e regularização" },
  { id: "vegetacao", title: "Vegetação" },
  { id: "residuos", title: "Resíduos e controle técnico" },
  { id: "autos", title: "Autos e exigências" },
].map((group) => ({ ...group, items: services.filter((service) => service.group === group.id) }));

const situations = [
  "Não sei se preciso de licença",
  "Preciso renovar ou verificar condicionantes",
  "Recebi um auto de infração ou exigência",
  "Vou iniciar, ampliar ou alterar a operação",
  "Preciso de PGRS, PGRSS, PGRCC ou documento de resíduos",
  "Preciso de laudo ou controle acústico",
  "Outra situação",
];

const faqs = [
  { q: "Recebi um auto de infração ambiental. O que faço?", a: "Confira quem emitiu, o prazo e o que foi solicitado. A Envora pode organizar a resposta técnica e as providências ambientais contratadas. Questões jurídicas devem ser tratadas com advogado." },
  { q: "Minha empresa precisa de licença ambiental em Joinville?", a: "Depende da atividade, do porte, da localização e da operação. A triagem indica o enquadramento provável e o que precisa ser confirmado." },
  { q: "Qual é a diferença entre DANC, CCA e licença ambiental?", a: "Em geral, a DANC se aplica a atividade fora da listagem sujeita a licenciamento; a CCA, a atividade listada abaixo do porte licenciável; e a licença, quando atividade e porte se enquadram. A conclusão depende do caso." },
  { q: "A Envora garante a aprovação do processo?", a: "Não. A decisão é do órgão competente. A Envora prepara a documentação e acompanha as etapas previstas na contratação." },
  { q: "Quanto tempo leva um processo ambiental?", a: "Varia conforme a modalidade, a complexidade, os documentos e o tempo de análise do órgão. A proposta separa o que cabe à consultoria dos fatores externos." },
  { q: "Como começa o atendimento?", a: "Você informa a atividade e a situação. A Envora faz a triagem, pede os documentos essenciais e apresenta o próximo passo antes de definir o escopo." },
];

export default function EnvoraLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [sector, setSector] = useState("");
  const [situation, setSituation] = useState("");
  const [otherSituation, setOtherSituation] = useState("");

  const situationDetail = situation === "Outra situação"
    ? `Outra situação — ${otherSituation.trim() || "não descrita"}`
    : situation;
  const triageReady = Boolean(sector && situation && (situation !== "Outra situação" || otherSituation.trim()));
  const triageMessage = useMemo(() =>
    `Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville.\n\nSetor/atividade: ${sector || "não informado"}\nSituação: ${situationDetail || "não informada"}\n\nGostaria de explicar minha situação e entender o próximo passo.`,
  [sector, situationDetail]);

  useEffect(() => {
    const navigationSections = ["inicio", "institucional", "solucoes", "setores", "triagem", "faq"];
    let frame = 0;
    let isMounted = true;
    const sections = navigationSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    function updateActiveSection() {
      const headerHeight = document.querySelector<HTMLElement>(".topbar")?.offsetHeight ?? 88;
      const readingLine = headerHeight + 24;
      const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= readingLine);
      let current = passedSections[passedSections.length - 1]?.id ?? "inicio";
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = navigationSections[navigationSections.length - 1];
      }
      if (isMounted) setActiveSection(current);
    }

    function onScroll() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    }

    const resizeObserver = new ResizeObserver(onScroll);
    sections.forEach((section) => resizeObserver.observe(section));
    onScroll();
    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(updateActiveSection);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    window.addEventListener("popstate", onScroll);
    window.addEventListener("pageshow", onScroll);
    window.addEventListener("load", onScroll);
    return () => {
      isMounted = false;
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
      window.removeEventListener("popstate", onScroll);
      window.removeEventListener("pageshow", onScroll);
      window.removeEventListener("load", onScroll);
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
    let restoreScrollBehavior: (() => void) | null = null;

    function animateScrollTo(target: number) {
      window.cancelAnimationFrame(scrollAnimationFrame);
      restoreScrollBehavior?.();

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      restoreScrollBehavior = () => {
        root.style.scrollBehavior = previousScrollBehavior;
        restoreScrollBehavior = null;
      };

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
        if (progress < 1) {
          scrollAnimationFrame = window.requestAnimationFrame(step);
        } else {
          restoreScrollBehavior?.();
          scrollAnimationFrame = 0;
        }
      }

      scrollAnimationFrame = window.requestAnimationFrame(step);
    }

    function onWheel(event: WheelEvent) {
      if (!desktopPointer.matches || reducedMotion.matches || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const target = event.target as Element | null;
      if (target?.closest("input, select, textarea, [contenteditable='true']")) return;

      const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-panel]"));
      if (!panels.length) return;

      const headerOffset = document.querySelector<HTMLElement>(".topbar")?.offsetHeight ?? 88;
      const direction = Math.sign(event.deltaY);
      const current = window.scrollY;
      if (!direction) return;

      const naturalPanel = panels.find((panel) => {
        if (!panel.hasAttribute("data-scroll-natural")) return false;
        const start = Math.max(0, panel.offsetTop - headerOffset);
        const end = Math.max(start, panel.offsetTop + panel.offsetHeight - window.innerHeight);
        return current >= start && current <= end;
      });

      if (naturalPanel) {
        const start = Math.max(0, naturalPanel.offsetTop - headerOffset);
        const end = Math.max(start, naturalPanel.offsetTop + naturalPanel.offsetHeight - window.innerHeight);
        const edgeThreshold = Math.max(40, Math.min(120, Math.abs(event.deltaY)));
        const roomToScrollNaturally = direction > 0
          ? end - current > edgeThreshold
          : current - start > edgeThreshold;

        if (roomToScrollNaturally) return;
      }

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
        if (panel.hasAttribute("data-scroll-natural")) return [start, end];
        if (end - start <= 40) return [start];
        const panelStops = [start];
        for (let stop = start + viewportStep; stop < end - 40; stop += viewportStep) panelStops.push(stop);
        panelStops.push(end);
        return panelStops;
      }).filter((stop, index, all) => index === 0 || Math.abs(stop - all[index - 1]) > 4);
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
      restoreScrollBehavior?.();
    };
  }, []);

  return (
    <div className="site-shell">
      <header className={`topbar${activeSection === "inicio" && !menuOpen ? " on-hero" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Envora Ambiental - início"><img src={activeSection === "inicio" && !menuOpen ? "/envora-logo-horizontal-dark.svg" : "/envora-logo-horizontal.svg"} alt="Envora Ambiental" /></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
          <a className={activeSection === "inicio" || activeSection === "institucional" ? "active" : ""} aria-current={activeSection === "inicio" || activeSection === "institucional" ? "location" : undefined} href="#institucional" onClick={() => selectSection("institucional")}>Envora</a>
          <a className={activeSection === "solucoes" ? "active" : ""} aria-current={activeSection === "solucoes" ? "location" : undefined} href="#solucoes" onClick={() => selectSection("solucoes")}>Serviços</a>
          <a className={activeSection === "setores" ? "active" : ""} aria-current={activeSection === "setores" ? "location" : undefined} href="#setores" onClick={() => selectSection("setores")}>Setores</a>
          <a className={activeSection === "triagem" ? "active" : ""} aria-current={activeSection === "triagem" ? "location" : undefined} href="#triagem" onClick={() => selectSection("triagem")}>Triagem</a>
          <a className={activeSection === "faq" ? "active" : ""} aria-current={activeSection === "faq" ? "location" : undefined} href="#faq" onClick={() => selectSection("faq")}>Dúvidas</a>
        </nav>
        <WhatsAppLink className="button button-small header-cta" source="header" message={baseMessage}>Falar com especialista <WhatsAppMark /></WhatsAppLink>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>{menuOpen ? "Fechar" : "Menu"}</button>
      </header>

      <main>
        <section className="hero hero-home" id="inicio" data-scroll-panel>
          <HeroBackgroundVideo />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Consultoria Ambiental · Joinville</p>
            <h1>
              <span className="hero-headline-line">Você explica o que precisa.</span>
              <span className="hero-headline-line hero-headline-accent">A Envora conduz a parte técnica.</span>
            </h1>
            <p className="hero-text hero-summary hero-services">Licenciamento, regularização e gestão de resíduos.</p>
            <div className="hero-actions">
              <WhatsAppLink className="button hero-primary" source="hero_whatsapp" message={baseMessage}>Falar no WhatsApp <WhatsAppMark /></WhatsAppLink>
              <a
                className="text-link hero-secondary"
                href="#triagem"
                onClick={(event) => {
                  event.preventDefault();
                  selectSection("triagem");
                  track("triage_start", { source: "hero" });
                  scrollToSection("triagem");
                }}
              >Fazer triagem inicial <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="institutional-section" id="institucional" data-scroll-panel aria-labelledby="institutional-title">
          <div className="institutional-intro">
            <div className="section-index">01 — Envora</div>
            <h2 id="institutional-title">Experiência em licenciamento ambiental.</h2>
          </div>
          <div className="institutional-visual" aria-label="Experiência e atuação da Envora">
            <div className="institutional-years">
              <span>EXPERIÊNCIA PROFISSIONAL</span>
              <strong>05</strong>
              <b>anos de experiência</b>
            </div>
            <div className="institutional-facts">
              <div><span>01 / ATUAÇÃO</span><b>Licenciamento municipal</b></div>
              <div><span>02 / EXPERIÊNCIA</span><b>Operações industriais e infraestrutura</b></div>
              <div><span>03 / FORMAÇÃO</span><b>Engenharia Ambiental e Sanitária</b></div>
              <div><span>BASE</span><b>Joinville · SC</b></div>
            </div>
          </div>
        </section>

        <section className="intro-section" id="solucoes" data-scroll-panel data-scroll-natural>
          <div className="section-index">02 — Serviços</div>
          <div className="section-heading section-heading-solo"><h2>Serviços ambientais<br />para sua atividade.</h2></div>
          <div className="service-categories">
            {serviceGroups.map((group) => (
              <section key={group.id} id={`service-group-${group.id}`} className="service-category" aria-labelledby={`service-category-${group.id}`}>
                <div className="service-category-heading">
                  <div className="service-group-title">
                    <ServiceGroupMark group={group.id} />
                    <h3 id={`service-category-${group.id}`}>{group.title}</h3>
                  </div>
                  <WhatsAppLink className="button service-contact-button service-contact-button-mobile" source={`servicos_${group.id}`} message={`Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Tenho uma demanda de ${group.title.toLowerCase()} e gostaria de explicar minha situação.`}>Falar no WhatsApp <WhatsAppMark /></WhatsAppLink>
                </div>
                <div className="service-grid">
                  {group.items.map((service) => {
                    const cardContent = <><ServiceMark code={service.code} /><h3>{service.title}</h3></>;
                    const className = "service-card";
                    return service.href
                      ? <Link key={service.code} className={className} href={service.href}>{cardContent}</Link>
                      : <WhatsAppLink key={service.code} className={className} source={`servico_${service.title}`} message={`Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Preciso de informações sobre ${service.title}.`}>{cardContent}</WhatsAppLink>;
                  })}
                </div>
              </section>
            ))}
          </div>
          <WhatsAppLink className="button service-contact-button service-contact-button-desktop" source="servicos_geral" message="Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Gostaria de explicar minha demanda e entender como vocês podem me ajudar.">Falar com a Envora <WhatsAppMark /></WhatsAppLink>
        </section>

        <section className="sectors-section" id="setores" data-scroll-panel>
          <div className="section-index">03 — Setores</div>
          <div className="sectors-head sectors-head-solo"><h2>Áreas de atuação</h2></div>
          <div className="sector-list">
            {sectors.map((item) => (
              <WhatsAppLink key={item.icon} className="sector-card" source={`setor_${item.title}`} message={`Olá, encontrei a Envora pesquisando por consultoria ambiental em Joinville. Meu setor é ${item.title} e gostaria de uma triagem inicial.`}>
                <span className="sector-card-heading"><SectorMark sector={item.icon} /><h3>{item.title}</h3></span>
                <p>{item.text}</p>
              </WhatsAppLink>
            ))}
          </div>
        </section>

        <section className="triage-section" id="triagem" data-scroll-panel>
          <div className="triage-copy">
            <div className="section-index">04 — Triagem inicial</div>
            <h2>Explique o cenário<br />em poucos toques.</h2>
            <div className="triage-output"><span>Após a triagem</span><b>Enquadramento inicial · próximo passo</b></div>
          </div>
          <div className="triage-form">
            <fieldset><legend><span>01</span> Qual é o setor ou atividade?</legend><label className="field-label" htmlFor="triage-sector">Selecione o setor ou a atividade</label><select id="triage-sector" name="sector" value={sector} onChange={(e) => setSector(e.target.value)}><option value="">Selecione uma opção</option>{["Indústria", "Clínica ou serviço de saúde", "Posto de combustível", "Construção civil", "Comércio ou serviço", "Outra atividade"].map((item) => <option key={item}>{item}</option>)}</select></fieldset>
            <fieldset>
              <legend><span>02</span> O que descreve a situação?</legend>
              <label className="field-label" htmlFor="triage-situation">Selecione a situação ambiental atual</label>
              <select
                id="triage-situation"
                name="situation"
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
                <label className="other-situation" htmlFor="triage-other-situation">
                  Descreva brevemente a situação
                  <textarea
                    id="triage-other-situation"
                    name="otherSituation"
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
            <WhatsAppLink className={triageReady ? "button button-accent full" : "button button-disabled full"} source="triagem" message={triageMessage}>Explicar minha situação no WhatsApp <span>↗</span></WhatsAppLink>
          </div>
        </section>

        <section className="faq-section" id="faq" data-scroll-panel>
          <div><div className="section-index light">05 — Dúvidas frequentes</div><h2>Antes de contratar<br />uma consultoria ambiental.</h2></div>
          <div className="faq-list">{faqs.map((item, index) => <div className="faq-item" key={item.q}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<b>{faqOpen === index ? "−" : "+"}</b></button>{faqOpen === index && <p>{item.a}</p>}</div>)}</div>
        </section>

      </main>

      <footer className="site-footer" data-scroll-panel aria-label="Informações da Envora">
        <div className="site-footer-brand">
          <a className="brand inverted" href="#inicio" aria-label="Envora Ambiental - início"><img src="/envora-logo-horizontal-dark.svg" alt="Envora Ambiental" /></a>
          <p>Consultoria ambiental para orientar decisões e conduzir processos.</p>
          <div className="site-footer-socials" aria-label="Canais da Envora">
            <a className="site-footer-social" href="https://www.instagram.com/envoraambiental/" target="_blank" rel="noopener noreferrer" onClick={() => track("instagram_click", { source: "footer" })} aria-label="Instagram da Envora Ambiental">
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
            </a>
            <a className="site-footer-social" href={wa(baseMessage)} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("footer_social")} aria-label="WhatsApp da Envora">
              <WhatsAppMark />
            </a>
          </div>
        </div>

        <nav className="site-footer-column" aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          <a href="#institucional">Envora</a>
          <a href="#solucoes">Serviços</a>
          <a href="#setores">Setores</a>
          <a href="#triagem">Triagem</a>
          <a href="#faq">Dúvidas</a>
          <Link href="/conteudos">Blog</Link>
        </nav>

        <nav className="site-footer-column" aria-label="Serviços ambientais">
          <h2>Serviços</h2>
          {serviceGroups.map((group) => <a key={group.id} href={`#service-group-${group.id}`}>{group.title}</a>)}
          <Link href="/servicos/responsabilidade-tecnica-ambiental">Responsabilidade Técnica Ambiental</Link>
          <Link href="/servicos/outorga-e-regularizacao-de-uso-da-agua">Outorga e uso da água</Link>
          <a href="#solucoes">Todos os serviços</a>
        </nav>

        <div className="site-footer-column site-footer-contact">
          <h2>Contato</h2>
          <a href={wa(baseMessage)} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("footer_contact")}>WhatsApp</a>
          <a href="tel:+5547984551622" onClick={() => track("phone_click", { source: "footer" })}>(47) 98455-1622</a>
          <a href="mailto:envoraambiental@gmail.com" onClick={() => track("email_click", { source: "footer" })}>envoraambiental@gmail.com</a>
          <span>Joinville · Santa Catarina</span>
          <span>Engenheiro Ambiental e Sanitarista</span>
        </div>

        <div className="site-footer-bottom">
          <p>© 2026 Envora Consultoria Ambiental. Todos os direitos reservados.</p>
          <a href="/privacidade">Privacidade</a>
          <span>Joinville · SC</span>
        </div>
      </footer>
      <WhatsAppLink className="mobile-sticky" source="mobile_sticky" message={baseMessage}>Falar com a Envora no WhatsApp <span>↗</span></WhatsAppLink>
    </div>
  );
}
