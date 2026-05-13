import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import DigitalGalleryAnimation from "@/components/digital-gallery-animation";
import Image from "next/image";

export default function DigitalGalleryContent() {
  const media = (
    <>
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <DigitalGalleryAnimation className="scale" />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gallery/digital-gallery-image-1.png"
          alt="Digital Gallery - personal work 01"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gallery/digital-gallery-image-2.png"
          alt="Digital Gallery - personal work 02"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gallery/digital-gallery-image-3.png"
          alt="Digital Gallery - personal work 03"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/gallery/digital-gallery-image-4.png"
          alt="Digital Gallery - personal work 04"
          fill
          className="object-cover bg-foreground"
        />
      </div>
    </>
  );

  const description = (
    <>
      A curated collection of personal works exploring the intersection of
      design, photography, and digital media.
      <br />
      <br />
      Each piece reflects a distinct moment of creative expression - blending
      visual storytelling with modern aesthetics.
    </>
  );

  const footer = (
    <ProjectLink
      href="https://gallery.qaramanis.com"
      label="View Website"
      ariaLabel="Visit Digital Gallery website, opens in new tab"
      className="col-span-6 md:col-span-3 md:col-start-1"
    />
  );

  return (
    <ProjectPageLayout
      media={media}
      description={description}
      footer={footer}
    />
  );
}
