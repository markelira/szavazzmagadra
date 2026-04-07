"use client";

import { useState } from "react";
import Link from "next/link";

const requestTypes = [
  { value: "access", label: "Hozzáférés - milyen adatokat kezeltek rólam?" },
  { value: "delete", label: "Törlés - töröljétek az adataimat" },
  { value: "rectify", label: "Helyesbítés - javítsátok ki egy adatomat" },
  { value: "withdraw", label: "Hozzájárulás visszavonása" },
  { value: "object", label: "Tiltakozás az adatkezelés ellen" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DataRequestPage() {
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState("delete");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ requestId: string } | null>(null);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    if (!emailRegex.test(email.trim())) {
      setError("Adj meg egy érvényes email címet.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/data-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          requestType,
          message: message.trim() || undefined,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 429) {
          setError("Túl sok kérés. Próbáld újra később.");
        } else {
          setError(body.error ?? "Nem sikerült elküldeni a kérést.");
        }
        setSubmitting(false);
        return;
      }
      const body = await res.json();
      setDone({ requestId: body.requestId });
    } catch {
      setError("Hálózati hiba. Próbáld újra.");
      setSubmitting(false);
    }
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
          Adatvédelem
        </p>
        <h1 className="text-[clamp(28px,4vw,42px)] font-light text-[var(--dark)] tracking-tight leading-[1.1]">
          Adatkezelési{" "}
          <span className="font-bold">kérés</span>
        </h1>
        <p className="text-base text-[var(--mid)] mt-5 leading-relaxed">
          A GDPR alapján bármikor élhetsz az adatvédelmi jogaiddal. Itt
          benyújthatod a kérésedet, és <strong>30 napon belül</strong>{" "}
          válaszolunk.
        </p>

        {done ? (
          <div className="mt-10 bg-[var(--pink-light)] border border-[var(--pink)] rounded-[var(--radius-xl)] p-6">
            <p className="text-2xl mb-2">✅</p>
            <h2 className="text-xl font-bold text-[var(--dark)]">
              Megkaptuk a kérésed
            </h2>
            <p className="text-sm text-[var(--mid)] mt-2 leading-relaxed">
              Egy megerősítő emailt küldtünk a megadott címre. Az
              azonosítód:
            </p>
            <p className="font-mono text-xs bg-white px-3 py-2 rounded mt-2 inline-block">
              {done.requestId}
            </p>
            <p className="text-sm text-[var(--mid)] mt-4 leading-relaxed">
              Az AM Studios Group Kft. képviselője 30 napon belül felveszi
              veled a kapcsolatot az{" "}
              <code className="text-xs">info@amstudios.hu</code> címről. Az
              azonosság ellenőrzése érdekében előfordulhat, hogy további
              információt kérünk.
            </p>
          </div>
        ) : (
          <div className="mt-10 bg-white border border-[var(--border)] rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] space-y-5">
            <div>
              <label
                htmlFor="dr-email"
                className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
              >
                Email cím (amelyikkel a kalkulátort használtad)
                <span className="text-[var(--pink-dark)]"> *</span>
              </label>
              <input
                id="dr-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="te@example.com"
                className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none focus:border-[var(--pink)] focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="dr-type"
                className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
              >
                Kérés típusa <span className="text-[var(--pink-dark)]">*</span>
              </label>
              <select
                id="dr-type"
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none focus:border-[var(--pink)] focus:bg-white"
              >
                {requestTypes.map((rt) => (
                  <option key={rt.value} value={rt.value}>
                    {rt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="dr-message"
                className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
              >
                Üzenet (opcionális)
              </label>
              <textarea
                id="dr-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                placeholder="Bármilyen részlet, ami segíti a kérésed feldolgozását..."
                className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--dark)] bg-[var(--bg)] outline-none focus:border-[var(--pink)] focus:bg-white resize-y"
              />
            </div>

            {error && (
              <div className="rounded-[var(--radius-md)] bg-[#FDECEC] border border-[#E5A5A5] px-4 py-3">
                <p className="text-xs font-semibold text-[#A03030]">
                  ⚠️ {error}
                </p>
              </div>
            )}

            <button
              onClick={submit}
              disabled={submitting}
              className="w-full h-12 rounded-full bg-[var(--dark)] text-white text-[12px] font-semibold uppercase tracking-[0.05em] hover:bg-[var(--dark-mid)] transition-colors disabled:opacity-50"
            >
              {submitting ? "Küldés..." : "Kérés beküldése"}
            </button>

            <p className="text-xs text-[var(--light)] leading-relaxed">
              🔒 A kérést a Firestore-ban naplózzuk, és az AM Studios Group
              Kft. képviselőjének továbbítjuk. A részletes folyamatot az{" "}
              <Link
                href="/adatkezeles#jogok"
                className="text-[var(--pink-dark)] underline"
              >
                adatkezelési tájékoztató 11. szakasza
              </Link>{" "}
              ismerteti.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
