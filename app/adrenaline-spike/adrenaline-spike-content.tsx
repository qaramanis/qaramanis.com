import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import AutoplayVideo from "@/components/autoplay-video";
import Image from "next/image";

export default function AdrenalineSpikeContent() {
  const media = (
    <>
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-[var(--color-adrenaline-spike)] relative overflow-hidden">
        <AutoplayVideo
          src="/adrenaline-spike/loop.mp4"
          poster="/adrenaline-spike/loop-poster.webp"
          ariaLabel="Adrenaline Spike booking flow as one moving shape - Check Availability, the availability calendar, rental days, gear, booking search and a confirmed booking"
          priority
          className="w-full h-full object-cover"
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
      <div className="col-span-12 aspect-[2844/1621] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot2.png"
          alt="Adrenaline Spike website - Check Availability, the live calendar with open, few and full days"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot3.webp"
          alt="Adrenaline Spike website - Rieju Aventura 307 fleet card with specs and the daily price"
          fill
          sizes="50vw"
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-accent/30 relative">
        <Image
          src="/adrenaline-spike/screenshot4.png"
          alt="Adrenaline Spike website - Find your booking, a confirmed reservation looked up by its code"
          fill
          sizes="50vw"
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
      <ProjectMeta
        label="My Role"
        items={["Web Design", "Brand Identity", "System Design"]}
      />
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
