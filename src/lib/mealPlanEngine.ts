import type { RecipeIngredient, Recipe, MealPlanItem } from "./types";
import { mealDatabase } from "@/data/mealDatabase";

// ── Scale grams by calorie ratio with type-specific limits ──
function skalaGramm(
  amount: number,
  ratio: number,
  tipus: string | null
): number {
  const r = Math.max(0.6, Math.min(1.5, ratio));
  let s = amount * r;
  if (tipus === "feherje") s = Math.min(s, 200);
  if (tipus === "gabona") s = Math.min(s, 120);
  if (tipus === "tejterm") s = Math.max(s, 80);
  return Math.round(s / 5) * 5 || 5;
}

// ── Convert any unit to grams ──
function osszetevoGramm(o: RecipeIngredient, ratio: number): number {
  if (o.amount === null) return 0;

  if ((o.unit === "g" || o.unit === "ml") && o.scale) {
    return skalaGramm(o.amount, ratio, o.tipus || null);
  }
  if ((o.unit === "g" || o.unit === "ml") && !o.scale) {
    return o.amount;
  }
  if (o.unit === "db" || o.unit === "szelet") {
    const e = mealDatabase[o.nev];
    return o.amount * (e && e.dbSuly ? e.dbSuly : 50);
  }
  if (o.unit === "tk.") return o.amount * 5;
  if (o.unit === "ek.") return o.amount * 15;

  return 0;
}

// ── Get the correct database entry for an ingredient ──
function osszetevoEntry(o: RecipeIngredient) {
  if (o.unit === "tk." && mealDatabase["tk." + o.nev])
    return mealDatabase["tk." + o.nev];
  if (o.unit === "ek." && mealDatabase["ek." + o.nev])
    return mealDatabase["ek." + o.nev];
  return mealDatabase[o.nev] || null;
}

// ── Calculate total macros for a recipe at a given ratio ──
function receptMakro(
  osszetevok: RecipeIngredient[],
  ratio: number
): { p: number; sz: number; zs: number; kcal: number } {
  let p = 0,
    sz = 0,
    zs = 0,
    kcal = 0;

  osszetevok.forEach((o) => {
    const g = osszetevoGramm(o, ratio);
    const e = osszetevoEntry(o);
    if (!e || g === 0) return;
    p += (e.p * g) / 100;
    sz += (e.sz * g) / 100;
    zs += (e.zs * g) / 100;
    kcal += (e.kcal * g) / 100;
  });

  return {
    p: Math.round(p),
    sz: Math.round(sz),
    zs: Math.round(zs),
    kcal: Math.round(kcal),
  };
}

// ── Generate scaled ingredient description ──
function aranyosLeiras(
  osszetevok: RecipeIngredient[],
  ratio: number
): string {
  return osszetevok
    .map((o) => {
      if (o.amount === null) return o.nev;
      if ((o.unit === "g" || o.unit === "ml") && o.scale) {
        return (
          skalaGramm(o.amount, ratio, o.tipus || null) + o.unit + " " + o.nev
        );
      }
      if (o.unit) return o.amount + " " + o.unit + " " + o.nev;
      return o.nev;
    })
    .join(" + ");
}

// ── Main function: generate meal plan ──
export function generaltMintaetrend(
  kcal: number,
  feh: number,
  szenh: number,
  zsir: number,
  irany: string,
  recipeDB: Record<string, { reggeli: Recipe[]; tizorai: Recipe[]; ebed: Recipe[]; uzsonna: Recipe[]; vacsora: Recipe[] }>
): (MealPlanItem | null)[] {
  const etkezesAranyok = [0.25, 0.1, 0.35, 0.1, 0.2];
  const kategoriak = [
    "reggeli",
    "tizorai",
    "ebed",
    "uzsonna",
    "vacsora",
  ] as const;
  const idopontok = ["Reggeli", "Tízórai", "Ebéd", "Uzsonna", "Vacsora"];
  const emojik = ["🌅", "🍎", "🍽️", "🥜", "🌙"];
  const base = recipeDB[irany] || recipeDB["szinten"];

  return kategoriak.map((kat, i) => {
    const celKcal = Math.round(kcal * etkezesAranyok[i]);
    const celP = Math.round(feh * etkezesAranyok[i]);
    const celSZ = Math.round(szenh * etkezesAranyok[i]);
    const celZsir = Math.round(zsir * etkezesAranyok[i]);

    interface BestMatch {
      recept: Recipe;
      ratio: number;
      makrok: { p: number; sz: number; zs: number; kcal: number };
    }
    let legjobb: BestMatch | null = null;
    let legkisebbElteres = Infinity;

    const receptLista = base && base[kat] ? base[kat] : [];

    receptLista.forEach((recept) => {
      const baseKcal = receptMakro(recept.osszetevok, 1).kcal;
      const ratio = baseKcal > 0 ? celKcal / baseKcal : 1;
      const makrok = receptMakro(recept.osszetevok, ratio);
      const elteres =
        (2 * Math.abs(makrok.p - celP)) / Math.max(celP, 1) +
        (1 * Math.abs(makrok.sz - celSZ)) / Math.max(celSZ, 1) +
        (1.5 * Math.abs(makrok.kcal - celKcal)) / Math.max(celKcal, 1);

      if (elteres < legkisebbElteres) {
        legkisebbElteres = elteres;
        legjobb = { recept, ratio, makrok };
      }
    });

    const best = legjobb as BestMatch | null;
    if (!best) return null;

    return {
      idopont: idopontok[i],
      emoji: emojik[i],
      nev: best.recept.nev,
      leiras: aranyosLeiras(best.recept.osszetevok, best.ratio),
      makrok: best.makrok,
      celKcal,
      celP,
      celSZ,
      celZsir,
    };
  });
}
