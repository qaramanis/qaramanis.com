"use client";

import ProjectPageLayout from "@/components/project-page-layout";
import ProjectLink from "@/components/project-link";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BloomAIContent() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const openDialog = () => {
    setVideoOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const media = (
    <>
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
          alt="Bloom AI - live personalized news monitor interface"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-12 w-full aspect-[2842/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-2.png"
          alt="Bloom AI - AI chat, insights and predictions"
          fill
          className="object-cover bg-foreground"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-3.png"
          alt="Bloom AI - interactive components and live trackers"
          fill
          className="object-cover bg-foreground object-right"
        />
      </div>
      <div className="col-span-6 w-full aspect-[1640/1526] bg-foreground relative">
        <Image
          src="https://5ios91bhrgnfxlta.public.blob.vercel-storage.com/bloom-ai/bloom-ai-4.png"
          alt="Bloom AI - user personalization and engagement"
          fill
          className="object-cover bg-foreground object-right"
        />
      </div>
    </>
  );

  const description = (
    <>
      A complete world news platform powered by AI, providing the user with a
      live personalized monitor. AI chat, insights and predictions, interactive
      components, live trackers, user engagement and personalization.
      <br />
      <br />
      Keep everything in one place and monitor the situation with ease. Have and
      edge against the competition.
    </>
  );

  const footer = (
    <>
      <ProjectLink
        href="https://monitor.qaramanis.com"
        label="View Website"
        ariaLabel="Visit Bloom AI website, opens in new tab"
        className="col-span-3 md:col-span-2 md:col-start-1"
      />
      <ProjectLink
        onClick={openDialog}
        label="View Demo"
        icon={Play}
        ariaLabel="Open Bloom AI demo video"
        className="col-span-3 md:col-span-3 md:col-start-3"
      />
    </>
  );

  return (
    <>
      <ProjectPageLayout
        media={media}
        description={description}
        footer={footer}
      />

      <dialog
        ref={dialogRef}
        onClose={() => setVideoOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        aria-label="Bloom AI demo video"
        className="fixed inset-0 z-50 w-full h-full max-w-none max-h-none m-0 p-0 border-none bg-transparent backdrop:bg-black/80 open:flex items-center justify-center"
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Close video"
          className="absolute top-4 right-4 text-white cursor-pointer"
        >
          <X className="size-8" aria-hidden />
        </button>
        <div className="w-[90vw] max-w-5xl aspect-video">
          {videoOpen && (
            <iframe
              src="https://www.youtube.com/embed/ozCRY6v-U00?autoplay=1"
              title="Bloom AI demo video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
