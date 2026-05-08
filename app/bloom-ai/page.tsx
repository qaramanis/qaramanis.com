"use client";

import ViewAll from "@/components/view-all-container";
import DigitalGalleryAnimation from "@/components/digital-gallery-animation";
import { Link, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Monitor() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 w-screen -ml-2 md:-ml-4 lg:-ml-8 aspect-[1920/1080] bg-foreground relative overflow-hidden">
        <video
          src={
            "https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-video.mp4"
          }
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-1.png"
          alt="Monitor Image"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-2.png"
          alt="Monitor Image"
          fill
          className="object-cover bg-foreground"
        />
      </div>

      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-3.png"
          alt="Monitor Image"
          fill
          className="object-cover bg-foreground object-right"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-4.png"
          alt="Monitor Image"
          fill
          className="object-cover bg-foreground object-right"
        />
      </div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        A complete world news platform powered by AI, providing the user with a
        live personalized monitor. AI chat, insights and predictions,
        interactive components, live trackers, user engagement and
        personalization.
        <br />
        <br />
        Keep everything in one place and monitor the situation with ease. Have
        and edge against the competition.
      </div>

      <div className="col-span-12 border-none border-foreground mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8"></div>

      <a
        href="https://monitor.qaramanis.com"
        target="_blank"
        className="flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary col-span-3 md:col-span-2 md:col-start-1 text-lg md:text-xl text-foreground font-medium group"
      >
        <Link className="self-center size-4.5 hidden md:block" />
        View Website
        <Link className="self-center size-4 block md:hidden" />
      </a>
      <button
        onClick={() => setVideoOpen(true)}
        className="flex flex-row mt-4 md:mt-0 gap-2 size-fit btn-primary col-span-3 md:col-span-3 md:col-start-3 text-lg md:text-xl text-foreground font-medium group cursor-pointer"
      >
        <Play className="self-center size-4.5 hidden md:block" />
        View Demo
        <Play className="self-center size-4 block md:hidden" />
      </button>
      <ViewAll />

      {/* YouTube Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-4 right-4 text-white cursor-pointer"
          >
            <X className="size-8" />
          </button>
          <div
            className="w-[90vw] max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/ozCRY6v-U00?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
