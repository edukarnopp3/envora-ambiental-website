const WHATSAPP_CONVERSION_SEND_TO = "AW-18413899550/HU26COPXjOkcEJ6et8xE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClickConversion(): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "conversion", {
    send_to: WHATSAPP_CONVERSION_SEND_TO,
  });
}
