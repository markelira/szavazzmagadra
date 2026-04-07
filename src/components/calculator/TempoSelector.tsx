"use client";

import { useState } from "react";
import { useCalculatorStore } from "@/hooks/useCalculatorStore";
import { tempoData } from "@/data/tempoData";
import { Button } from "@/components/ui/Button";
import type { Tempo } from "@/lib/types";
import { cn } from "@/lib/utils";

function parseHu(str: string): number {
  return parseFloat(str.replace(",", "."));
}

export function TempoSelector() {
  const { formData, tempo, setTempo, setTargetWeight, goToStep, calculateResults } =
    useCalculatorStore();

  const [celsuly, setCelsuly] = useState("");
  const [celsulyError, setCelsulyError] = useState("");

  const config = tempoData[formData.goal];

  const handleCalculate = () => {
    if (celsuly) {
      const val = parseHu(celsuly);
      if (isNaN(val) || val < 30 || val > 300) {
        setCelsulyError("Adj meg egy valós célsúlyt (30–300 kg).");
        return;
      }
      setCelsulyError("");
      setTargetWeight(val);
    } else {
      setTargetWeight(null);
    }
    calculateResults();
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="inline-block bg-[var(--pink-light)] text-[var(--pink-dark)] text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-4">
          {config.tag}
        </div>
        <h3 className="text-[clamp(22px,4vw,32px)] font-light text-[var(--dark)]">
          V&aacute;lassz <em className="not-italic text-[var(--pink-dark)]">temp&oacute;t</em>
        </h3>
        <p className="text-sm text-[var(--mid)] mt-2">{config.alcim}</p>
      </div>

      {/* Card: Tempó */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <div className="flex items-center gap-2.5 mb-2 text-base font-bold text-[var(--dark)]">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--pink-light)] text-[var(--pink-dark)] rounded-full text-xs font-extrabold shrink-0">
            4
          </span>
          Temp&oacute;
        </div>
        <p className="text-[13px] text-[var(--mid)] font-medium leading-relaxed mb-5">
          {config.subtitle}
        </p>

        <div className="space-y-3">
          {config.tempok.map((t) => (
            <label
              key={t.value}
              className={cn(
                "block rounded-[var(--radius-md)] border-2 cursor-pointer transition-all duration-200 select-none",
                tempo === t.value
                  ? "border-[var(--pink)] bg-[var(--pink-light)]"
                  : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--pink)]"
              )}
            >
              <input
                type="radio"
                name="tempo"
                value={t.value}
                checked={tempo === t.value}
                onChange={() => setTempo(t.value as Tempo)}
                className="sr-only"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-sm font-extrabold",
                      tempo === t.value
                        ? "text-[var(--pink-dark)]"
                        : "text-[var(--dark)]"
                    )}
                  >
                    {t.emoji} {t.nev}
                  </span>
                  {t.ajanlott && (
                    <span className="text-[10px] font-bold bg-[var(--pink-dark)] text-white px-2.5 py-0.5 rounded-full">
                      Aj&aacute;nlott
                    </span>
                  )}
                </div>
                <div className="flex gap-4 mt-1.5 text-[11px] font-bold text-[var(--pink-dark)]">
                  <span>{t.korr}</span>
                  <span>{t.heti}</span>
                </div>
                <p className="text-xs text-[var(--mid)] font-medium leading-relaxed mt-2">
                  {t.leiras}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Card: Célsúly (optional) */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <div className="flex items-center gap-2.5 mb-2 text-base font-bold text-[var(--dark)]">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--pink-light)] text-[var(--pink-dark)] rounded-full text-xs font-extrabold shrink-0">
            5
          </span>
          C&eacute;ls&uacute;ly
          <span className="text-xs font-normal text-[var(--light)] ml-1">
            &ndash; opcion&aacute;lis
          </span>
        </div>
        <p className="text-[13px] text-[var(--mid)] font-medium leading-relaxed mb-5">
          Ha megadod, megmutatjuk h&aacute;ny h&eacute;t alatt &eacute;red el a c&eacute;lodat.
        </p>

        <label
          htmlFor="celsuly"
          className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
        >
          C&eacute;ls&uacute;ly (kg)
        </label>
        <input
          id="celsuly"
          type="text"
          inputMode="decimal"
          value={celsuly}
          onChange={(e) => setCelsuly(e.target.value)}
          className={cn(
            "w-full px-4 py-3 border-2 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none transition-all duration-200 focus:border-[var(--pink)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)]",
            celsulyError
              ? "border-[var(--error)]"
              : "border-[var(--border)]"
          )}
        />
        {celsulyError && (
          <p className="text-xs font-semibold text-[var(--error)] mt-1.5">
            {celsulyError}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center pt-2">
        <Button variant="secondary" size="sm" onClick={() => goToStep(1)}>
          &larr; Vissza
        </Button>
        <Button onClick={handleCalculate}>
          Kisz&aacute;m&iacute;tom
        </Button>
      </div>
    </div>
  );
}
