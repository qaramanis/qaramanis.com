"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";
import AutoplayVideo from "./autoplay-video";

interface WorkItemProps {
  work: Work;
}

export default function WorkItem({ work }: WorkItemProps) {
  // Media is hidden while it loads, then it fades in. Images start visible:
  // the server HTML never hides them, so a loaded image does not wait for JS.
  const [pending, setPending] = useState(work.media.type === "video");
  const fade = pending
    ? "opacity-0"
    : "opacity-100 transition-opacity duration-300 ease-out";

  const content = (
    <>
      <div className="aspect-[1080/1350] bg-foreground mb-2 overflow-hidden relative">
        {work.media.type === "video" && (
          <AutoplayVideo
            src={work.media.src}
            onLoadedData={() => setPending(false)}
            className={`w-full h-full object-cover grayscale ${fade}`}
          />
        )}
        {work.media.type === "image" && (
          <Image
            ref={(img) => {
              if (img && !img.complete) setPending(true);
            }}
            src={work.media.src}
            alt={work.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            onLoad={() => setPending(false)}
            className={`object-cover object-top ${fade}`}
          />
        )}
        {work.media.type === "component" && work.media.render()}
      </div>
      <div className="flex items-center justify-between text-xl">
        <h3>{work.title}</h3>
        <span className="text-accent text-lg">{work.description}</span>
      </div>
    </>
  );

  if (work.url) {
    return (
      <Link href={work.url} className="group block">
        {content}
      </Link>
    );
  }

  return <div className="group">{content}</div>;
}
