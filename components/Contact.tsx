"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CONTACT } from "@/lib/content";

type Enquiry = "investment" | "general";

const SEGMENTS: {
  id: Enquiry;
  title: string;
  body: string;
  email: string;
}[] = [
  {
    id: "investment",
    title: "Investment opportunities",
    body: "Introducing an asset, a project or an off-market opportunity in UK real estate.",
    email: CONTACT.investmentEmail,
  },
  {
    id: "general",
    title: "General enquiries",
    body: "Anything else — partnerships, press, or a general question about the group.",
    email: CONTACT.email,
  },
];

export default function Contact() {
  const [enquiry, setEnquiry] = useState<Enquiry>("investment");
  const [submitted, setSubmitted] = useState(false);

  // Static demo handler. To make this live, POST to a form service
  // (e.g. Formspree, Basin) or a serverless endpoint — see README.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-navy py-24 text-paper sm:py-28 lg:py-32"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left column — routing and office details */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Start a conversation."
              tone="light"
            />

            <div className="mt-10 space-y-3">
              {SEGMENTS.map((seg) => {
                const active = enquiry === seg.id;
                return (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => setEnquiry(seg.id)}
                    aria-pressed={active}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${
                      active
                        ? "border-bronze bg-paper/[0.06]"
                        : "border-paper/15 hover:border-paper/35"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-serif text-lg text-paper">
                        {seg.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-2.5 w-2.5 rounded-full ${
                          active ? "bg-bronze" : "bg-paper/25"
                        }`}
                      />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-paper/65">
                      {seg.body}
                    </span>
                  </button>
                );
              })}
            </div>

            <dl className="mt-10 space-y-6 border-t border-paper/15 pt-8 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                  Office
                </dt>
                <dd className="mt-2 not-italic leading-relaxed text-paper/85">
                  {/* [PLACEHOLDER: real office address] */}
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                <div>
                  <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                    Email
                  </dt>
                  {/* [PLACEHOLDER: real email address] */}
                  <dd className="mt-2">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-paper/85 underline-offset-4 hover:text-bronze-soft hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-eyebrow text-paper/50">
                    Phone
                  </dt>
                  {/* [PLACEHOLDER: real phone number] */}
                  <dd className="mt-2 text-paper/85">{CONTACT.phone}</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right column — the form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-2xl bg-paper p-6 text-charcoal sm:p-9">
                {submitted ? (
                  <div className="flex min-h-[22rem] flex-col items-start justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze/15">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.5 9 15.5 17 6.5"
                          stroke="#8A6C3F"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
                      Thank you — message received.
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal-light">
                      This is a demonstration form. Once connected to a mail
                      service it will deliver enquiries directly to the group.
                      We aim to respond to genuine enquiries promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-medium text-bronze underline-offset-4 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field label="Full name" htmlFor="name">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </Field>
                      <Field label="Email" htmlFor="email">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={inputClass}
                          placeholder="you@example.com"
                        />
                      </Field>
                    </div>

                    <Field label="Enquiry type" htmlFor="enquiry">
                      <select
                        id="enquiry"
                        name="enquiry"
                        value={enquiry}
                        onChange={(e) => setEnquiry(e.target.value as Enquiry)}
                        className={`${inputClass} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%236B7079' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                        }}
                      >
                        <option value="investment">
                          Investment opportunity
                        </option>
                        <option value="general">General enquiry</option>
                      </select>
                    </Field>

                    <Field label="Message" htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className={`${inputClass} resize-y`}
                        placeholder="A few lines on how we can help."
                      />
                    </Field>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-navy-700 sm:w-auto"
                    >
                      Send enquiry
                    </button>
                    <p className="text-xs leading-relaxed text-charcoal-muted">
                      By submitting this form you agree to be contacted about
                      your enquiry. We do not share your details with third
                      parties.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-navy/15 bg-paper-soft px-4 py-3 text-base text-charcoal placeholder:text-charcoal-muted/70 transition-colors focus:border-bronze focus:bg-white focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-navy"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
