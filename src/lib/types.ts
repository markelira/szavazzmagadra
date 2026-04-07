// ── User Input ──
export type Gender = "no" | "ferfi";
export type Goal = "fogyas" | "tonusosodas" | "tomegeles";
export type Tempo = "laza" | "kozepes" | "intenziv";
export type ActivityLevel = 1.2 | 1.375 | 1.55 | 1.725;

export interface UserInput {
  gender: Gender;
  age: number;
  height: number; // cm
  weight: number; // kg
  goal: Goal;
  activityLevel: ActivityLevel;
}

// ── Calculator Results ──
export interface MacroBreakdown {
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
}

export interface GoalPlanTempo {
  tempo: Tempo;
  calories: number;
  macros: MacroBreakdown;
  weeklyKg: number;
  weeks: number;
}

export interface GoalPlan {
  targetWeight: number;
  difference: number;
  direction: string;
  tempos: GoalPlanTempo[];
}

export interface CalculatorResults {
  bmr: number;
  tdee: number;
  targetCalories: number;
  macros: MacroBreakdown;
  bmi: number;
  bmiCategory: string;
  exerciseCount: number;
  stepCount: string;
  exerciseDescription: string[];
  waterIntake: number; // liters
  calorieDescription: string;
  goalPlan?: GoalPlan;
}

// ── Meal Database ──
export type IngredientUnit = "g" | "ml" | "db" | "szelet" | "tk." | "ek.";

export interface Ingredient {
  p: number; // protein per 100g
  sz: number; // carbs per 100g
  zs: number; // fat per 100g
  kcal: number; // calories per 100g
  dbSuly?: number; // grams per unit (for db-based items)
}

export interface RecipeIngredient {
  nev: string;
  amount: number | null;
  unit: IngredientUnit | null;
  scale: boolean;
  tipus?: "feherje" | "gabona" | "tejterm" | null;
}

export interface Recipe {
  nev: string;
  refKcal: number;
  osszetevok: RecipeIngredient[];
}

export interface RecipeCollection {
  reggeli: Recipe[];
  tizorai: Recipe[];
  ebed: Recipe[];
  uzsonna: Recipe[];
  vacsora: Recipe[];
}

export interface MealPlanItem {
  idopont: string;
  emoji: string;
  nev: string;
  leiras: string;
  makrok: { p: number; sz: number; zs: number; kcal: number };
  celKcal: number;
  celP: number;
  celSZ: number;
  celZsir: number;
}

// ── Tempo Data ──
export interface TempoOption {
  value: Tempo;
  emoji: string;
  nev: string;
  korr: string;
  heti: string;
  leiras: string;
  ajanlott?: boolean;
}

export interface TempoConfig {
  tag: string;
  alcim: string;
  subtitle: string;
  tempok: TempoOption[];
}
