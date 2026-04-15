const stats = [
  { label: "ember a közösségben", value: "17 000+" },
  { label: "heti kihívás eddig", value: "52" },
  { label: "napi ✅ check-in", value: "8–15" },
  { label: "most és mindig", value: "0 Ft" },
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
