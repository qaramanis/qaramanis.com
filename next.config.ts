import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "5ios91bhrgnfxlta.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "8mxjmxhvgtye4fln.public.blob.vercel-storage.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "swsskqtlrzcxayzlajmv.supabase.co",
      // },
    ],
  },
};

export default nextConfig;
