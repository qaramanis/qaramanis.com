import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LayoutWrapper from "@/components/layout-wrapper";

// Latin subset of ABCArealVariable.woff2, no stylistic sets (79 KB instead of 182 KB).
// One variable file covers every weight in use (400, 500, 700).
const areal = localFont({
  src: "../public/fonts/ABCAreal/ABCArealVariable-latin.woff2",
  weight: "400 700",
  variable: "--font-areal-web",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qaramanis.com"),
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
      "Independent creative developer from Greece. Web design, branding, creative direction, and digital experiences - designed and built as one unified vision.",
    url: "https://qaramanis.com/",
    siteName: "Apostolos Karamanis - Creative Developer & Designer",
    images: [
      {
        url: "https://qaramanis.com/apostolos-karamanis-creative-developer.jpg",
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
    images: [
      "https://qaramanis.com/apostolos-karamanis-creative-developer.jpg",
    ],
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
    // The head script adds "dark" to this class before React hydrates.
    <html lang="en" className={areal.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;try{if(localStorage.getItem("theme")==="dark")d.classList.add("dark")}catch(e){}var m=document.createElement("meta");m.name="theme-color";m.content=getComputedStyle(d).getPropertyValue("--background").trim();document.head.appendChild(m)})()`,
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
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
        {/*<InvertedCircleCursor />*/}
      </body>
    </html>
  );
}
