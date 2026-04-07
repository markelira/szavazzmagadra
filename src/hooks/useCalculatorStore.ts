import { create } from "zustand";
import type {
  Gender,
  Goal,
  Tempo,
  ActivityLevel,
  CalculatorResults,
} from "@/lib/types";
import { calculate } from "@/lib/calculations";

interface FormData {
  gender: Gender;
  age: number | null;
  height: number | null;
  weight: number | null;
  goal: Goal;
  activityLevel: ActivityLevel;
}

export type Step = 1 | 2 | 3 | 4;
export type EmailStatus = "idle" | "sending" | "sent" | "error";

interface CalculatorStore {
  // State
  step: Step;
  direction: 1 | -1;
  formData: FormData;
  tempo: Tempo;
  targetWeight: number | null;
  results: CalculatorResults | null;
  email: string;
  emailStatus: EmailStatus;
  consentHealthData: boolean;
  consentPrivacyPolicy: boolean;

  // Actions
  setFormData: (data: Partial<FormData>) => void;
  setTempo: (tempo: Tempo) => void;
  setTargetWeight: (weight: number | null) => void;
  setEmail: (email: string) => void;
  setEmailStatus: (status: EmailStatus) => void;
  setConsentHealthData: (value: boolean) => void;
  setConsentPrivacyPolicy: (value: boolean) => void;
  goToStep: (step: Step) => void;
  calculateResults: () => void;
  reset: () => void;
}

const initialFormData: FormData = {
  gender: "no",
  age: null,
  height: null,
  weight: null,
  goal: "fogyas",
  activityLevel: 1.55,
};

export const useCalculatorStore = create<CalculatorStore>((set, get) => ({
  step: 1,
  direction: 1,
  formData: { ...initialFormData },
  tempo: "kozepes",
  targetWeight: null,
  results: null,
  email: "",
  emailStatus: "idle",
  consentHealthData: false,
  consentPrivacyPolicy: false,

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  setTempo: (tempo) => set({ tempo }),

  setTargetWeight: (weight) => set({ targetWeight: weight }),

  setEmail: (email) => set({ email }),

  setEmailStatus: (emailStatus) => set({ emailStatus }),

  setConsentHealthData: (consentHealthData) => set({ consentHealthData }),

  setConsentPrivacyPolicy: (consentPrivacyPolicy) => set({ consentPrivacyPolicy }),

  goToStep: (step) =>
    set((state) => ({
      step,
      direction: step > state.step ? 1 : -1,
    })),

  calculateResults: () => {
    const { formData, tempo, targetWeight } = get();
    const { age, height, weight } = formData;

    if (!age || !height || !weight) return;

    const results = calculate(
      {
        gender: formData.gender,
        age,
        height,
        weight,
        goal: formData.goal,
        activityLevel: formData.activityLevel,
      },
      tempo,
      targetWeight ?? undefined
    );

    set({ results, step: 4, direction: 1 });
  },

  reset: () =>
    set({
      step: 1,
      direction: -1,
      results: null,
      targetWeight: null,
      email: "",
      emailStatus: "idle",
      consentHealthData: false,
      consentPrivacyPolicy: false,
    }),
}));
