import type { ReactNode } from "react";
import DigitalGalleryAnimation from "@/components/digital-gallery-animation";
import EventHorizon from "@/components/event-horizon";

export const WORK_CATEGORIES = [
  "Web Design",
  "Brand Identity",
  "System Design",
] as const;

export type WorkCategory = (typeof WORK_CATEGORIES)[number];

export type WorkMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "component"; render: () => ReactNode };

export interface Work {
  id: number;
  title: string;
  description: string;
  categories: WorkCategory[];
  url?: string;
  media: WorkMedia;
}

const workItems: Omit<Work, "id">[] = [
  {
    title: "Vidavo S.A.",
    description: "NDA",
    categories: [],
    media: { type: "image", src: "/works/vidavo-nda.png" },
  },
  {
    title: "Flow Lounge",
    description: "Web Design, Brand Identity",
    categories: ["Web Design", "Brand Identity"],
    url: "/flow-lounge",
    media: {
      type: "video",
      src: "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-lounge.mp4",
    },
  },
  {
    title: "Bloom AI",
    description: "System Design, Web Design",
    categories: ["System Design", "Web Design"],
    url: "/bloom-ai",
    media: {
      type: "component",
      render: () => (
        <EventHorizon
          rotate={0.1}
          rotationSpeed={0.1}
          diskIntensity={0.8}
          tilt={0.05}
          className="rotate-y-180"
          color="#d9d9d9"
        />
      ),
    },
  },
  {
    title: "Gold Ice",
    description: "Web Design",
    categories: ["Web Design"],
    url: "/gold-ice",
    media: {
      type: "image",
      src: "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg",
    },
  },
  {
    title: "Repower Solutions",
    description: "Web Design",
    categories: ["Web Design"],
    url: "/repower-solutions",
    media: {
      type: "image",
      src: "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/IMG_4302.jpg",
    },
  },
  // {
  //   title: "Digital Gallery",
  //   description: "Collection of Personal Works",
  //   categories: ["Web Design", "Branding / Digital Media"],
  //   url: "/digital-gallery",
  //   media: { type: "component", render: () => <DigitalGalleryAnimation /> },
  // },
  // {
  //   title: "Repower Solutions",
  //   description: "Web Design",
  //   categories: ["Web Design"],
  //   url: "/repower-solutions",
  //   media: {
  //     type: "image",
  //     src: "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-1.png",
  //   },
  // },
  // {
  //   title: "GDD Digital",
  //   description: "Web Design",
  //   categories: ["Web Design", "Branding / Digital Media"],
  //   url: "/gdd-digital",
  //   media: {
  //     type: "image",
  //     src: "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-1.png",
  //   },
  // },
];

export const works: Work[] = workItems.map((item, index) => ({
  ...item,
  id: index + 1,
}));
