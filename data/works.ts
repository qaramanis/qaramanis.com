export type WorkCategory =
  | "Web Design"
  | "Branding / Digital Media"
  | "System Design"
  | "";

export interface Work {
  id: number;
  title: string;
  description: string;
  categories: WorkCategory[];
  imageUrl?: string;
  videoUrl?: string;
  url?: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Vidavo S.A.",
    description: "NDA",
    categories: [""],
    imageUrl: "/works/vidavo-nda.png",
  },
  {
    id: 2,
    title: "Flow Lounge",
    description: "Web Design and Digital Direction",
    categories: ["Web Design", "Branding / Digital Media"],
    videoUrl: "/videos/flow-lounge/flow-lounge.mp4",
    url: "/flow-lounge",
  },
  // {
  //   id: 3,
  //   title: "Digital Gallery",
  //   description: "Collection of Personal Works",
  //   categories: ["Web Design", "Branding / Digital Media"],
  //   url: "/digital-gallery",
  // },
  {
    id: 4,
    title: "Bloom AI",
    description: "AI Intelligence Startup",
    categories: ["System Design", "Web Design"],
    url: "/bloom-ai",
  },
  // {
  //   id: 3,
  //   title: "Repower Solutions",
  //   description: "Web Design",
  //   categories: ["Web Design"],
  //   imageUrl:
  //     "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-1.png",
  //   url: "/repower-solutions",
  // },
  // {
  //   id: 4,
  //   title: "GDD Digital",
  //   description: "Web Design",
  //   categories: ["Web Design", "Branding", "Digital Media"],
  //   imageUrl:
  //     "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-1.png",
  //   url: "/gdd-digital",
  // },
];
