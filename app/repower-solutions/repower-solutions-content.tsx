import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import Image from "next/image";

export default function RepowerSolutionsContent() {
  const media = (
    <>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-solutions/repower-1.png"
          alt="Repower Solutions website hero - energy upgrades and photovoltaics, Thessaloniki"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-solutions/repower-2.png"
          alt="Repower Solutions website - services overview"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-solutions/repower-4.png"
          alt="Repower Solutions website - photovoltaic systems and heat pumps"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/repower-solutions/repower-3.png"
          alt="Repower Solutions website - engineering studies section"
          fill
          className="object-cover bg-foreground"
        />
      </div>
    </>
  );

  const description = (
    <>
      Repower Solutions is a Thessaloniki-based technical and construction firm
      delivering complete energy upgrades, photovoltaic systems, heat pumps, and
      the engineering studies that hold them together.
      <br />
      <br />
      The new Repower Solutions website distills a broad service catalogue into
      a calm, navigable experience. Built around consistency, transparency, and
      the technical competence the practice is known for.
    </>
  );

  const footer = (
    <>
      <ProjectMeta label="My Role" items={["Web Design", "Brand Collateral"]} />
      <ProjectLink
        href="#"
        label="Website under construction"
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
