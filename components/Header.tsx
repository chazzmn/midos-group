"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle border/shadow once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-navy/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="container-content flex h-[4.75rem] items-center justify-between">
        {/* [PLACEHOLDER: real logo file] — wordmark stands in for now */}
        <a
          href="#top"
          className="group flex items-baseline gap-2"
          aria-label="Midos Group — back to top"
        >
          <span className="font-serif text-xl font-semibold tracking-tight text-navy">
            Midos
          </span>
          <span className="font-sans text-xs font-medium uppercase tracking-eyebrow text-bronze">
            Group
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-navy bg-navy px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-navy-700"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <line
              x1="2"
              y1={open ? "11" : "6"}
              x2="20"
              y2={open ? "11" : "6"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="origin-center transition-transform duration-300"
              style={{ transform: open ? "rotate(45deg)" : "none" }}
            />
            <line
              x1="2"
              y1="11"
              x2="20"
              y2="11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={`transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <line
              x1="2"
              y1={open ? "11" : "16"}
              x2="20"
              y2={open ? "11" : "16"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="origin-center transition-transform duration-300"
              style={{ transform: open ? "rotate(-45deg)" : "none" }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          className="container-content flex flex-col gap-1 border-t border-navy/10 bg-paper pb-8 pt-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-navy/5 py-4 font-serif text-lg text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
