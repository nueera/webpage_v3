'use client';

const COMPANIES = [
  { name: 'FreshBite Organics', initial: 'F', color: 'from-green-500 to-emerald-600' },
  { name: 'UrbanFit Gyms', initial: 'U', color: 'from-blue-500 to-indigo-600' },
  { name: 'MediConnect Health', initial: 'M', color: 'from-red-500 to-rose-600' },
  { name: 'TechVenture Labs', initial: 'T', color: 'from-violet-500 to-purple-600' },
  { name: 'GreenLeaf Solutions', initial: 'G', color: 'from-emerald-500 to-teal-600' },
  { name: 'CloudNine Systems', initial: 'C', color: 'from-cyan-500 to-sky-600' },
];

export function TrustedLogosSection() {
  return (
    <section className="relative py-12 bg-[var(--bg-main)] overflow-hidden border-y border-[var(--border-soft)]" aria-label="Trusted by companies">
      <div className="container-nueera text-center">
        <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-8 font-semibold">
          Trusted by forward-thinking companies
        </p>
        <div className="relative overflow-hidden" aria-hidden="true">
          {/* Marquee container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...COMPANIES, ...COMPANIES].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="mx-6 md:mx-10 px-5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text-muted)] bg-[var(--bg-glass)] border border-[var(--border-soft)] backdrop-blur-sm inline-flex items-center gap-3 transition-all duration-300 hover:text-[var(--blue-primary)] hover:border-[var(--border-active)] cursor-default select-none"
                style={{ flexShrink: 0 }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${company.color} flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{company.initial}</span>
                </div>
                <span>{company.name}</span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
