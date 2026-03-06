export type WorkCategory = "Web Design" | "Digital Media" | "Branding" | "";

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
    description: "Web Design, Visual Works",
    categories: ["Web Design", "Branding", "Digital Media"],
    imageUrl:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-1.png",
    url: "/flow-lounge",
  },
  {
    id: 3,
    title: "Digital Gallery",
    description: "Collection of Personal Works",
    categories: ["Web Design", "Digital Media"],
    url: "/digital-gallery",
  },
  // {
  //   id: 4,
  //   title: "Monitor",
  //   description: "Monitoring Platform",
  //   categories: ["Web Design", "Digital Media"],
  //   url: "/monitor",
  //   imageUrl:
  //     "https://swsskqtlrzcxayzlajmv.supabase.co/storage/v1/object/public/images/monitor-2.png",
  // },
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
