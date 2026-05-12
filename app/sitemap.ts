import type { MetadataRoute } from "next";
import { PROJECTS_SEO, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...Object.keys(PROJECTS_SEO).map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
