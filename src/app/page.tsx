import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { FacebookGroup } from "@/components/sections/FacebookGroup";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Guide } from "@/components/sections/Guide";
import { FAQ } from "@/components/sections/FAQ";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Section id="hero" bg="pink-gradient" noPadding animate={false}>
          <div className="pt-4 pb-12 md:pt-12 md:pb-16">
            <Hero />
          </div>
        </Section>

        <Section id="csoport" bg="white">
          <FacebookGroup />
        </Section>

        <Section bg="white" className="!py-10 md:!py-12">
          <StatsBar />
        </Section>

        <Section id="problema" bg="white">
          <Problem />
        </Section>

        <Section id="megoldas" bg="white">
          <Solution />
        </Section>

        <Section id="kalkulator" bg="white">
          <CalculatorSection />
        </Section>

        <Section id="hogyan" bg="white">
          <HowItWorks />
        </Section>

        <Section id="alexa" bg="white">
          <Guide />
        </Section>

        <Section id="faq" bg="white">
          <FAQ />
        </Section>

        <Section id="csatlakozz" bg="pink-gradient" noPadding animate={false}>
          <ClosingCTA />
        </Section>
      </main>
    </>
  );
}
