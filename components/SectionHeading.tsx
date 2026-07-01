import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Optional supporting line under the heading. */
  intro?: string;
  /** Align to center instead of the default left. */
  align?: "left" | "center";
  /** Use a lighter treatment on dark backgrounds. */
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-paper" : "text-navy";
  const introColor = tone === "light" ? "text-paper/70" : "text-charcoal-light";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <div className={`mt-4 rule ${isCenter ? "mx-auto" : ""}`} />
      <h2
        className={`mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${introColor}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
