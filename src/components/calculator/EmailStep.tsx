"use client";

import { useState } from "react";
import { useCalculatorStore } from "@/hooks/useCalculatorStore";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { track } from "@/lib/firebase-client";
import { PRIVACY_POLICY_VERSION } from "@/lib/privacyVersion";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  id: string;
}

function ConsentCheckbox({
  checked,
  onChange,
  error,
  required,
  children,
  id,
}: ConsentCheckboxProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
        <div className="relative shrink-0 mt-0.5">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only peer"
            aria-required={required}
          />
          <div
            className={cn(
              "w-5 h-5 rounded-[6px] border-2 transition-all duration-200 flex items-center justify-center",
              checked
                ? "bg-[var(--pink-dark)] border-[var(--pink-dark)]"
                : error
                  ? "border-[var(--error)] bg-white"
                  : "border-[var(--border)] bg-white group-hover:border-[var(--pink)]"
            )}
          >
            {checked && <CheckIcon className="w-3 h-3 text-white" />}
          </div>
        </div>
        <span className="text-[13px] text-[var(--mid)] leading-[1.55] select-none">
          {children}
          {required && (
            <span className="text-[var(--pink-dark)] ml-0.5">*</span>
          )}
        </span>
      </label>
      {error && (
        <p className="text-xs font-semibold text-[var(--error)] mt-2 ml-8">
          {error}
        </p>
      )}
    </div>
  );
}

