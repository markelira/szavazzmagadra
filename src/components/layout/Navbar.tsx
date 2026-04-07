"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Csoport", href: "#csoport" },
  { label: "Kalkulátor", href: "#kalkulator" },
  { label: "Hogyan", href: "#hogyan" },
  { label: "Rólam", href: "#alexa" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark)] border-b border-white/5">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-14 md:h-[72px]">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }}
              className="flex items-center gap-2 text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--pink-dark)] flex items-center justify-center text-[10px] font-extrabold tracking-tight">
                SM
              </div>
              <span className="hidden sm:inline text-[13px] font-semibold tracking-[0.18em] uppercase">
                Szavazz Magadra
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-9">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA pill */}
            <a
              href="#csoport"
              onClick={(e) => { e.preventDefault(); scrollToSection("#csoport"); }}
              className="hidden md:inline-flex items-center gap-2 h-9 px-5 rounded-full border border-white/40 text-[10px] font-semibold tracking-[0.15em] uppercase text-white hover:bg-white hover:text-[var(--dark)] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.27 22 17.1 22 12.07z"/>
              </svg>
              {"Csatlakozz"}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -mr-2 text-white"
              aria-label={mobileOpen ? "Bezárás" : "Menü"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[280px] bg-[var(--dark)] border-l border-white/10"
            >
              <div className="flex justify-end h-14 px-5 items-center">
                <button onClick={() => setMobileOpen(false)} className="p-2 text-white" aria-label="Bezárás">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col px-7 pt-2 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="flex items-center h-12 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#csatlakozz"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#csatlakozz"); }}
                  className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-full border border-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase text-white"
                >
                  {"Kezdd el most \u2192"}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
