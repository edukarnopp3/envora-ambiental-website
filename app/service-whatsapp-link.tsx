"use client";

const WA_NUMBER = "5547984551622";

export default function ServiceWhatsAppLink({ service, className, children }: {
  service: string;
  className: string;
  children: React.ReactNode;
}) {
  const message = `Olá, encontrei a Envora pesquisando por ${service} em Joinville e gostaria de explicar minha situação.`;
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  function trackClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", source: `pagina_servico_${service}` });
    if (window.gtag && window.envoraGoogleAdsConversionTarget) {
      window.gtag("event", "conversion", {
        send_to: window.envoraGoogleAdsConversionTarget,
        event_callback: () => undefined,
        event_timeout: 1500,
      });
    }
  }

  return <a className={className} href={href} target="_blank" rel="noreferrer" onClick={trackClick}>{children}</a>;
}
