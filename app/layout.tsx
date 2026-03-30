import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from "@/providers/lenis-provider";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "Apostolos Karamanis - Creative Developer & Designer",
  description:
    "Independent creative developer from Thessaloniki, Greece. Specializing in web design, branding, creative direction, and digital experiences. He designs and builds modern, animation-rich websites with Next.js, React, and TypeScript.",
  keywords:
    "Apostolos Karamanis, Creative Developer, Web Design, Branding, Creative Direction, Web Development, Next.js, React, TypeScript, GSAP, Freelance, Thessaloniki, Greece",
  authors: [{ name: "Apostolos Karamanis" }],
  creator: "Apostolos Karamanis",
  publisher: "Apostolos Karamanis",

  openGraph: {
    title: "Apostolos Karamanis - Creative Developer & Designer",
    description:
      "Independent creative developer from Greece. Web design, branding, creative direction, and digital experiences — designed and built as one unified vision.",
    url: "https://qaramanis.com/",
    siteName: "Apostolos Karamanis - Creative Developer & Designer",
    images: [
      {
        url: "https://qaramanis.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apostolos Karamanis - Personal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apostolos Karamanis - Creative Developer & Designer",
    description:
      "Independent creative developer from Greece. Web design, branding, creative direction, and animation-rich digital experiences.",
    images: ["https://qaramanis.com/og-image.jpg"],
    creator: "@qaramanis",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://qaramanis.com/",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Apostolos Karamanis",
              url: "https://qaramanis.com",
              image: "https://qaramanis.com/profile-image.jpg",
              sameAs: [
                "https://x.com/qaramanis",
                "https://github.com/qaramanis",
                "https://www.linkedin.com/in/apostolos-karamanis/",
              ],
              jobTitle: "Creative Developer & Designer",
              worksFor: {
                "@type": "Organization",
                name: "Vidavo S.A.",
              },
              knowsAbout: [
                "Web Design",
                "Web Development",
                "Creative Direction",
                "Branding",
                "Design Strategy",
                "Digital Media",
                "Typography",
                "Visual Design",
                "User Experience",
                "Next.js",
                "React",
                "TypeScript",
                "GSAP",
                "Framer Motion",
                "Animation",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Macedonia",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Thessaloniki",
                addressCountry: "Greece",
              },
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        <LenisProvider />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
        {/*<InvertedCircleCursor />*/}
      </body>
    </html>
  );
}
