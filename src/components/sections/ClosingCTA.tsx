import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

function FacebookFIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: LINKS.social.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: LINKS.social.tiktok, Icon: TikTokIcon },
  { label: "Facebook", href: LINKS.social.facebook, Icon: FacebookFIcon },
];

export function ClosingCTA() {
  return (
    <div className="relative text-center py-12 md:py-20">
      <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase mb-8">
        {"Csatlakozz"}
      </p>

      <h2 className="text-white leading-[1.02] tracking-tight">
        <span className="block text-[clamp(56px,11vw,160px)] font-light">
          {"Egyedül"}
        </span>
        <span className="block text-[clamp(56px,11vw,160px)] font-light mt-1">
          {"nehéz."}
        </span>
        <span className="block text-[clamp(56px,11vw,160px)] font-extrabold mt-4 md:mt-6">
          {"Együtt"}
        </span>
        <span className="block text-[clamp(56px,11vw,160px)] font-extrabold mt-1">
          {"muszáj."}
        </span>
      </h2>

      <p className="text-white/80 text-base md:text-lg leading-relaxed mt-12 max-w-md mx-auto">
        {"Pénteken szavazás. Hétfőn rajt."}
        <br />
        <span className="font-semibold text-white">
          {"A kérdés: te ott leszel?"}
        </span>
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button variant="white-on-dark" size="lg" href={LINKS.facebookGroup} external arrow>
          <FacebookFIcon className="w-4 h-4" />
          {"Csatlakozz a Facebook csoporthoz"}
        </Button>
      </div>

      <p className="text-white/50 text-xs mt-6">
        {"Zárt csoport • Ingyenes • Egy ✅ is elég"}
      </p>

      {/* Bottom brand block (replaces the removed footer) */}
      <div className="mt-24 md:mt-28 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-[13px] font-extrabold tracking-tight border border-white/20">
          SM
        </div>

        {/* Social row */}
        <div className="flex gap-7 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white/40 hover:text-white transition-colors duration-300"
            >
              <link.Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="w-12 h-px bg-white/15 mt-10" />

        <p className="text-white/40 text-[10px] tracking-[0.22em] uppercase mt-6">
          #SzavazzMagadra
        </p>
        <p className="text-white/25 text-[10px] mt-3">
          {"© 2026 AM Studios Group Kft."}
        </p>

        {/* Legal links row */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mt-4">
          <a
            href="/adatkezeles"
            className="text-white/40 text-[10px] underline hover:text-white/70 transition-colors"
          >
            Adatkezelési tájékoztató
          </a>
          <a
            href="/sutibeallitasok"
            className="text-white/40 text-[10px] underline hover:text-white/70 transition-colors"
          >
            Sütibeállítások
          </a>
          <a
            href="/adatkerelem"
            className="text-white/40 text-[10px] underline hover:text-white/70 transition-colors"
          >
            Adatkezelési kérés
          </a>
        </div>
      </div>
    </div>
  );
}
