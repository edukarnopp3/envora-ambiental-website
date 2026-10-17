"use client";

import type { CSSProperties, MouseEvent } from "react";
import { trackWhatsAppClickConversion } from "./google-ads-events";
import { buildWhatsAppHref } from "./whatsapp-attribution";

export default function ServiceWhatsAppLink({ service, className, children, style, situation, placement, contextPrompt, message: customMessage }: {
  service: string;
  className: string;
  children: React.ReactNode;
  style?: CSSProperties;
  situation?: string;
  placement?: string;
  contextPrompt?: string;
  message?: string;
}) {
  const message = customMessage ?? `Olá, gostaria de conversar com a Envora sobre ${service} em Joinville e região.${situation ? ` Minha situação: ${situation}.` : " Gostaria de explicar minha situação."}${contextPrompt ? `\n${contextPrompt}` : ""}`;

  function trackClick(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = buildWhatsAppHref(message, true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", source: `pagina_servico_${service}`, situation: situation ?? "nao_informada", placement: placement ?? "service", page_path: window.location.pathname });
    trackWhatsAppClickConversion();
  }

  return <a className={className} style={style} href={buildWhatsAppHref(message)} target="_blank" rel="noreferrer" onClick={trackClick}>{children}</a>;
}
