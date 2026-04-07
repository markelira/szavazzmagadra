import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

export function ResultsCTA() {
  return (
    <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)] border border-[var(--border)] mt-5 text-center">
      <h3 className="text-lg md:text-xl font-bold text-[var(--dark)]">
        {"A terved kész. Most jön a neheze: végigcsinálni."}
      </h3>
      <p className="text-sm text-[var(--mid)] mt-3 leading-relaxed">
        {"Egyedül? Hétfőn elkezded, szerdára hagyod."}
        <br />
        {"Velünk? Hétfőtől péntekig együtt csináljátok."}
      </p>
      <div className="mt-6">
        <Button href={LINKS.facebookGroup} external arrow>
          {"Csatlakozz a csoporthoz"}
        </Button>
      </div>
    </div>
  );
}
