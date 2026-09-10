"use client";

import type { CSSProperties } from "react";

const WA_NUMBER = "5547984551622";

export default function ServiceWhatsAppLink({ service, className, children, style, situation, placement }: {
  service: string;
  className: string;
  children: React.ReactNode;
  style?: CSSProperties;
  situation?: string;
  placement?: string;
}) {
  const message = `Olá, gostaria de conversar com a Envora sobre ${service} em Joinville.${situation ? ` Minha situação: ${situation}.` : " Gostaria de explicar minha situação."}`;
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  function trackClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", source: `pagina_servico_${service}`, situation: situation ?? "nao_informada", placement: placement ?? "service", page_path: window.location.pathname });
    if (window.gtag && window.envoraGoogleAdsConversionTarget) {
      window.gtag("event", "conversion", {
        send_to: window.envoraGoogleAdsConversionTarget,
        event_callback: () => undefined,
        event_timeout: 1500,
      });
    }
  }

  return <a className={className} style={style} href={href} target="_blank" rel="noreferrer" onClick={trackClick}>{children}</a>;
}
