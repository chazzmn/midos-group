import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-paper py-24 sm:py-28 lg:py-32">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="About" title="A privately-owned group, based in London." />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-charcoal-light">
                <p>
                  Midos Group is a privately-owned investment group operating as
                  a family office. We invest our own capital in real estate
                  across the United Kingdom, which means our decisions answer to
                  a clear set of principals rather than to outside timelines.
                </p>
                <p>
                  We believe capital is only part of what an asset needs. The
                  rest is judgement and involvement — a considered view on where
                  value sits, and the operational experience to realise it. That
                  is the contribution we set out to make on every project.
                </p>
                <p>
                  The group is deliberately compact. A small, experienced team
                  keeps us close to each investment and able to move quickly when
                  the case is right.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-navy/10 bg-navy/10 sm:grid-cols-3">
                <div className="bg-paper p-6">
                  <p className="font-serif text-3xl text-navy">Private</p>
                  <p className="mt-1 text-sm text-charcoal-muted">
                    Ownership structure
                  </p>
                </div>
                <div className="bg-paper p-6">
                  <p className="font-serif text-3xl text-navy">London</p>
                  <p className="mt-1 text-sm text-charcoal-muted">
                    Home base
                  </p>
                </div>
                <div className="bg-paper p-6">
                  <p className="font-serif text-3xl text-navy">11&ndash;50</p>
                  <p className="mt-1 text-sm text-charcoal-muted">
                    People in the group
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
