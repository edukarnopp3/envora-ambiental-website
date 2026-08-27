"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "envora_google_consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    envoraGoogleAdsConversionTarget?: string;
  }
}

export default function GoogleConsent({ tagId, conversionLabel }: { tagId: string; conversionLabel: string }) {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored !== "accepted" && stored !== "rejected") return;
    const timer = window.setTimeout(() => setConsent(stored), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || !tagId || document.getElementById("envora-google-tag")) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", tagId);
    if (conversionLabel) {
      window.envoraGoogleAdsConversionTarget = `${tagId}/${conversionLabel}`;
    }

    const script = document.createElement("script");
    script.id = "envora-google-tag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`;
    document.head.appendChild(script);
  }, [consent, conversionLabel, tagId]);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  if (consent !== null) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferências de privacidade">
      <p>
        A Envora utiliza cookies opcionais para medir visitas e conversões. Você pode aceitar ou continuar sem esse rastreamento. <a href="/privacidade">Saiba mais</a>.
      </p>
      <div>
        <button type="button" className="cookie-reject" onClick={() => choose("rejected")}>Recusar</button>
        <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>Aceitar</button>
      </div>
    </aside>
  );
}
