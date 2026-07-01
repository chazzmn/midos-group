import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { WHAT_WE_LIKE } from "@/lib/content";

export default function WhatWeLike() {
  return (
    <section
      id="what-we-like"
      className="scroll-mt-24 bg-paper-soft py-24 sm:py-28 lg:py-32"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="What We Like"
                title="The kind of assets we look for."
                intro="We take a practical view. The specifics vary, but the situations that interest us share a common thread: a clear route to improve an asset through capital, management, or both."
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-navy/10 border-t border-navy/10">
              {WHAT_WE_LIKE.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <div className="flex gap-6 py-8 sm:gap-10">
                    <span className="mt-1 font-serif text-sm text-bronze">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={120}>
              <p className="mt-8 border-l-2 border-bronze/50 pl-5 text-sm leading-relaxed text-charcoal-muted">
                We consider opportunities on their merits and are comfortable
                working alongside partners and operators where it strengthens
                the outcome.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
