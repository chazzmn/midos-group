import type { MetadataRoute } from "next";

// [PLACEHOLDER: replace with the real production domain before launch]
const SITE_URL = "https://www.midosgroup.com";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
