import type { MetadataRoute } from "next";

// [PLACEHOLDER: replace with the real production domain before launch]
const SITE_URL = "https://www.midosgroup.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
