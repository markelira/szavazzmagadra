"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAnalyticsConsentState,
  setAnalyticsConsent,
} from "@/lib/firebase-client";

export default function CookieSettings() {
  const [state, setState] = useState<"granted" | "denied" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setState(getAnalyticsConsentState());
  }, []);

  const update = (granted: boolean) => {
    setAnalyticsConsent(granted);
    setState(granted ? "granted" : "denied");
  };

  const reopen = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--mid)] hover:text-[var(--pink-dark)] transition-colors mb-10"
        >
          ← Vissza a főoldalra
        </Link>

        <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--mid)] mb-4">
          🍪 Sütik
        </p>
        <h1 className="text-[clamp(28px,4vw,42px)] font-light text-[var(--dark)] tracking-tight leading-[1.1]">
          Süti{" "}
          <span className="font-bold">beállítások</span>
        </h1>
        <p className="text-base text-[var(--mid)] mt-5 leading-relaxed">
          Itt bármikor módosíthatod a sütikkel kapcsolatos beállításaidat. A
          döntésed a böngésződben kerül tárolásra (localStorage), és nem
          továbbítjuk senkinek.
        </p>

        <div className="mt-12 space-y-6">
          {/* Necessary cookies */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-xl)] p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base font-bold text-[var(--dark)]">
                  Szükséges sütik
                </h2>
                <p className="text-xs text-[var(--mid)] mt-1">
                  Mindig aktív · A weboldal alapvető működéséhez szükségesek
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--pink-dark)] bg-[var(--pink-light)] px-2.5 py-1 rounded-full whitespace-nowrap">
                Mindig aktív
              </span>
            </div>
            <p className="text-[13px] text-[var(--mid)] leading-relaxed">
              Ezek a sütik a szolgáltatás alapvető működéséhez szükségesek
              (sütibeállítás emlékeztetése, biztonsági funkciók). Nem
              kapcsolhatók ki, mert nélkülük az oldal nem működik megfelelően.
              Jogalap: GDPR 6. cikk (1) f) pont - jogos érdek.
            </p>
          </div>

          {/* Analytics cookies */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-xl)] p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base font-bold text-[var(--dark)]">
                  Statisztikai sütik (Firebase Analytics)
                </h2>
                <p className="text-xs text-[var(--mid)] mt-1">
                  Opcionális · A te döntésed
                </p>
              </div>
              {mounted && state === "granted" && (
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white bg-[var(--pink-dark)] px-2.5 py-1 rounded-full whitespace-nowrap">
                  Engedélyezve
                </span>
              )}
              {mounted && state === "denied" && (
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--mid)] bg-[var(--border)] px-2.5 py-1 rounded-full whitespace-nowrap">
                  Letiltva
                </span>
              )}
              {mounted && state === null && (
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--mid)] bg-[var(--border)] px-2.5 py-1 rounded-full whitespace-nowrap">
                  Nincs döntés
                </span>
              )}
            </div>
            <p className="text-[13px] text-[var(--mid)] leading-relaxed mb-4">
              A Google Firebase Analytics szolgáltatást használjuk a
              látogatottság mérésére. A sütik (`_ga`, `_ga_*`) egyedi
              azonosítót hoznak létre a böngésződhöz, és statisztikai
              információkat gyűjtenek (oldalmegtekintések, eszköztípus,
              hozzávetőleges földrajzi hely). Jogalap: GDPR 6. cikk (1) a) pont
              - hozzájárulás. Adatkezelő: Google Ireland Limited.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => update(true)}
                disabled={!mounted}
                className="flex-1 h-10 px-4 rounded-full bg-[var(--dark)] text-white text-[11px] font-semibold uppercase tracking-[0.05em] hover:bg-[var(--dark-mid)] transition-colors disabled:opacity-50"
              >
                Engedélyezem
              </button>
              <button
                onClick={() => update(false)}
                disabled={!mounted}
                className="flex-1 h-10 px-4 rounded-full border border-[var(--border)] text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--mid)] hover:bg-white transition-colors disabled:opacity-50"
              >
                Letiltom
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={reopen}
            className="text-[11px] font-semibold tracking-[0.05em] uppercase text-[var(--mid)] underline hover:text-[var(--pink-dark)] transition-colors"
          >
            Süti banner újranyitása
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center">
          <Link
            href="/adatkezeles"
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--mid)] hover:text-[var(--pink-dark)] transition-colors"
          >
            Adatkezelési tájékoztató →
          </Link>
        </div>
      </div>
    </main>
  );
}
