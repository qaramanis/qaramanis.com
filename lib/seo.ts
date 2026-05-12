import type { Metadata } from "next";

export const SITE_URL = "https://qaramanis.com";
export const SITE_AUTHOR = "Apostolos Karamanis";

export type ProjectSlug =
  | "flow-lounge"
  | "gold-ice"
  | "repower-solutions"
  | "bloom-ai"
  | "digital-gallery";

export type ProjectSeo = {
  name: string;
  metaTitle: string;
  description: string;
  heroImage: string;
  heroImageWidth: number;
  heroImageHeight: number;
  heroImageAlt: string;
  externalUrl?: string;
  about: string[];
  keywords: string;
};

export const PROJECTS_SEO: Record<ProjectSlug, ProjectSeo> = {
  "flow-lounge": {
    name: "Flow Lounge",
    metaTitle: "Flow Lounge — Hookah Lounge Brand & Website",
    description:
      "Web design, brand collateral, and digital media for Flow Lounge — a hookah lounge brand curated by Titto Peronetti for restaurants, hotels, and private events.",
    heroImage:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-1.jpg",
    heroImageWidth: 1920,
    heroImageHeight: 1080,
    heroImageAlt: "Flow Lounge — hookah lounge brand by Titto Peronetti",
    externalUrl: "https://flowlounge.gr",
    about: ["Hospitality", "Events", "Hookah Culture", "Brand Identity"],
    keywords:
      "Flow Lounge, hookah lounge, Titto Peronetti, hospitality branding, restaurant website, event brand",
  },
  "gold-ice": {
    name: "Gold Ice",
    metaTitle: "Gold Ice — Website Design for Northern Greece's Ice Supplier",
    description:
      "Web design for Gold Ice — producing and distributing food-grade drinking ice across northern Greece since 2000. Built around clarity, hygiene, and quiet precision.",
    heroImage:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/gold-ice-1.png",
    heroImageWidth: 1920,
    heroImageHeight: 1027,
    heroImageAlt: "Gold Ice — food-grade ice supplier, northern Greece",
    externalUrl: "https://www.goldice.eu/",
    about: ["Food-grade Ice", "Distribution", "Northern Greece", "Web Design"],
    keywords:
      "Gold Ice, food-grade ice supplier, Thessaloniki, northern Greece, ice distribution, website design",
  },
  "repower-solutions": {
    name: "Repower Solutions",
    metaTitle: "Repower Solutions — Website Design for an Energy Engineering Firm",
    description:
      "Web design and brand collateral for Repower Solutions — a Thessaloniki-based technical firm delivering energy upgrades, photovoltaic systems, heat pumps, and engineering studies.",
    heroImage:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-solutions/repower-1.png",
    heroImageWidth: 1920,
    heroImageHeight: 1027,
    heroImageAlt:
      "Repower Solutions — energy upgrades and photovoltaics, Thessaloniki",
    about: [
      "Energy Engineering",
      "Photovoltaic Systems",
      "Heat Pumps",
      "Web Design",
      "Brand Collateral",
    ],
    keywords:
      "Repower Solutions, energy upgrades, photovoltaic systems, heat pumps, engineering studies, Thessaloniki",
  },
  "bloom-ai": {
    name: "Bloom AI",
    metaTitle: "Bloom AI — AI-Powered World News Platform",
    description:
      "System design and web design for Bloom AI — a personalized live news monitor with AI chat, insights, predictions, interactive components, and live trackers.",
    heroImage:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-1.png",
    heroImageWidth: 2842,
    heroImageHeight: 1526,
    heroImageAlt: "Bloom AI — live personalized news monitor interface",
    externalUrl: "https://monitor.qaramanis.com",
    about: [
      "Artificial Intelligence",
      "News Platform",
      "System Design",
      "Web Design",
      "Personalization",
    ],
    keywords:
      "Bloom AI, AI news platform, personalized news monitor, AI chat, predictions, interactive trackers",
  },
  "digital-gallery": {
    name: "Digital Gallery",
    metaTitle: "Digital Gallery — Personal Works",
    description:
      "A curated collection of personal works exploring the intersection of design, photography, and digital media — visual storytelling with modern aesthetics.",
    heroImage:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gallery/digital-gallery-image-1.png",
    heroImageWidth: 2842,
    heroImageHeight: 1526,
    heroImageAlt: "Digital Gallery — personal works by Apostolos Karamanis",
    externalUrl: "https://gallery.qaramanis.com",
    about: [
      "Personal Works",
      "Design",
      "Photography",
      "Digital Media",
      "Visual Storytelling",
    ],
    keywords:
      "Digital Gallery, personal works, photography, digital media, visual design, Apostolos Karamanis",
  },
};

export function getProjectMetadata(slug: ProjectSlug): Metadata {
  const p = PROJECTS_SEO[slug];
  const fullTitle = `${p.metaTitle} | ${SITE_AUTHOR}`;

  return {
    title: fullTitle,
    description: p.description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: p.metaTitle,
      description: p.description,
      url: `${SITE_URL}/${slug}`,
      type: "article",
      images: [
        {
          url: p.heroImage,
          width: p.heroImageWidth,
          height: p.heroImageHeight,
          alt: p.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.description,
      images: [p.heroImage],
    },
  };
}

export function getProjectStructuredData(slug: ProjectSlug) {
  const p = PROJECTS_SEO[slug];
  const canonicalUrl = `${SITE_URL}/${slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
      url: p.externalUrl ?? canonicalUrl,
      image: p.heroImage,
      creator: {
        "@type": "Person",
        name: SITE_AUTHOR,
        url: SITE_URL,
      },
      about: p.about,
      keywords: p.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: p.name,
          item: canonicalUrl,
        },
      ],
    },
  ];
}
