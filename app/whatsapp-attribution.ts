const CONSENT_KEY = "envora_google_consent";
const CLICK_ID_KEY = "envora_google_ads_gclid";
const CLICK_ID_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const WA_NUMBER = "554784940063";

type StoredClickId = {
  value: string;
  capturedAt: number;
};

function canUseStorage(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function captureGoogleAdsClickId(): void {
  if (!canUseStorage()) return;

  const value = new URLSearchParams(window.location.search).get("gclid")?.trim();
  if (
    !value ||
    value.length > 2048 ||
    [...value].some((character) => {
      const code = character.charCodeAt(0);
      return code <= 31 || code === 127;
    })
  ) return;

  try {
    const stored: StoredClickId = { value, capturedAt: Date.now() };
    window.localStorage.setItem(CLICK_ID_KEY, JSON.stringify(stored));
  } catch {
    // Attribution is optional; WhatsApp contact must continue to work without storage.
  }
}

export function clearGoogleAdsClickId(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(CLICK_ID_KEY);
  } catch {
    // Ignore storage restrictions and keep the contact flow available.
  }
}

function getGoogleAdsClickId(): string | null {
  if (!canUseStorage()) return null;

  try {
    const raw = window.localStorage.getItem(CLICK_ID_KEY);
    if (!raw) return null;

    const stored = JSON.parse(raw) as Partial<StoredClickId>;
    const age = Date.now() - Number(stored.capturedAt);
    if (
      typeof stored.value !== "string" ||
      !stored.value ||
      stored.value.length > 2048 ||
      !Number.isFinite(age) ||
      age < 0 ||
      age > CLICK_ID_MAX_AGE_MS
    ) {
      clearGoogleAdsClickId();
      return null;
    }

    return stored.value;
  } catch {
    clearGoogleAdsClickId();
    return null;
  }
}

export function buildWhatsAppHref(message: string, includeAttribution = false): string {
  const clickId = includeAttribution ? getGoogleAdsClickId() : null;
  const attributedMessage = clickId
    ? `${message}\n\nCódigo de referência do Google Ads: ${clickId}`
    : message;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(attributedMessage)}`;
}
