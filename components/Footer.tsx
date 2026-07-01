import { NAV_LINKS, CONTACT } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-paper/70">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* [PLACEHOLDER: real logo file] */}
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-semibold text-paper">
                Midos
              </span>
              <span className="text-xs font-medium uppercase tracking-eyebrow text-bronze">
                Group
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/55">
              A privately-owned London family office investing in real estate
              across the United Kingdom.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-xs uppercase tracking-eyebrow text-paper/40">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-eyebrow text-paper/40">
              Registered office
            </p>
            {/* [PLACEHOLDER: real registered office address] */}
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-paper/70">
              {CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Midos Group. All rights reserved.</p>
          <p>
            {/* [PLACEHOLDER: company registration number] */}
            Registered in England &amp; Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
