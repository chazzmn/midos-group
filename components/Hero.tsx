import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-paper"
    >
      {/* Abstract architectural line motif — no stock photography. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "5.5rem 5.5rem",
          maskImage:
            "radial-gradient(120% 90% at 85% 0%, black 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 85% 0%, black 30%, transparent 78%)",
        }}
      />
      {/* Angled bronze hairlines for a subtle drafting-plan feel. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-40"
        viewBox="0 0 600 700"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <path d="M600 60 L120 700" stroke="#B08D57" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M600 180 L240 700" stroke="#B08D57" strokeWidth="1" strokeOpacity="0.35" />
        <path d="M600 300 L360 700" stroke="#B08D57" strokeWidth="1" strokeOpacity="0.25" />
        <rect x="392" y="150" width="150" height="150" stroke="#B08D57" strokeOpacity="0.35" />
        <rect x="440" y="200" width="150" height="200" stroke="#ffffff" strokeOpacity="0.15" />
      </svg>

      <div className="container-content relative">
        <div className="grid min-h-[calc(100svh-4.75rem)] grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:min-h-[38rem] lg:grid-cols-12 lg:py-28">
          <div className="max-w-2xl lg:col-span-8">
            <Reveal>
              <p className="eyebrow text-bronze-soft">
                Private real estate investment &middot; London
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Real estate investment,
                <br className="hidden sm:block" /> backed by operational depth.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
                Midos Group is a privately-owned London family office investing
                in real estate across the United Kingdom. We add value beyond
                capital, bringing strategic insight and hands-on operational
                experience to every investment and project we take on.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-bronze px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-bronze-hover"
                >
                  Investment opportunities
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper/60"
                >
                  About the group
                </a>
              </div>
            </Reveal>
          </div>

          {/* Restrained fact panel — institutional, not marketing fluff. */}
          <Reveal delay={200} className="lg:col-span-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-paper/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                  Structure
                </dt>
                <dd className="mt-2 font-serif text-lg text-paper">
                  Family office
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                  Focus
                </dt>
                <dd className="mt-2 font-serif text-lg text-paper">
                  UK real estate
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                  Base
                </dt>
                <dd className="mt-2 font-serif text-lg text-paper">London</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                  Ownership
                </dt>
                <dd className="mt-2 font-serif text-lg text-paper">Private</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
