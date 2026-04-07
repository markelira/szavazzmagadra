"use client";

import { useCalculatorStore } from "@/hooks/useCalculatorStore";

function EmailBanner() {
  const { email, emailStatus } = useCalculatorStore();
  if (emailStatus === "idle") return null;

  if (emailStatus === "sending") {
    return (
      <div className="rounded-[var(--radius-lg)] bg-[var(--pink-light)] border border-[var(--pink)] px-5 py-4 flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-[var(--pink-dark)] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-[var(--pink-dark)]">
          Küldés folyamatban...
        </p>
      </div>
    );
  }

  if (emailStatus === "sent") {
    return (
      <div className="rounded-[var(--radius-lg)] bg-[var(--pink-light)] border border-[var(--pink)] px-5 py-4 flex items-start gap-3">
        <span className="text-lg mt-0.5">✅</span>
        <div>
          <p className="text-sm font-bold text-[var(--pink-dark)]">
            Elküldtük a tervet!
          </p>
          <p className="text-xs text-[var(--pink-dark)]/80 mt-0.5">
            Cím: <strong>{email}</strong> · Ellenőrizd a spam mappát is.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-lg)] bg-[#FDECEC] border border-[#E5A5A5] px-5 py-4 flex items-start gap-3">
      <span className="text-lg mt-0.5">⚠️</span>
      <div>
        <p className="text-sm font-bold text-[#A03030]">
          Nem sikerült elküldeni az emailt.
        </p>
        <p className="text-xs text-[#A03030]/80 mt-0.5">
          A terved itt látható lent - bármikor visszanézheted ezen az oldalon.
        </p>
      </div>
    </div>
  );
}

