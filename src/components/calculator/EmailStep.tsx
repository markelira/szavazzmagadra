"use client";

import { useState } from "react";
import { useCalculatorStore } from "@/hooks/useCalculatorStore";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { track } from "@/lib/firebase-client";

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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailStep() {
  const {
    formData,
    tempo,
    targetWeight,
    email,
    setEmail,
    setEmailStatus,
    goToStep,
    calculateResults,
  } = useCalculatorStore();

  const [localEmail, setLocalEmail] = useState(email);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (withEmail: boolean) => {
    setSubmitting(true);

    // Always run the calculation locally and advance to results immediately
    if (withEmail) {
      const trimmed = localEmail.trim();
      if (!emailRegex.test(trimmed)) {
        setError("Adj meg egy érvényes email címet.");
        setSubmitting(false);
        return;
      }
      setError("");
      setEmail(trimmed);
    } else {
      setEmail("");
    }

    calculateResults();

    void track("calculator_completed", {
      goal: formData.goal,
      tempo,
      with_email: withEmail,
    });

    // Fire-and-forget the email send if email was provided
    if (withEmail) {
      setEmailStatus("sending");
      try {
        const res = await fetch("/api/send-results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localEmail.trim(),
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
          }),
        });
        if (!res.ok) {
          setEmailStatus("error");
        } else {
          setEmailStatus("sent");
          void track("email_sent");
        }
      } catch {
        setEmailStatus("error");
      }
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
          Küldjük <em className="not-italic text-[var(--pink-dark)] font-semibold">emailben</em> is?
        </h3>
        <p className="text-sm text-[var(--mid)] mt-2 max-w-md mx-auto">
          Kapd meg a teljes terved emailben - bármikor visszanézheted, megoszthatod, kinyomtathatod.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <label
          htmlFor="email"
          className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
        >
          Email cím (opcionális)
        </label>
        <div className="relative">
          <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--light)]" />
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="te@example.com"
            value={localEmail}
            onChange={(e) => {
              setLocalEmail(e.target.value);
              if (error) setError("");
            }}
            className={cn(
              "w-full pl-11 pr-4 py-3 border-2 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none transition-all duration-200 focus:border-[var(--pink)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)]",
              error ? "border-[var(--error)]" : "border-[var(--border)]"
            )}
          />
        </div>
        {error && (
          <p className="text-xs font-semibold text-[var(--error)] mt-2">
            {error}
          </p>
        )}
        <p className="text-xs text-[var(--light)] mt-3 leading-relaxed">
          🔒 Nem iratkoztatunk fel semmire, csak elküldjük a terved. Az adataidat
          kizárólag az email küldéséhez használjuk fel.
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
          &larr; Vissza
        </Button>
        <Button
          variant="secondary"
          onClick={() => submit(false)}
          disabled={submitting}
        >
          Kihagyom
        </Button>
        <Button
          onClick={() => submit(true)}
          disabled={submitting}
          arrow
        >
          {submitting ? "Küldés..." : "Kiszámítom"}
        </Button>
      </div>
    </div>
  );
}
