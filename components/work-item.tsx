"use client";

import { useState } from "react";
import Image from "next/image";
import type { Work } from "@/data/works";
import Skeleton from "./skeleton-loader";

interface WorkItemProps {
  work: Work;
}

export default function WorkItem({ work }: WorkItemProps) {
  const [loaded, setLoaded] = useState(work.media.type === "component");

  const handleClick = () => {
    if (work.url) window.open(work.url, "_self");
  };

  return (
    <div
      className={`group ${work.url ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      <div className="aspect-[1080/1350] bg-foreground mb-2 overflow-hidden relative">
        {!loaded && (
          <Skeleton className="hidden absolute inset-0 rounded-none" />
        )}
        {work.media.type === "video" && (
          <video
            src={work.media.src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setLoaded(true)}
            className="w-full h-full object-cover transition-all duration-500 grayscale"
          />
        )}
        {work.media.type === "image" && (
          <Image
            src={work.media.src}
            alt={work.title}
            fill
            onLoad={() => setLoaded(true)}
            className="object-cover object-top transition-all duration-500"
          />
        )}
        {work.media.type === "component" && work.media.render()}
      </div>
      <div className="flex items-center justify-between text-xl">
        <h3>{work.title}</h3>
        <span className="text-accent text-lg">{work.description}</span>
      </div>
    </div>
  );
}