export function EmailStep() {
  const {
    formData,
    tempo,
    targetWeight,
    email,
    consentHealthData,
    consentPrivacyPolicy,
    setEmail,
    setEmailStatus,
    setConsentHealthData,
    setConsentPrivacyPolicy,
    goToStep,
    calculateResults,
  } = useCalculatorStore();

  const [localEmail, setLocalEmail] = useState(email);
  const [emailError, setEmailError] = useState("");
  const [healthConsentError, setHealthConsentError] = useState("");
  const [policyConsentError, setPolicyConsentError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    let ok = true;
    const trimmed = localEmail.trim();
    if (!emailRegex.test(trimmed)) {
      setEmailError("Adj meg egy érvényes email címet.");
      ok = false;
    } else {
      setEmailError("");
    }
    if (!consentHealthData) {
      setHealthConsentError(
        "El kell fogadnod az egészségügyi adatok kezelésére vonatkozó hozzájárulást."
      );
      ok = false;
    } else {
      setHealthConsentError("");
    }
    if (!consentPrivacyPolicy) {
      setPolicyConsentError(
        "El kell fogadnod az adatkezelési tájékoztatót."
      );
      ok = false;
    } else {
      setPolicyConsentError("");
    }
    return ok;
  };

  const submit = async () => {
    if (!validate()) return;

    setSubmitting(true);
    setServerError("");
    const trimmedEmail = localEmail.trim();
    setEmail(trimmedEmail);
    setEmailStatus("sending");

    try {
      const res = await fetch("/api/send-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          formData: {
            gender: formData.gender,
            age: formData.age,
            height: formData.height,
            weight: formData.weight,
            goal: formData.goal,
            activityLevel: formData.activityLevel,
          },
          tempo,
          targetWeight,
          consentHealthData: true,
          consentPrivacyPolicy: true,
          consentAnalytics:
            typeof window !== "undefined" &&
            window.localStorage.getItem("sm_analytics_consent") === "granted",
          policyVersion: PRIVACY_POLICY_VERSION,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 429) {
          setServerError(
            "Túl sok próbálkozás. Próbáld újra 1 óra múlva, vagy ellenőrizd a postafiókod."
          );
        } else {
          setServerError(
            body.error ?? "Nem sikerült elküldeni. Próbáld újra később."
          );
        }
        setEmailStatus("error");
        setSubmitting(false);
        return;
      }

      setEmailStatus("sent");
      void track("email_sent");
      void track("calculator_completed", {
        goal: formData.goal,
        tempo,
      });

      // Only show results AFTER the email is successfully queued
      calculateResults();
    } catch {
      setServerError(
        "Hálózati hiba. Ellenőrizd a kapcsolatod és próbáld újra."
      );
      setEmailStatus("error");
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="inline-block bg-[var(--pink-light)] text-[var(--pink-dark)] text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-4">
          📧 Email
        </div>
        <h3 className="text-[clamp(22px,4vw,32px)] font-light text-[var(--dark)]">
          Hová{" "}
          <em className="not-italic text-[var(--pink-dark)] font-semibold">
            küldjük
          </em>
          ?
        </h3>
        <p className="text-sm text-[var(--mid)] mt-2 max-w-md mx-auto">
          A teljes terved egy emailben érkezik - bármikor visszanézheted,
          megoszthatod, kinyomtathatod.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)] space-y-6">
        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
          >
            Email cím <span className="text-[var(--pink-dark)]">*</span>
          </label>
          <div className="relative">
            <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--light)]" />
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              placeholder="te@example.com"
              value={localEmail}
              onChange={(e) => {
                setLocalEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className={cn(
                "w-full pl-11 pr-4 py-3 border-2 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none transition-all duration-200 focus:border-[var(--pink)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)]",
                emailError ? "border-[var(--error)]" : "border-[var(--border)]"
              )}
            />
          </div>
          {emailError && (
            <p className="text-xs font-semibold text-[var(--error)] mt-2">
              {emailError}
            </p>
          )}
        </div>

        {/* Consents divider */}
        <div className="border-t border-[var(--border)] pt-5 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--mid)]">
            Hozzájárulások
          </p>

          {/* Consent 1: Health data (Article 9) — REQUIRED */}
          <ConsentCheckbox
            id="consent-health"
            required
            checked={consentHealthData}
            onChange={(v) => {
              setConsentHealthData(v);
              if (healthConsentError && v) setHealthConsentError("");
            }}
            error={healthConsentError}
          >
            Kifejezett hozzájárulásomat adom ahhoz, hogy az AM Studios Group Kft.
            az egészségi állapotomra vonatkozó adataimat (nem, kor, testsúly,
            magasság, cél, aktivitási szint, BMI, BMI-kategória, számított makró-
            és kalória-értékek) a személyes étrend- és mozgástervem
            elkészítéséhez és emailben történő elküldéséhez kezelje. Tudomásul
            veszem, hogy ezek az adatok különleges személyes adatnak minősülnek
            a GDPR 9. cikke értelmében, és a kezelésük jogalapja a GDPR 9. cikk
            (2) bekezdés a) pontja szerinti kifejezett hozzájárulásom.
          </ConsentCheckbox>

          {/* Consent 2: Privacy policy (Article 6) — REQUIRED */}
          <ConsentCheckbox
            id="consent-policy"
            required
            checked={consentPrivacyPolicy}
            onChange={(v) => {
              setConsentPrivacyPolicy(v);
              if (policyConsentError && v) setPolicyConsentError("");
            }}
            error={policyConsentError}
          >
            Elolvastam és elfogadom az{" "}
            <a
              href="/adatkezeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--pink-dark)] font-semibold underline hover:no-underline"
              onClick={(e) => e.stopPropagation()}
            >
              adatkezelési tájékoztatót
            </a>
            .
          </ConsentCheckbox>
        </div>

        {/* Server error */}
        {serverError && (
          <div className="rounded-[var(--radius-md)] bg-[#FDECEC] border border-[#E5A5A5] px-4 py-3">
            <p className="text-xs font-semibold text-[#A03030]">
              ⚠️ {serverError}
            </p>
          </div>
        )}

        {/* Trust line */}
        <p className="text-xs text-[var(--light)] leading-relaxed flex items-start gap-2">
          <span>🔒</span>
          <span>
            Az adataidat kizárólag a terved elküldéséhez és tárolásához
            használjuk. Bármikor kérheted az adataid törlését az{" "}
            <a
              href="mailto:info@amstudios.hu"
              className="text-[var(--pink-dark)] underline"
            >
              info@amstudios.hu
            </a>{" "}
            címen.
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => goToStep(2)}
          disabled={submitting}
        >
          ← Vissza
        </Button>
        <Button onClick={submit} disabled={submitting} arrow>
          {submitting ? "Küldés..." : "Kiszámítom"}
        </Button>
      </div>
    </div>
  );
}
