import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import ProjectMeta from "@/components/project-meta";
import Image from "next/image";

export default function AgoraMcpContent() {
  const media = (
    <>
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <video
          src="/agora-mcp/loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-12 w-full aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <video
          src="/agora-mcp/reel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="/agora-mcp/screenshot1.png"
          alt="Agora MCP website - quickstart, Connected in a minute, with the supported MCP clients"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="/agora-mcp/screenshot2.png"
          alt="Agora MCP website - The same tools, without an agent, with an HTTP request and its JSON response"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2844/1528] bg-foreground relative">
        <Image
          src="/agora-mcp/screenshot3.png"
          alt="Agora MCP website - one prompt to your agent, the tools it calls in order and the registry that answers it"
          fill
          className="object-cover bg-foreground"
        />
      </div>
    </>
  );

  const description = (
    <>
      Agora MCP lets you ask your government a question. Public registries are
      exposed as MCP servers, so Claude, Cursor or any assistant can query
      spending, procurement, open datasets and public services in plain
      language.
      <br />
      <br />
      Designed as one system, from the servers to the website: seven official
      registries, fifty tools (and counting). Every answer carrying the licence and
      attribution of the registry it came from.
    </>
  );

  const footer = (
    <>
      <ProjectMeta label="My Role" items={["System Design", "Web Design"]} />
      <ProjectLink
        href="https://agora.qaramanis.com"
        label="View Website"
        ariaLabel="Visit Agora MCP website, opens in new tab"
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
