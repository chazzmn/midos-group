import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TEAM } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-paper py-24 sm:py-28 lg:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Team"
          title="The people behind the decisions."
          intro="A small group with responsibility for strategy, assets and transactions. You deal with the principals directly."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <article className="group">
                {/* [PLACEHOLDER: real team headshots] — swap the Image src.
                    The monogram overlay disappears once a real photo is used. */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-navy">
                  <Image
                    src="/team-placeholder.svg"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center font-serif text-4xl text-bronze-soft/80"
                  >
                    {initials(member.name)}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-px bg-bronze/60" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-bronze">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
