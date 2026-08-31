"use client";

import Image from "next/image";
import styles from "./links.module.css";

const WHATSAPP_URL =
  "https://wa.me/5547984551622?text=Ol%C3%A1%2C%20encontrei%20a%20Envora%20pelo%20Instagram%20e%20gostaria%20de%20conversar%20sobre%20uma%20demanda%20ambiental.";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    envoraGoogleAdsConversionTarget?: string;
  }
}

function recordClick(channel: "whatsapp" | "site" | "email") {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "links_hub_click", channel });

  if (channel === "whatsapp" && window.gtag && window.envoraGoogleAdsConversionTarget) {
    window.gtag("event", "conversion", {
      send_to: window.envoraGoogleAdsConversionTarget,
      event_callback: () => undefined,
      event_timeout: 1500,
    });
  }
}

const links = [
  {
    label: "WhatsApp",
    detail: "Falar com a Envora",
    href: WHATSAPP_URL,
    channel: "whatsapp" as const,
    external: true,
  },
  {
    label: "Site",
    detail: "Conhecer a consultoria",
    href: "/",
    channel: "site" as const,
    external: false,
  },
  {
    label: "E-mail",
    detail: "envoraambiental@gmail.com",
    href: "mailto:envoraambiental@gmail.com?subject=Contato%20pelo%20Instagram",
    channel: "email" as const,
    external: false,
  },
];

export default function LinksHub() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="links-title">
        <header className={styles.header}>
          <Image
            className={styles.logo}
            src="/envora-logo-horizontal.svg"
            alt="Envora Ambiental"
            width={360}
            height={88}
            priority
          />
          <p id="links-title">Consultoria ambiental para empresas em Joinville e região.</p>
        </header>

        <nav className={styles.links} aria-label="Canais oficiais da Envora">
          {links.map((link, index) => (
            <a
              className={`${styles.link} ${index === 0 ? styles.primary : ""}`}
              href={link.href}
              key={link.channel}
              onClick={() => recordClick(link.channel)}
              rel={link.external ? "noopener noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              <span className={styles.number}>0{index + 1}</span>
              <span className={styles.copy}>
                <strong>{link.label}</strong>
                <small>{link.detail}</small>
              </span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className={styles.footer}>
          <span>Joinville · Santa Catarina</span>
          <span>Envora Consultoria Ambiental</span>
        </div>
      </section>
    </main>
  );
}
