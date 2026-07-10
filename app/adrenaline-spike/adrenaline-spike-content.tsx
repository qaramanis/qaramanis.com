import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import Image from "next/image";

export default function AdrenalineSpikeContent() {
  const media = (
    <>
      <div className="col-span-12 aspect-[1586/656] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/banner.png"
          alt="Adrenaline Spike logo - rider on a dirt bike over the rental off-road bikes wordmark"
          fill
          priority
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot1.png"
          alt="Adrenaline Spike website hero - Rent a bike. Spike your limits."
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot2.png"
          alt="Adrenaline Spike website - FAQ section, Questions Answered"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot3.png"
          alt="Adrenaline Spike website - footer with mountain brand mark and site links"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 aspect-[2844/1528] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot4.png"
          alt="Adrenaline Spike website - find your booking page with reservation lookup"
          fill
          className="object-cover bg-foreground"
        />
      </div>
    </>
  );

  const description = (
    <>
      Adrenaline Spike is an off-road motorcycle rental shop at the foot of
      Mount Chortiátis in Thessaloniki, renting enduro and adventure bikes
      along with the equipment to ride them.
      <br />
      <br />
      Identity and website were built as one system: a technical,
      blueprint-inspired visual language, carried through a live bike fleet, real-time availability, and a
      complete booking experience.
    </>
  );

  const footer = (
    <>
      <ProjectMeta label="My Role" items={["Web Design", "Brand Identity"]} />
      <ProjectLink
        href="https://www.adrenalinespike.gr/"
        label="View Website"
        ariaLabel="Visit Adrenaline Spike website, opens in new tab"
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
