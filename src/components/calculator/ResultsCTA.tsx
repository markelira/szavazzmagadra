import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

function FacebookFIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
    </svg>
  );
}

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

      {/* Mini check-in proof */}
      <div className="flex items-center justify-center gap-3 mt-5 text-[12px] text-[var(--mid)]">
        {["MS", "TL", "HA"].map((initials, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[var(--pink-dark)] flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">{initials}</span>
            </div>
            <span>{"✅"}</span>
          </div>
        ))}
        <span className="text-[var(--pink-dark)] font-semibold">+9 ma</span>
      </div>

      <div className="mt-5">
        <Button href={LINKS.facebookGroup} external arrow>
          <FacebookFIcon className="w-4 h-4" />
          {"Csatlakozz — ingyenes"}
        </Button>
      </div>
    </div>
  );
}
