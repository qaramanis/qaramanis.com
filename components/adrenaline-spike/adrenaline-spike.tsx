"use client";

import AutoplayVideo from "@/components/autoplay-video";

// The dots continue the dot grid of the loop video past its faded edges.
// Values are in cqw (1% of the card width), so they follow the video at every
// card size: the video is the card width x1.2, so 1 video px = 1.2/1920 x 100
// = 0.0625cqw. They match the first frame of the loop: a 35.74px grid, with a
// dot column 17.37px right of centre and a dot row 0.8px above centre. The
// camera zooms in and out during the loop, so the match is exact only there.
// The dots fade out over the outer 20% of the card. The video band starts at
// 23% from the top and bottom, so they are at full strength where they meet it.
export default function AdrenalineSpikeWorkItem() {
  return (
    <div className="@container relative w-full h-full bg-[var(--color-adrenaline-spike)] flex items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle,var(--color-adrenaline-spike-dot)_0.09cqw,transparent_0.19cqw)] bg-[size:2.234cqw_2.234cqw] bg-[position:calc(50%_+_1.086cqw)_calc(50%_-_0.05cqw)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <AutoplayVideo
        src="/adrenaline-spike/loop.mp4"
        priority
        className="relative w-full h-auto scale-120 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
      />
    </div>
  );
}
