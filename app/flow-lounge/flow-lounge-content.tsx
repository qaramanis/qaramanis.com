import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import ImageMontage from "@/components/image-montage";
import Image from "next/image";

export default function FlowLoungeContent() {
  const media = (
    <>
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/flow-lounge/screenshot1.webp"
          alt="Flow Lounge website hero - Our mission is to bring people joy, over the FLOW LOUNGE wordmark"
          fill
          priority
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/flow-lounge/screenshot2.webp"
          alt="Flow Lounge website - hookah page with the Classic, Premium and Exclusive tobacco cards"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/flow-lounge/screenshot3.webp"
          alt="Flow Lounge website - Smoke and play, the playroom section with board and console games"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/flow-lounge/screenshot4.webp"
          alt="Flow Lounge website - Past nights, event posters from the events page"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      <div className="col-span-12 w-full aspect-[1920/1080] bg-accent/30 relative">
        <Image
          src="/flow-lounge/images/flow-lounge-7.webp"
          alt="Flow Lounge neon sign - Sex, Smoke, Rock n Roll - above the bar"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      <div className="col-span-6 md:col-span-3 aspect-[2/3] bg-accent/30 relative">
        <Image
          src="/flow-lounge/images/flow-lounge-2.webp"
          alt="Flow Lounge espresso martini cocktail"
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover bg-foreground object-center"
        />
      </div>
      <div className="col-span-6 md:col-span-3 aspect-[2/3] bg-accent/30 relative">
        <Image
          src="/flow-lounge/images/flow-lounge-3.webp"
          alt="Flow Lounge crystal hookah with a Bonche bowl"
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover object-center"
        />
      </div>
      <div className="col-span-6 md:col-span-3 aspect-[2/3] bg-accent/30 relative">
        <ImageMontage
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover object-bottom"
        />
      </div>
      <div className="col-span-6 md:col-span-3 aspect-[2/3] bg-accent/30 relative">
        <Image
          src="/flow-lounge/images/flow-lounge-5.webp"
          alt="Flow Lounge branded apparel - t-shirt collateral"
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover bg-foreground object-center"
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
      <ProjectMeta label="My Role" items={["Web Design", "Brand Identity"]} />
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
