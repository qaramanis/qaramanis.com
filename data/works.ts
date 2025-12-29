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
    title: "Flow Lounge",
    description: "Web Design, Visual Works",
    categories: ["Web Design", "Branding", "Digital Media"],
    imageUrl:
      "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/flow-1.png",
    url: "/flow-lounge",
  },
  {
    id: 2,
    title: "Vidavo S.A.",
    description: "NDA",
    categories: [""],
    imageUrl: "/works/images/vidavo-nda.png",
  },
];
