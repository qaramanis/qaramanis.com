"use client";

import AutoplayVideo from "@/components/autoplay-video";

export default function AgoraMcpWorkItem() {
  return (
    <div className="relative w-full h-full bg-[var(--color-agora-mcp)] flex items-center justify-center overflow-hidden">
      <AutoplayVideo
        src="/agora-mcp/loop.mp4"
        priority
        className="w-full h-auto scale-130 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
      />
    </div>
  );
}