export function Results() {
  const { results } = useCalculatorStore();
  if (!results) return null;

  return (
    <div className="space-y-5">
      <EmailBanner />
      {/* Hero: Kalóriacél */}
      <div className="relative bg-gradient-to-br from-[var(--pink)] to-[var(--pink-dark)] rounded-[var(--radius-xl)] p-8 md:p-10 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-8 w-40 h-40 rounded-full bg-white/5" />

        <div className="relative">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase opacity-85">
            Napi kal&oacute;riac&eacute;lod
          </p>
          <div className="mt-2">
            <span className="text-[clamp(52px,9vw,76px)] font-extrabold leading-none">
              {results.targetCalories}
            </span>
            <span className="text-xl opacity-80 ml-2">kcal</span>
          </div>
          <p className="text-[13px] opacity-80 mt-3 leading-relaxed max-w-[60%] max-md:max-w-full font-medium">
            {results.calorieDescription}
          </p>
        </div>

        {/* BMI badge */}
        <div className="absolute top-6 right-6 bg-white/[0.18] border border-white/30 rounded-[16px] px-4 py-3 text-center backdrop-blur-sm max-md:static max-md:inline-block max-md:mt-5">
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase opacity-80">
            Testt&ouml;megindex
          </p>
          <p className="text-2xl font-extrabold leading-none mt-1">
            {results.bmi.toFixed(1)}
          </p>
          <p className="text-[11px] opacity-75 mt-0.5 font-semibold">
            {results.bmiCategory}
          </p>
        </div>
      </div>

      {/* Makrók */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {[
          { label: "Fehérje", value: results.macros.protein, color: "bg-[var(--macro-protein)]" },
          { label: "Szénhidrát", value: results.macros.carbs, color: "bg-[var(--macro-carb)]" },
          { label: "Zsír", value: results.macros.fat, color: "bg-[var(--macro-fat)]" },
        ].map((macro) => (
          <div
            key={macro.label}
            className="bg-white rounded-[var(--radius-lg)] p-5 border-2 border-[var(--border)] text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--pink)]"
          >
            <div className={`w-2 h-2 rounded-full ${macro.color} mx-auto mb-2.5`} />
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--light)] mb-2">
              {macro.label}
            </p>
            <p className="text-[34px] font-extrabold text-[var(--dark)] leading-none">
              {macro.value}
            </p>
            <p className="text-xs text-[var(--mid)] font-semibold mt-1">
              gramm / nap
            </p>
          </div>
        ))}
      </div>

      {/* Mozgáscél */}
      <div className="bg-white rounded-[20px] p-6 md:p-7 border-2 border-[var(--border)] flex flex-col sm:flex-row gap-5 sm:gap-7 items-center">
        <div className="flex-1 text-center">
          <p className="text-[42px] font-extrabold text-[var(--dark)] leading-none">
            {results.exerciseCount}
          </p>
          <p className="text-xs text-[var(--mid)] font-semibold mt-1.5">
            &times; 30 perces edz&eacute;s / h&eacute;t
          </p>
        </div>
        <div className="w-14 h-px sm:w-px sm:h-14 bg-[var(--border)]" />
        <div className="flex-1 text-center">
          <p className="text-[42px] font-extrabold text-[var(--dark)] leading-none">
            {results.stepCount}
          </p>
          <p className="text-xs text-[var(--mid)] font-semibold mt-1.5">
            l&eacute;p&eacute;s / nap aj&aacute;nlott
          </p>
        </div>
      </div>

      {/* Mozgásjavaslat */}
      <div className="bg-white border-2 border-[var(--border)] rounded-[var(--radius-lg)] p-5 md:p-6">
        <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--pink-dark)] mb-3">
          Mozg&aacute;sjavaslat
        </p>
        <div>
          {results.exerciseDescription.map((point, i) => (
            <div
              key={i}
              className={`flex gap-3 items-start py-2.5 ${
                i < results.exerciseDescription.length - 1
                  ? "border-b border-[var(--border)]"
                  : ""
              }`}
            >
              <div className="w-6 h-6 rounded-full bg-[var(--pink-light)] text-[var(--pink-dark)] text-[11px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-[13px] text-[var(--mid)] font-medium leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vízfogyasztás */}
      <div className="bg-gradient-to-br from-[#E8F4FD] to-[#D6EAF8] rounded-[var(--radius-lg)] p-6 flex items-center gap-5">
        <div className="text-4xl shrink-0">{"\u{1F4A7}"}</div>
        <div className="flex-1">
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--water-blue)] mb-1.5">
            Napi v&iacute;zfogyaszt&aacute;s
          </p>
          <p className="text-[32px] font-extrabold text-[var(--water-dark)] leading-none">
            {results.waterIntake.toFixed(1)}{" "}
            <span className="text-base font-semibold">liter</span>
          </p>
          <p className="text-xs text-[var(--water-blue)] font-medium mt-1.5">
            Tests&uacute;ly + aktivit&aacute;si szint alapj&aacute;n sz&aacute;m&iacute;tva. Edz&eacute;s napj&aacute;n adj hozz&aacute; 0,5 litert.
          </p>
        </div>
      </div>

      {/* Célterv (if target weight) */}
      {results.goalPlan && (
        <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)]">
          <div className="flex items-center gap-2.5 mb-1 text-base font-bold text-[var(--dark)]">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--pink-light)] text-[var(--pink-dark)] rounded-full text-xs font-extrabold shrink-0">
              &nearr;
            </span>
            C&eacute;lterved
          </div>
          <p className="text-[13px] text-[var(--mid)] font-medium mb-5">
            {results.goalPlan.difference.toFixed(1)} kg-ot szeretn&eacute;l{" "}
            {results.goalPlan.direction}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {results.goalPlan.tempos.map((t, i) => {
              const isMiddle = i === 1;
              const emojis = ["\u{1F33F}", "\u26A1", "\u{1F525}"];
              const names = ["Laza", "Közepes", "Intenzív"];
              return (
                <div
                  key={t.tempo}
                  className={`rounded-[16px] p-4 text-center border-2 ${
                    isMiddle
                      ? "border-[var(--pink)] bg-[var(--pink-light)]"
                      : "border-[var(--border)]"
                  }`}
                >
                  <div className="text-lg mb-1.5">{emojis[i]}</div>
                  <p
                    className={`text-xs font-extrabold mb-0.5 ${
                      isMiddle ? "text-[var(--pink-dark)]" : "text-[var(--dark)]"
                    }`}
                  >
                    {names[i]}
                  </p>
                  <p
                    className={`text-[10px] font-semibold mb-3 ${
                      isMiddle ? "text-[var(--pink-dark)]" : "text-[var(--mid)]"
                    }`}
                  >
                    {t.weeks > 0
                      ? `~${t.weeklyKg.toFixed(2)} kg/hét · ${t.weeks} hét`
                      : "Célsúly elérve"}
                  </p>
                  <p className="text-[22px] font-extrabold text-[var(--pink-dark)] mb-0.5">
                    {t.calories}
                  </p>
                  <p
                    className={`text-[10px] font-semibold mb-2.5 ${
                      isMiddle ? "text-[var(--pink-dark)]" : "text-[var(--mid)]"
                    }`}
                  >
                    kcal / nap
                  </p>
                  <p className="text-[11px] text-[var(--dark)] leading-relaxed">
                    <b>F:</b> {t.macros.protein}g &middot; <b>SZ:</b>{" "}
                    {t.macros.carbs}g &middot; <b>Zs:</b> {t.macros.fat}g
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-[var(--light)] font-medium leading-relaxed text-center">
            Feh&eacute;rje = F | Sz&eacute;nhidr&aacute;t = SZ | Zs&iacute;r = Zs &middot; Az &eacute;rt&eacute;kek tudom&aacute;nyos aj&aacute;nl&aacute;sokon alapulnak (ISSN, ACSM).
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-[var(--pink-light)] border border-[var(--pink)] rounded-[var(--radius-md)] p-3.5 text-center">
        <p className="text-xs font-semibold text-[var(--pink-dark)] leading-relaxed">
          Ez egy t&aacute;j&eacute;koztat&oacute; seg&eacute;deszk&ouml;z, nem orvosi tan&aacute;cs. Egy&eacute;ni eg&eacute;szs&eacute;g&uuml;gyi k&eacute;rd&eacute;sekben fordulj szakemberhez.
        </p>
      </div>
    </div>
  );
}
