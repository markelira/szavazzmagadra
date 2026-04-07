const stats = [
  { label: "Ingyenes", value: "100%" },
  { label: "Heti kihívás", value: "✓" },
  { label: "Közösség", value: "⚀" },
  { label: "Magyar nyelven", value: "\u{1F1ED}\u{1F1FA}" },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl mx-auto py-2">
      {stats.map((s, i) => (
        <div key={i} className="text-center flex flex-col items-center">
          {/* Decorative laurel-style flourishes */}
          <div className="flex items-center gap-2 text-[var(--pink)] mb-1.5">
            <span className="block w-4 h-px bg-current" />
            <span className="text-2xl md:text-3xl font-extrabold text-[var(--dark)] tabular-nums">
              {s.value}
            </span>
            <span className="block w-4 h-px bg-current" />
          </div>
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--mid)]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
