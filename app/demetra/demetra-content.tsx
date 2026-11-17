import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import DemoVideo from "@/components/demetra/demo-video";
import Image from "next/image";

export default function DemetraContent() {
  const media = (
    <>
      <DemoVideo />
      <div className="col-span-12 w-full aspect-[2844/1528] bg-foreground relative">
        <Image
          src="/demetra/screenshot1.webp"
          alt="Demetra dashboard - the main crop of each 990 m block between Fresno and Tulare, and the crops, acres and revenue of one block"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2844/1528] bg-foreground relative">
        <Image
          src="/demetra/screenshot2.webp"
          alt="Demetra assistant - which crops follow tomatoes in Yolo County, answered from the crop history of the blocks"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="/demetra/screenshot3.webp"
          alt="Demetra filters - the 2023 prediction year, the crop and county filters and the map layers, next to a predicted rice block and its model score"
          fill
          sizes="50vw"
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="/demetra/screenshot4.webp"
          alt="Demetra detail panel - one block in Tulare County and the soil below its walnuts: Storie index, texture, organic matter and pH"
          fill
          sizes="50vw"
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2844/1528] bg-foreground relative">
        <Image
          src="/demetra/screenshot5.webp"
          alt="Demetra climate layer - the heat days of 2022 across the Central Valley of California"
          fill
          className="object-cover bg-foreground"
        />
      </div>
    </>
  );

  const description = (
    <>
      What to plant next season is the biggest decision of the farm year, and it
      is still made largely by habit. Farmers rarely have the data to see how a
      field has performed, what its soil and climate support, or what another
      crop would earn - and a wrong choice costs a full season. This project
      uses data from the United States only.
      <br />
      <br />
      Demetra, built for the NASA Space Apps Challenge 2026, puts that
      information on one map. For every 990m block of California cropland,
      it shows what grew there each year, its estimated revenue, the soil below
      it and the climate of the year. It then predicts the next crop, and an AI
      assistant answers questions about any block.
      <br />
      <br />
      Designed as one system, from the database to the map. Six years of USDA
      Cropland Data Layer, gSSURGO soil and NASA POWER climate data cover
      150,000+ blocks in Postgres and PostGIS. An ExtraTrees model trained on
      that data makes the prediction, and the assistant reads the same data
      through tool calls. The API returns values, not geometry: the browser
      derives each square from its block id, which makes the payload 8x
      smaller.
    </>
  );

  const footer = (
    <>
      <ProjectMeta label="My Role" items={["System Design"]} />
      <ProjectLink
        href="https://demetra.qaramanis.com"
        label="View Website"
        ariaLabel="Visit Demetra website, opens in new tab"
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
