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
    imageUrl: "/works/images/flow-lounge.png",
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
