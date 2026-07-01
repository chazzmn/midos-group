import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// [PLACEHOLDER: replace with the real production domain before launch]
const SITE_URL = "https://www.midosgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Midos Group | Private Real Estate Investment, London",
  description:
    "Midos Group is a privately-owned London family office investing in UK real estate, adding strategic insight and operational depth across its projects.",
  keywords: [
    "Midos Group",
    "real estate investment",
    "family office",
    "London",
    "UK property investment",
    "asset management",
  ],
  authors: [{ name: "Midos Group" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Midos Group",
    title: "Midos Group | Private Real Estate Investment, London",
    description:
      "A privately-owned London family office investing in UK real estate, adding strategic insight and operational depth across its projects.",
    images: [
      {
        // [PLACEHOLDER: replace with a real 1200x630 OG image]
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Midos Group — Private Real Estate Investment, London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midos Group | Private Real Estate Investment, London",
    description:
      "A privately-owned London family office investing in UK real estate, adding strategic insight and operational depth across its projects.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Organization schema for rich results. Contact details are placeholders.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Midos Group",
  description:
    "Privately-owned London family office investing in UK real estate, adding strategic insight and operational experience across its investments and projects.",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.svg`,
  industry: "Real Estate Investment",
  areaServed: "GB",
  address: {
    "@type": "PostalAddress",
    // [PLACEHOLDER: real office address]
    streetAddress: "Registered office address",
    addressLocality: "London",
    addressCountry: "GB",
  },
  sameAs: [
    // [PLACEHOLDER: real LinkedIn company URL]
    "https://www.linkedin.com/company/midos-group",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
