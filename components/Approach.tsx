import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { APPROACH_PILLARS } from "@/lib/content";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-24 text-paper sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "5.5rem 100%",
        }}
      />
      <div className="container-content relative">
        <SectionHeading
          eyebrow="Investment Approach"
          title="Strategic on paper, hands-on in practice."
          intro="We are actively involved across our investments and projects — from the first appraisal through to the operational decisions that shape returns."
          tone="light"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 md:grid-cols-3">
          {APPROACH_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 100}>
              <div className="flex h-full flex-col bg-navy p-8 lg:p-10">
                <span className="font-serif text-sm text-bronze-soft">
                  {pillar.index}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-paper/70">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
