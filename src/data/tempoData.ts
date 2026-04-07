import type { Goal, TempoConfig } from "@/lib/types";

export const tempoData: Record<Goal, TempoConfig> = {
  fogyas: {
    tag: "🔥 Fogyás",
    alcim: "Válaszd ki a fogyási tempódat.",
    subtitle:
      "Mindhárom opció biztonságos – a különbség a sebesség és fenntarthatóság egyensúlya.",
    tempok: [
      {
        value: "laza",
        emoji: "🌿",
        nev: "Laza",
        korr: "−250 kcal/nap",
        heti: "~0,23 kg/hét",
        leiras:
          "Minimális izomvesztés, hosszú távon könnyen fenntartható. Ideális életmódváltáshoz.",
      },
      {
        value: "kozepes",
        emoji: "⚡",
        nev: "Közepes",
        korr: "−400 kcal/nap",
        heti: "~0,37 kg/hét",
        leiras:
          "Tudományosan ajánlott standard (ISSN). Jó egyensúly sebesség és fenntarthatóság között.",
        ajanlott: true,
      },
      {
        value: "intenziv",
        emoji: "🔥",
        nev: "Intenzív",
        korr: "−600 kcal/nap",
        heti: "~0,55 kg/hét",
        leiras:
          "Biztonságos tartomány (max 1 kg/hét), de nagyobb fegyelmet igényel.",
      },
    ],
  },
  tonusosodas: {
    tag: "✨ Tónusosodás",
    alcim: "Izomépítés + zsírvesztés – válaszd ki a megközelítést.",
    subtitle:
      "Tónusosodásnál az erősítő edzés és a fehérjebevitel a legfontosabb – a kalória csak finomhangolás.",
    tempok: [
      {
        value: "laza",
        emoji: "🌿",
        nev: "Laza",
        korr: "Fenntartó kalória",
        heti: "Lassú rekomp",
        leiras:
          "Fenntartó kalóriával a legtisztább rekomponíció – izomépítés és zsírvesztés türelmesen, párhuzamosan.",
      },
      {
        value: "kozepes",
        emoji: "⚡",
        nev: "Közepes",
        korr: "−150 kcal/nap",
        heti: "~0,15 kg/hét",
        leiras:
          "Enyhe deficit, a legtöbb embernek ez az ideális. Gyorsabb zsírvesztés az izomépítés megőrzése mellett.",
        ajanlott: true,
      },
      {
        value: "intenziv",
        emoji: "🔥",
        nev: "Intenzív",
        korr: "−300 kcal/nap",
        heti: "~0,25 kg/hét",
        leiras:
          "Erősebb zsírvesztési fókusz – magas fehérjével az izomtömeg megőrizhető. Nagyobb fegyelmet igényel.",
      },
    ],
  },
  tomegeles: {
    tag: "💪 Tömegelés",
    alcim: "Válaszd ki az izomépítési tempódat.",
    subtitle:
      "Tömegelésnél a kalóriatöbblet + erősítő edzés + elegendő fehérje a három alappillér.",
    tempok: [
      {
        value: "laza",
        emoji: "🌿",
        nev: "Laza",
        korr: "+150 kcal/nap",
        heti: "~0,14 kg/hét",
        leiras:
          "Lassú, minőségi izomépítés minimális zsírgyarapodással. Hosszú táv, tiszta eredmény.",
      },
      {
        value: "kozepes",
        emoji: "⚡",
        nev: "Közepes",
        korr: "+250 kcal/nap",
        heti: "~0,23 kg/hét",
        leiras:
          "Ajánlott standard. Jó egyensúly az izomépítés sebessége és a zsírgyarapodás minimalizálása között.",
        ajanlott: true,
      },
      {
        value: "intenziv",
        emoji: "🔥",
        nev: "Intenzív",
        korr: "+400 kcal/nap",
        heti: "~0,37 kg/hét",
        leiras:
          "Gyorsabb izomépítés, valamivel több zsírgyarapodással. Erős regenerációs kapacitást igényel.",
      },
    ],
  },
};
