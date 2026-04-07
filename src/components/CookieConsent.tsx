"use client";

import { useEffect, useState } from "react";
import {
  getAnalyticsConsentState,
  setAnalyticsConsent,
} from "@/lib/firebase-client";

/**
 * GDPR + ePrivacy cookie consent banner.
 *
 * Behavior:
 * - On first mount, checks localStorage for an existing decision.
 * - If no decision: shows banner.
 * - User clicks "Elfogadom" → analytics consent granted, banner hides.
 * - User clicks "Csak a szükségesek" → analytics consent denied, banner hides.
 * - The decision is stored under sm_analytics_consent in localStorage.
 *
 * Listens for "open-cookie-settings" custom events to re-display the banner
 * (used by the /sutibeallitasok page link).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const state = getAnalyticsConsentState();
    if (state === null) {
      setVisible(true);
    }

    const handler = () => setVisible(true);
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const accept = () => {
    setAnalyticsConsent(true);
    setVisible(false);
  };

  const reject = () => {
    setAnalyticsConsent(false);
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-white border border-[var(--border)] rounded-[var(--radius-xl)] shadow-2xl p-5 md:p-6"
    >
      <p
        id="cookie-consent-title"
        className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--pink-dark)] mb-2"
      >
        🍪 Sütik
      </p>
      <h3 className="text-base font-bold text-[var(--dark)] leading-tight">
        Engeded a sütiket?
      </h3>
      <p className="text-[13px] text-[var(--mid)] leading-[1.55] mt-2">
        A weboldal működéséhez szükséges sütiket mindig használjuk. A statisztikai
        sütik (Firebase Analytics) segítenek megérteni, hogyan használod az
        oldalt. Ezeket csak a hozzájárulásoddal helyezzük el.{" "}
        <a
          href="/adatkezeles"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--pink-dark)] font-semibold underline hover:no-underline"
        >
          Részletek
        </a>
      </p>
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <button
          onClick={reject}
          className="flex-1 h-10 px-4 rounded-full border border-[var(--border)] text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--mid)] hover:bg-[var(--bg)] transition-colors"
        >
          Csak a szükségesek
        </button>
        <button
          onClick={accept}
          className="flex-1 h-10 px-4 rounded-full bg-[var(--dark)] text-white text-[11px] font-semibold uppercase tracking-[0.05em] hover:bg-[var(--dark-mid)] transition-colors"
        >
          Elfogadom
        </button>
      </div>
    </div>
  );
}
