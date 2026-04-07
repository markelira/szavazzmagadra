import type {
  Gender,
  Goal,
  Tempo,
  ActivityLevel,
  MacroBreakdown,
  CalculatorResults,
  GoalPlan,
  GoalPlanTempo,
  UserInput,
} from "./types";
import { getExerciseRecommendation } from "@/data/exerciseData";

// ── BMR - Mifflin-St Jeor equation ──
export function calculateBMR(
  gender: Gender,
  weight: number,
  height: number,
  age: number
): number {
  if (gender === "no") {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
  return 10 * weight + 6.25 * height - 5 * age + 5;
}

// ── TDEE - BMR × activity multiplier ──
export function calculateTDEE(
  bmr: number,
  activityLevel: ActivityLevel
): number {
  return bmr * activityLevel;
}

// ── Tempo correction map ──
const tempoCorrections: Record<Goal, Record<Tempo, number>> = {
  fogyas:      { laza: -250, kozepes: -400, intenziv: -600 },
  tonusosodas: { laza: 0,    kozepes: -150, intenziv: -300 },
  tomegeles:   { laza: 150,  kozepes: 250,  intenziv: 400 },
};

export function getTempoCorrection(goal: Goal, tempo: Tempo): number {
  return tempoCorrections[goal][tempo];
}

// ── Target calories ──
export function calculateTargetCalories(
  tdee: number,
  goal: Goal,
  tempo: Tempo
): number {
  return Math.round(tdee + getTempoCorrection(goal, tempo));
}

// ── Macros ──
const proteinMultipliers: Record<Goal, number> = {
  fogyas: 2.0,
  tonusosodas: 2.2,
  tomegeles: 2.0,
};

export function calculateMacros(
  weight: number,
  targetCalories: number,
  goal: Goal
): MacroBreakdown {
  const protein = weight * proteinMultipliers[goal];
  const fat = (targetCalories * 0.25) / 9;
  const carbs = Math.max(0, (targetCalories - protein * 4 - fat * 9) / 4);
  return {
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    fat: Math.round(fat),
  };
}

// ── BMI ──
export function calculateBMI(
  weight: number,
  height: number
): { value: number; category: string } {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  let category: string;
  if (bmi < 18.5) category = "Alulsúlyos";
  else if (bmi < 25.0) category = "Normál";
  else if (bmi < 30.0) category = "Túlsúlyos";
  else category = "Elhízott";
  return { value: bmi, category };
}

// ── Water intake ──
export function calculateWaterIntake(
  weight: number,
  activityLevel: ActivityLevel
): number {
  const base = weight * 0.033;
  let extra = 0;
  if (activityLevel <= 1.2) extra = 0.3;
  else if (activityLevel <= 1.375) extra = 0.5;
  else extra = 0.7;
  return base + extra;
}

// ── Calorie description ──
const calorieDescriptions: Record<Goal, Record<Tempo, string>> = {
  fogyas: {
    laza: "Laza tempó – −250 kcal/nap deficit. Fokozatos, fenntartható fogyás minimális izomvesztéssel.",
    kozepes:
      "Közepes tempó – −400 kcal/nap deficit. Tudományosan ajánlott standard, ~0,37 kg/hét.",
    intenziv:
      "Intenzív tempó – −600 kcal/nap deficit. Gyorsabb fogyás, nagyobb fegyelmet igényel.",
  },
  tonusosodas: {
    laza: "Laza tempó – fenntartó kalória. Maximális rekomponíció: izomépítés és zsírvesztés párhuzamosan.",
    kozepes:
      "Közepes tempó – −150 kcal/nap enyhe deficit. Tiszta átalakulás – a legtöbb embernek ez az ideális.",
    intenziv:
      "Intenzív tempó – −300 kcal/nap. Erősebb zsírvesztési fókusz az izomtömeg megőrzése mellett.",
  },
  tomegeles: {
    laza: "Laza tempó – +150 kcal/nap surplus. Lassú, minőségi izomépítés minimális zsírgyarapodással.",
    kozepes:
      "Közepes tempó – +250 kcal/nap surplus. Ajánlott standard, ~0,23 kg/hét izomépítés.",
    intenziv:
      "Intenzív tempó – +400 kcal/nap surplus. Gyorsabb izomépítés, valamivel több zsírgyarapodással.",
  },
};

// ── Goal plan ──
const weeklyKgMap: Record<Goal, Record<Tempo, number>> = {
  fogyas:      { laza: 0.23, kozepes: 0.37, intenziv: 0.55 },
  tonusosodas: { laza: 0.10, kozepes: 0.15, intenziv: 0.25 },
  tomegeles:   { laza: 0.14, kozepes: 0.23, intenziv: 0.37 },
};

const directionMap: Record<Goal, string> = {
  fogyas: "fogyni",
  tonusosodas: "tónusosodni",
  tomegeles: "tömegre menni",
};

export function calculateGoalPlan(
  weight: number,
  targetWeight: number,
  goal: Goal,
  tdee: number
): GoalPlan {
  const difference = Math.abs(targetWeight - weight);
  const direction = directionMap[goal];

  const tempos: GoalPlanTempo[] = (["laza", "kozepes", "intenziv"] as Tempo[]).map(
    (tempo) => {
      const calories = Math.round(tdee + getTempoCorrection(goal, tempo));
      const macros = calculateMacros(weight, calories, goal);
      const weeklyKg = weeklyKgMap[goal][tempo];
      const weeks =
        difference > 0 && weeklyKg > 0
          ? Math.ceil(difference / weeklyKg)
          : 0;
      return { tempo, calories, macros, weeklyKg, weeks };
    }
  );

  return { targetWeight, difference, direction, tempos };
}

// ── Full calculation orchestrator ──
export function calculate(
  input: UserInput,
  tempo: Tempo,
  targetWeight?: number
): CalculatorResults {
  const bmr = calculateBMR(
    input.gender,
    input.weight,
    input.height,
    input.age
  );
  const tdee = calculateTDEE(bmr, input.activityLevel);
  const targetCalories = calculateTargetCalories(tdee, input.goal, tempo);
  const macros = calculateMacros(input.weight, targetCalories, input.goal);
  const bmi = calculateBMI(input.weight, input.height);
  const water = calculateWaterIntake(input.weight, input.activityLevel);
  const exercise = getExerciseRecommendation(
    input.activityLevel,
    input.goal
  );
  const calorieDescription = calorieDescriptions[input.goal][tempo];

  let goalPlan: GoalPlan | undefined;
  if (targetWeight && targetWeight >= 30 && targetWeight <= 300) {
    goalPlan = calculateGoalPlan(
      input.weight,
      targetWeight,
      input.goal,
      tdee
    );
  }

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories,
    macros,
    bmi: bmi.value,
    bmiCategory: bmi.category,
    exerciseCount: exercise.exerciseCount,
    stepCount: exercise.stepCount,
    exerciseDescription: exercise.description,
    waterIntake: water,
    calorieDescription,
    goalPlan,
  };
}
