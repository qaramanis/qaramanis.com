import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import ImageMontage from "@/components/image-montage";
import Image from "next/image";

export default function FlowLoungeContent() {
  const media = (
    <>
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-1.jpg"
          alt="Flow Lounge website hero - hookah lounge brand by Titto Peronetti"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-banner.png"
          alt="Flow Lounge brand banner"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-7.jpg"
          alt="Flow Lounge brand photography - atmosphere and identity"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-2.jpg"
          alt="Flow Lounge espresso martini cocktail"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-3.jpg"
          alt="Flow Lounge hookah lifestyle shot"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <ImageMontage className="object-cover object-bottom" />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-4.jpg"
          alt="Flow Lounge curated hookah arrangement"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-5.jpg"
          alt="Flow Lounge branded apparel - t-shirt collateral"
          fill
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 aspect-square bg-accent/30 relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/flow-lounge/images/flow-lounge-6.jpg"
          alt="Flow Lounge brand photography - guitar lifestyle shot"
          fill
          className="object-cover object-center"
        />
      </div>
    </>
  );

  const description = (
    <>
      Flow Lounge, under the curation and signature of Titto Peronetti, presents
      a comprehensive service designed for restaurants, hotels, enterprises, and
      private events.
      <br />
      <br />
      The new Flow Lounge website and visual identity embody an evolution of
      design and digital storytelling. Shaped by years of expertise, global
      recognition, and a profound connection to modern hookah culture.
    </>
  );

  const footer = (
    <>
      <ProjectMeta
        label="My Role"
        items={["Web Design", "Brand Collateral", "Digital Media"]}
      />
      <ProjectMeta
        label="Collaborators"
        items={["Titto Peronetti"]}
        className="col-span-6 col-start-7 md:col-start-3 md:col-span-2"
      />
      <ProjectLink
        href="https://flowlounge.gr"
        label="View Website"
        ariaLabel="Visit Flow Lounge website, opens in new tab"
        className="col-span-6 md:col-span-3 md:col-start-5"
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
