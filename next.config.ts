import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5ios91bhrgnfxlta.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
