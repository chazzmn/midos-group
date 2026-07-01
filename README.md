# Midos Group — Website

A production-ready marketing site for **Midos Group**, a privately-owned London
real estate investment and family office group. Built with Next.js (App Router),
TypeScript and Tailwind CSS, and configured for a fully static export that
deploys to Vercel with zero extra configuration.

---

## Tech stack

- **Next.js 15** (App Router) with static export (`output: "export"`)
- **TypeScript** in strict mode (unused imports/vars fail the build)
- **Tailwind CSS 3** for styling
- **next/font** for self-hosted Google fonts (Source Serif 4 + Inter)
- **next/image** for image placeholders
- No runtime dependencies beyond React and Next.

---

## Prerequisites

- **Node.js 18.18 or newer** (Node 20 LTS recommended) — check with `node -v`
- A package manager (`npm` ships with Node)

---

## 1. Install dependencies

From the project folder:

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open **http://localhost:3000**. The page hot-reloads as you edit files.

To preview the production build locally:

```bash
npm run build     # outputs a static site to ./out
npx serve out     # serves the exported files (or use any static server)
```

`npm run lint` runs ESLint. The build itself will fail on type errors or unused
imports, so a clean `npm run build` means the project is sound.

## 3. Push to a new GitHub repository

Create an **empty** repository on GitHub (no README/licence), then:

```bash
git init
git add .
git commit -m "Initial commit: Midos Group website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/midos-group.git
git push -u origin main
```

## 4. Deploy on Vercel (zero config)

1. Go to **https://vercel.com/new** and sign in with GitHub.
2. **Import** the `midos-group` repository.
3. Vercel auto-detects Next.js — leave every setting at its default and click
   **Deploy**. No environment variables or build overrides are needed.
4. You get a live `*.vercel.app` URL. Add a custom domain under
   **Project → Settings → Domains** when ready.

Because the project uses `output: "export"`, it also deploys as-is to Netlify,
Cloudflare Pages, GitHub Pages, or any static host — just publish the `out/`
folder.

---

## Project structure

```
midos-group/
├── app/
│   ├── layout.tsx        # <html>, fonts, SEO metadata, Organization JSON-LD
│   ├── page.tsx          # Home page — composes all sections
│   ├── globals.css       # Tailwind layers + base styles
│   ├── icon.svg          # Favicon (auto-linked by Next.js)
│   ├── robots.ts         # Static robots.txt
│   └── sitemap.ts        # Static sitemap.xml
├── components/
│   ├── Header.tsx        # Sticky nav + collapsible mobile menu
│   ├── Hero.tsx          # Single <h1>, positioning statement, CTAs
│   ├── About.tsx
│   ├── Approach.tsx      # Investment Approach (3 pillars)
│   ├── WhatWeLike.tsx    # Target assets / opportunities
│   ├── Team.tsx          # Four team cards with placeholder headshots
│   ├── Regions.tsx       # Where we invest (UK regions)
│   ├── Contact.tsx       # Segmented enquiry form + office details
│   ├── Footer.tsx
│   ├── Reveal.tsx        # Scroll-triggered fade-in (IntersectionObserver)
│   └── SectionHeading.tsx
├── lib/
│   └── content.ts        # All copy, nav, team and contact data in one place
├── public/
│   ├── og-image.svg      # Placeholder Open Graph image (1200×630)
│   └── team-placeholder.svg
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

---

## Placeholders to replace before sending

Everything below is marked in the code with `[PLACEHOLDER: ...]` comments — search
the project for `PLACEHOLDER` to find each one.

| What | Where |
| --- | --- |
| Production domain (`https://www.midosgroup.com`) | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` |
| Phone, email, office address | `lib/content.ts` (`CONTACT`) |
| LinkedIn company URL | `lib/content.ts`, `app/layout.tsx` |
| Team headshots | `public/team-placeholder.svg` → drop real photos in `public/` and update `src` in `components/Team.tsx` |
| Logo (currently a text wordmark) | `components/Header.tsx`, `components/Footer.tsx`, `app/icon.svg` |
| OG image | `public/og-image.svg` — replace with a real **1200×630 PNG/JPG** (some social platforms do not render SVG previews) and update the paths in `app/layout.tsx` |
| Company registration number | `components/Footer.tsx` |
| UK regions covered | `lib/content.ts` (`SERVICE_AREAS`) |

### Making the contact form live

The form is a static demo — on submit it shows a confirmation but sends nothing.
To make it deliver enquiries without adding a backend, point it at a form service:

1. Create a form on [Formspree](https://formspree.io) (or Basin / Getform).
2. In `components/Contact.tsx`, replace the `handleSubmit` demo logic with a
   `fetch("https://formspree.io/f/XXXX", { method: "POST", body: ... })` call, or
   set the `<form action="https://formspree.io/f/XXXX" method="POST">` attributes
   and remove `event.preventDefault()`.

---

## Notes

- **Design:** deep navy, charcoal and off-white with a single muted bronze
  accent; Source Serif 4 headings over Inter body copy. No stock photography —
  section backgrounds use subtle architectural line motifs.
- **Responsive:** mobile-first, verified at 375 / 768 / 1440px. The nav collapses
  to a menu below `lg`, and every section stacks cleanly.
- **Accessibility:** semantic landmarks, a single `<h1>`, skip link, visible
  focus rings, labelled form fields, and `prefers-reduced-motion` support that
  disables the scroll animations.
- **SEO:** descriptive title/meta, Open Graph + Twitter cards, Organization
  JSON-LD, sitemap and robots files.
