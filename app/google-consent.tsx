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

export default function GoogleConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    let consentTimer: number | undefined;
    if (stored === "accepted" || stored === "rejected") {
      consentTimer = window.setTimeout(() => setConsent(stored), 0);
    }

    if (stored === "accepted") {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }

    return () => {
      if (consentTimer !== undefined) window.clearTimeout(consentTimer);
    };
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    window.gtag?.("consent", "update", {
      ad_storage: value === "accepted" ? "granted" : "denied",
      analytics_storage: value === "accepted" ? "granted" : "denied",
      ad_user_data: value === "accepted" ? "granted" : "denied",
      ad_personalization: value === "accepted" ? "granted" : "denied",
    });
  }

  if (consent !== null) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferências de privacidade">
      <p>
        A Envora utiliza cookies opcionais para medir visitas e conversões. Você pode aceitar ou continuar sem o armazenamento desses cookies. <a href="/privacidade">Saiba mais</a>.
      </p>
      <div>
        <button type="button" className="cookie-reject" onClick={() => choose("rejected")}>Recusar</button>
        <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>Aceitar</button>
      </div>
    </aside>
  );
}
