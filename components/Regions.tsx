import Reveal from "./Reveal";
import { SERVICE_AREAS } from "@/lib/content";

export default function Regions() {
  return (
    <section
      aria-label="Where we invest"
      className="border-y border-navy/10 bg-paper-soft py-14"
    >
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="md:max-w-xs">
              <p className="eyebrow">Where we invest</p>
              <p className="mt-3 font-serif text-xl text-navy">
                Real estate across the United Kingdom.
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-3 md:justify-end">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-navy/15 px-4 py-2 text-sm text-charcoal-light"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
