"use client";

import { useState } from "react";
import { useCalculatorStore } from "@/hooks/useCalculatorStore";
import { Button } from "@/components/ui/Button";
import type { Gender, Goal, ActivityLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

function parseHu(str: string): number {
  return parseFloat(str.replace(",", "."));
}

const activityOptions: { value: ActivityLevel; label: string }[] = [
  { value: 1.2, label: "Mozgásszegény – ülőmunka, alig mozgok" },
  { value: 1.375, label: "Kissé aktív – heti 1–3 edzés" },
  { value: 1.55, label: "Mérsékelten aktív – heti 3–5 edzés" },
  { value: 1.725, label: "Nagyon aktív – heti 6–7 edzés" },
];

export function CalculatorForm() {
  const { formData, setFormData, goToStep } = useCalculatorStore();

  const [kor, setKor] = useState(formData.age?.toString() ?? "");
  const [magassag, setMagassag] = useState(formData.height?.toString() ?? "");
  const [testsuly, setTestsuly] = useState(formData.weight?.toString() ?? "");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const korVal = parseHu(kor);
    const magVal = parseHu(magassag);
    const sulVal = parseHu(testsuly);

    if (!kor || isNaN(korVal) || korVal < 10 || korVal > 100) {
      newErrors.kor = "Adj meg egy valós kort (10–100).";
    }
    if (!magassag || isNaN(magVal) || magVal < 100 || magVal > 250) {
      newErrors.magassag = "Adj meg egy valós magasságot (100–250 cm).";
    }
    if (!testsuly || isNaN(sulVal) || sulVal < 30 || sulVal > 300) {
      newErrors.testsuly = "Adj meg egy valós testsúlyt (30–300 kg).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setFormData({
      age: parseHu(kor),
      height: parseHu(magassag),
      weight: parseHu(testsuly),
    });
    goToStep(2);
  };

  return (
    <div className="space-y-5">
      {/* Card 1: Alapadatok */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <div className="flex items-center gap-2.5 mb-6 text-base font-bold text-[var(--dark)]">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--pink-light)] text-[var(--pink-dark)] rounded-full text-xs font-extrabold shrink-0">
            1
          </span>
          Alapadatok
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nem */}
          <div className="sm:col-span-2">
            <label className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2">
              Nem
            </label>
            <div className="flex gap-2.5">
              {(["no", "ferfi"] as Gender[]).map((g) => (
                <label
                  key={g}
                  className={cn(
                    "flex-1 flex items-center justify-center py-3 rounded-[var(--radius-md)] border-2 cursor-pointer text-sm font-bold transition-all duration-200 select-none",
                    formData.gender === g
                      ? "border-[var(--pink)] bg-[var(--pink-light)] text-[var(--pink-dark)]"
                      : "border-[var(--border)] bg-[var(--bg)] text-[var(--mid)] hover:border-[var(--pink)] hover:text-[var(--dark)]"
                  )}
                >
                  <input
                    type="radio"
                    name="nem"
                    value={g}
                    checked={formData.gender === g}
                    onChange={() => setFormData({ gender: g })}
                    className="sr-only"
                  />
                  {g === "no" ? "Nő" : "Férfi"}
                </label>
              ))}
            </div>
          </div>

          {/* Kor */}
          <div>
            <label
              htmlFor="kor"
              className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
            >
              Kor
            </label>
            <input
              id="kor"
              type="text"
              inputMode="numeric"
              value={kor}
              onChange={(e) => setKor(e.target.value)}
              className={cn(
                "w-full px-4 py-3 border-2 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none transition-all duration-200 focus:border-[var(--pink)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)]",
                errors.kor ? "border-[var(--error)]" : "border-[var(--border)]"
              )}
            />
            {errors.kor && (
              <p className="text-xs font-semibold text-[var(--error)] mt-1.5">
                {errors.kor}
              </p>
            )}
          </div>

          {/* Magasság */}
          <div>
            <label
              htmlFor="magassag"
              className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
            >
              Magass&aacute;g (cm)
            </label>
            <input
              id="magassag"
              type="text"
              inputMode="numeric"
              value={magassag}
              onChange={(e) => setMagassag(e.target.value)}
              className={cn(
                "w-full px-4 py-3 border-2 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none transition-all duration-200 focus:border-[var(--pink)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)]",
                errors.magassag
                  ? "border-[var(--error)]"
                  : "border-[var(--border)]"
              )}
            />
            {errors.magassag && (
              <p className="text-xs font-semibold text-[var(--error)] mt-1.5">
                {errors.magassag}
              </p>
            )}
          </div>

          {/* Testsúly */}
          <div className="sm:col-span-2">
            <label
              htmlFor="testsuly"
              className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
            >
              Jelenlegi tests&uacute;ly (kg)
            </label>
            <input
              id="testsuly"
              type="text"
              inputMode="decimal"
              value={testsuly}
              onChange={(e) => setTestsuly(e.target.value)}
              className={cn(
                "w-full px-4 py-3 border-2 rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none transition-all duration-200 focus:border-[var(--pink)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)]",
                errors.testsuly
                  ? "border-[var(--error)]"
                  : "border-[var(--border)]"
              )}
            />
            {errors.testsuly && (
              <p className="text-xs font-semibold text-[var(--error)] mt-1.5">
                {errors.testsuly}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Card 2: Célod */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <div className="flex items-center gap-2.5 mb-6 text-base font-bold text-[var(--dark)]">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--pink-light)] text-[var(--pink-dark)] rounded-full text-xs font-extrabold shrink-0">
            2
          </span>
          C&eacute;lod
        </div>

        <div className="space-y-2.5">
          {([
            { value: "fogyas" as Goal, label: "Fogyás", icon: "\u2193" },
            { value: "tonusosodas" as Goal, label: "Tónusosodás", icon: "\u2600" },
            { value: "tomegeles" as Goal, label: "Tömegelés", icon: "\u2191" },
          ]).map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] border-2 cursor-pointer text-sm font-bold transition-all duration-200 select-none",
                formData.goal === option.value
                  ? "border-[var(--pink)] bg-[var(--pink-light)] text-[var(--pink-dark)]"
                  : "border-[var(--border)] bg-[var(--bg)] text-[var(--mid)] hover:border-[var(--pink)] hover:text-[var(--dark)]"
              )}
            >
              <input
                type="radio"
                name="cel"
                value={option.value}
                checked={formData.goal === option.value}
                onChange={() => setFormData({ goal: option.value })}
                className="sr-only"
              />
              <span className="text-lg">{option.icon}</span>
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {/* Card 3: Aktivitási szint */}
      <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
        <div className="flex items-center gap-2.5 mb-2 text-base font-bold text-[var(--dark)]">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--pink-light)] text-[var(--pink-dark)] rounded-full text-xs font-extrabold shrink-0">
            3
          </span>
          Aktivit&aacute;si szint
        </div>
        <p className="text-[13px] text-[var(--mid)] font-medium leading-relaxed mb-5">
          Jelenlegi mozg&aacute;sod alapj&aacute;n, az edz&eacute;sprogramon k&iacute;v&uuml;l.
        </p>

        <label
          htmlFor="aktivitas"
          className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--mid)] mb-2"
        >
          V&aacute;lassz szintet
        </label>
        <select
          id="aktivitas"
          value={formData.activityLevel}
          onChange={(e) =>
            setFormData({
              activityLevel: parseFloat(e.target.value) as ActivityLevel,
            })
          }
          className="w-full px-4 py-3 pr-10 border-2 border-[var(--border)] rounded-[var(--radius-md)] text-sm font-semibold text-[var(--dark)] bg-[var(--bg)] outline-none appearance-none cursor-pointer transition-all duration-200 focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(244,167,185,0.18)] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23C4C4D0%22%20stroke-width%3D%222.5%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_14px_center]"
        >
          {activityOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="text-center pt-2">
        <Button onClick={handleSubmit} arrow>
          Tov&aacute;bb
        </Button>
      </div>
    </div>
  );
}
