import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from "@/providers/lenis-provider";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "Apostolos Karamanis - Personal Portfolio",
  description:
    "Computer Science student from Thessaloniki, Greece. Specialized in Machine Learning, Web Development, and Data Analysis. Portfolio showcasing projects, awards, and experience.",
  keywords:
    "Apostolos Karamanis, Computer Science, Web Developer, Machine Learning, Data Analysis, Thessaloniki, Greece, Portfolio",
  authors: [{ name: "Apostolos Karamanis" }],
  creator: "Apostolos Karamanis",
  publisher: "Apostolos Karamanis",

  openGraph: {
    title: "Apostolos Karamanis - Computer Science Student & Web Developer",
    description:
      "Computer Science student specializing in Machine Learning, Web Development, and Data Analysis",
    url: "https://qaramanis.com/",
    siteName: "Apostolos Karamanis - Personal Portfolio",
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
    title: "Apostolos Karamanis - Computer Science Student & Web Developer",
    description:
      "Computer Science student specializing in Machine Learning, Web Development, and Data Analysis",
    images: ["https://yourdomain.com/og-image.jpg"],
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
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Vidavo S.A.",
              },
              knowsAbout: [
                "Machine Learning",
                "Web Development",
                "Data Analysis",
                "Visual Design",
                "User Experience",
                "Web Design",
                "Creative Direction",
                "Branding",
                "Design Strategy",
                "Digital Media",
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
