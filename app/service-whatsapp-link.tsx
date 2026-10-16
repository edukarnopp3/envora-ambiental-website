"use client";

import type { CSSProperties } from "react";
import { trackWhatsAppClickConversion } from "./google-ads-events";

const WA_NUMBER = "5547984551622";

export default function ServiceWhatsAppLink({ service, className, children, style, situation, placement, contextPrompt }: {
  service: string;
  className: string;
  children: React.ReactNode;
  style?: CSSProperties;
  situation?: string;
  placement?: string;
  contextPrompt?: string;
}) {
  const message = `Olá, gostaria de conversar com a Envora sobre ${service} em Joinville e região.${situation ? ` Minha situação: ${situation}.` : " Gostaria de explicar minha situação."}${contextPrompt ? `\n${contextPrompt}` : ""}`;
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  function trackClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", source: `pagina_servico_${service}`, situation: situation ?? "nao_informada", placement: placement ?? "service", page_path: window.location.pathname });
    trackWhatsAppClickConversion();
  }

  return <a className={className} style={style} href={href} target="_blank" rel="noreferrer" onClick={trackClick}>{children}</a>;
}
