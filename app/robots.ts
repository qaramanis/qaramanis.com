import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/fonts/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/*.pdf$"],
      },
    ],
    sitemap: "https://qaramanis.com/sitemap.xml",
    host: "https://qaramanis.com",
  };
}
