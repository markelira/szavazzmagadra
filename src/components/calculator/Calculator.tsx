"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCalculatorStore } from "@/hooks/useCalculatorStore";
import { ProgressIndicator } from "./ProgressIndicator";
import { CalculatorForm } from "./CalculatorForm";
import { TempoSelector } from "./TempoSelector";
import { EmailStep } from "./EmailStep";
import { Results } from "./Results";
import { ResultsCTA } from "./ResultsCTA";
import { Button } from "@/components/ui/Button";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-50%" : "50%",
    opacity: 0,
  }),
};

export function Calculator() {
  const { step, direction, reset } = useCalculatorStore();

  return (
    <div className="max-w-[680px] mx-auto mt-10">
      <ProgressIndicator currentStep={step} />

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {step === 1 && <CalculatorForm />}
            {step === 2 && <TempoSelector />}
            {step === 3 && <EmailStep />}
            {step === 4 && (
              <>
                <Results />
                <ResultsCTA />
                <div className="text-center mt-5">
                  <Button variant="secondary" size="sm" onClick={reset}>
                    Adatok módosítása
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
