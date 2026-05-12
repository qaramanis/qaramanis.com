# SEO Conventions

This document describes the SEO architecture of qaramanis.com and the checklist for keeping new pages indexable, shareable, and rich-result-eligible.

## Where metadata lives

- **Root metadata** — `app/layout.tsx` exports the site-wide `Metadata` object: default title/description, OpenGraph defaults, Twitter card defaults, `robots`, `alternates.canonical` for the home, Google verification, and a `metadataBase` of `https://qaramanis.com`. The root also injects a `Person` JSON-LD blob describing the site owner.
- **Centralized project SEO** — `lib/seo.ts` is the **single source of truth** for all per-project SEO inputs. It exports:
  - `PROJECTS_SEO` — a record keyed by slug containing each project's `name`, `metaTitle`, `description`, hero image (URL + dimensions + alt), optional `externalUrl`, `about` tags, and `keywords`.
  - `getProjectMetadata(slug)` — returns a fully-formed Next.js `Metadata` object for that project (title, description, canonical, OpenGraph, Twitter card).
  - `getProjectStructuredData(slug)` — returns the JSON-LD array (`CreativeWork` + `BreadcrumbList`) for that project.
- **Project page structure** — Every project route follows the same two-file pattern for consistency:
  - `app/<slug>/page.tsx` — server component shell. Exports `metadata` and `structuredData`, renders `<JsonLd>` + the client child. Around ~15 lines.
  - `app/<slug>/<slug>-client.tsx` — `"use client"` component holding the actual page content (images, copy, links, any interactive UI).
  This split is required because client components in Next.js cannot export `metadata` or render server-only JSON-LD blobs. Keeping every page on the same pattern means new pages can copy the same scaffold without thinking about it.
- **The server shell looks like this** — the explicit `: Metadata` annotation is required by Next.js's metadata validator, otherwise you'll see *"The Next.js 'metadata' export should be type of 'Metadata' from 'next'."*:
  ```tsx
  import type { Metadata } from "next";
  import JsonLd from "@/components/json-ld";
  import { getProjectMetadata, getProjectStructuredData } from "@/lib/seo";
  import FlowLoungeClient from "./flow-lounge-client";

  export const metadata: Metadata = getProjectMetadata("flow-lounge");
  const structuredData = getProjectStructuredData("flow-lounge");

  export default function FlowLoungePage() {
    return (
      <>
        <JsonLd data={structuredData} />
        <FlowLoungeClient />
      </>
    );
  }
  ```

## Sitemap & robots

- **`app/sitemap.ts`** generates `/sitemap.xml` at build time and **derives project URLs from `PROJECTS_SEO`** — so adding a new project to `lib/seo.ts` automatically adds it to the sitemap. The home URL is added manually.
- **`app/robots.ts`** generates `/robots.txt`. Single `User-agent: *` block with the right `Disallow`s, plus a Googlebot allow for PDFs, plus the sitemap reference.
- Do **not** add static `public/sitemap.xml` or `public/robots.txt` files — they will shadow the App Router routes.

## Structured data (JSON-LD)

- **Root** — `Person` schema (Apostolos Karamanis) lives in `app/layout.tsx`.
- **Project pages** — Each exports a `structuredData` array with a `CreativeWork` (the project) and a `BreadcrumbList` (Home > Project Name), rendered via `<JsonLd data={structuredData} />` from `components/json-ld.tsx`.
- The `JsonLd` component accepts a single object or an array of objects, serializes to a `<script type="application/ld+json">` tag.
- Validate any changes with [Google's Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org validator](https://validator.schema.org/).

## Checklist: adding a new project page

When you ship a project at `/new-project`:

1. **Add a `PROJECTS_SEO` entry** in `lib/seo.ts` keyed by the slug (`"new-project"`). Provide `name`, `metaTitle`, `description` (~150–160 chars), hero image URL with width/height/alt, optional `externalUrl`, `about` tags, and `keywords`. This is the only place SEO copy is defined.
2. **Create the route as a server shell** — `app/new-project/page.tsx` exports `metadata` + `structuredData` and renders `<JsonLd>` + `<NewProjectClient />`. Follow the scaffold shown in the "Project page structure" section above.
3. **Create the client child** — `app/new-project/new-project-client.tsx` starts with `"use client"` and contains the actual page content. Default export named `NewProjectClient`.
4. **Image `alt` text** — every `<Image>` must have a unique, descriptive `alt`. No `alt="Project Name"` repeated across the page.
5. **Sitemap** — nothing to do; `app/sitemap.ts` reads from `PROJECTS_SEO` and adds the new entry automatically.
6. **`public/llms.txt`** — append a section describing the project (industry, technologies, role, live URL). LLMs use this for discoverability.
7. **Works grid** — add an entry to `data/works.tsx` so the project shows up on the homepage.

## OpenGraph images

- Each project page references its hero image as the OG image. Dimensions are declared in the metadata so social platforms render the card without cropping.
- The site-wide default OG image is `/public/apostolos-karamanis-creative-developer.jpg` (used for the homepage and any page without a page-specific image).
- If you decide to programmatically generate branded OG cards, use Next.js's `app/<route>/opengraph-image.tsx` convention with `ImageResponse`.

## Verification & analytics

- **Google Search Console** — verified via the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var, which renders a `<meta name="google-site-verification">` tag through `app/layout.tsx`. Without it, the meta is empty and Search Console can't access traffic data, indexing reports, or URL submission. Alternative methods: DNS TXT record at the domain registrar, or a verification HTML file in `public/`.
- **Analytics** — Vercel Analytics is wired through `@vercel/analytics/next` in `app/layout.tsx`.

## llms.txt

`public/llms.txt` is the LLM-discoverability index. Keep it updated when:
- A new project ships (add a project section).
- Your role, tech stack, or services change materially.
- Contact information or external profile URLs change.

## Common pitfalls

- **Client components can't export `metadata`** — this is why every project page is split into a server shell + a `"use client"` child. Don't try to add `metadata` to the client file or strip `"use client"` from the client file.
- **Don't re-add `public/sitemap.xml` or `public/robots.txt`** — they shadow the generated routes.
- **Don't duplicate `alt` text** — search engines and screen readers rely on uniqueness.
- **Don't hardcode `https://qaramanis.com/` paths inside `openGraph.images`** — since `metadataBase` is set, you can use relative paths like `/foo.jpg` and they'll resolve correctly.
