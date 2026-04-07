import { Container } from "@/components/ui/Container";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" /></svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
];

export function Footer() {
  return (
    <footer className="bg-[var(--dark)] py-20">
      <Container>
        <div className="flex flex-col items-center">
          {/* Monogram */}
          <div className="w-14 h-14 rounded-full bg-[var(--pink-dark)] flex items-center justify-center text-white text-[15px] font-extrabold tracking-tight">
            SM
          </div>

          <p className="text-white text-[13px] font-semibold tracking-[0.22em] uppercase mt-6">
            Szavazz Magadra
          </p>

          <p className="text-white/40 text-[12px] mt-3 max-w-sm text-center leading-relaxed">
            {"Egyedül nehéz. Együtt muszáj."}
          </p>

          {/* Social */}
          <div className="flex gap-7 mt-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white/30 hover:text-white/80 transition-colors duration-300"
              >
                <link.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-white/10 mt-10" />

          <p className="text-white/40 text-[11px] tracking-[0.18em] uppercase mt-6">
            #SzavazzMagadra
          </p>

          <p className="text-white/25 text-[11px] mt-3">
            {"© 2026 Szavazz Magadra"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
