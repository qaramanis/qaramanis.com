"use client";

import { useState } from "react";
import AutoplayVideo from "@/components/autoplay-video";

// The demo is long, so on a slow connection it can wait for data before it
// plays. A spinner shows over the poster while it waits. It appears after a
// short delay, so a short wait does not make it flash. With reduced motion the
// video does not play, so the spinner does not show.
export default function DemoVideo() {
  const [waiting, setWaiting] = useState(false);

  return (
    <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1906/1020] bg-foreground relative overflow-hidden">
      <AutoplayVideo
        src="/demetra/demo.mp4"
        poster="/demetra/demo-poster.webp"
        ariaLabel="Demetra dashboard walkthrough - the main crop of each block across California, the climate layer, the soil and revenue of one block, the 2023 crop prediction and the assistant answering a question about a block"
        priority
        onWaiting={() => setWaiting(true)}
        onPlaying={() => setWaiting(false)}
        className="w-full h-full object-cover"
      />
      {waiting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none motion-reduce:hidden transition-opacity duration-300 delay-300 starting:opacity-0">
          <div
            role="status"
            aria-label="Loading video"
            className="p-2 rounded-full bg-foreground/60"
          >
            <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}
