import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import Image from "next/image";

export default function GoldIceContent() {
  const media = (
    <>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/gold-ice-1.png"
          alt="Gold Ice website hero - food-grade ice supplier, northern Greece"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/gold-ice-2.png"
          alt="Gold Ice website - product and brand section"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gold-ice/gold-ice-3.png"
          alt="Gold Ice website - distribution and services section"
          fill
          className="object-cover bg-foreground"
        />
      </div>
    </>
  );

  const description = (
    <>
      Gold Ice has been producing and distributing clean, food-grade drinking
      ice across northern Greece since 2000, serving cafés, bars, restaurants,
      hotels, and households through its own fleet of refrigerated trucks.
      <br />
      <br />
      The new Gold Ice website translates over two decades of reliability into a
      considered digital presence. Built around clarity, hygiene, and the quiet
      precision the product demands.
    </>
  );

  const footer = (
    <>
      <ProjectMeta label="My Role" items={["Web Design"]} />
      <ProjectLink
        href="https://www.goldice.eu/"
        label="View Website"
        className="col-span-6 md:col-span-3 md:col-start-3"
      />
    </>
  );

  return (
    <ProjectPageLayout
      media={media}
      description={description}
      footer={footer}
    />
  );
}
