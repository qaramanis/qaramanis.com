import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";

export default function HqcGreeceContent() {
  // Placeholders until the website screenshots are ready.
  const media = (
    <>
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative" />
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative" />
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative" />
      <div className="col-span-12 aspect-[1920/1027] bg-accent/30 relative" />
    </>
  );

  const description = (
    <>
      HQC (Halal Quality Control) is a halal certification body active since
      1983. Its Greece office guides companies through the certification of
      their products, with audits held to strict standards of confidentiality
      and impartiality.
      <br />
      <br />
      The new HQC Greece website turns a demanding certification process into a
      clear experience. Built around trust, transparency, and four decades of
      certification work.
    </>
  );

  const footer = (
    <>
      <ProjectMeta label="My Role" items={["Web Design", "System Design"]} />
      <ProjectLink
        disabled
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
