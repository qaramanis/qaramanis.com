# qaramanis.com

Personal portfolio site. Static pages, no backend.

## Stack

- Next.js 16 (App Router), React 19, TypeScript 5 (strict)
- Tailwind CSS 4 (`app/globals.css`), ESLint 9 (`eslint-config-next`)
- Motion: `framer-motion` and `gsap`
- Package manager: pnpm. Do not use npm or yarn.

## Commands

- Install: `pnpm install --frozen-lockfile`
- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Type check: `pnpm exec tsc --noEmit`
- Build: `pnpm build`
- Format: none. The project has no formatter.
- Test: none. The project has no test framework.

## Conventions

- Each project has a route `app/<slug>/page.tsx` (metadata) and a client file
  `app/<slug>/<slug>-content.tsx`. The list of projects is in `data/works.tsx`.
- Metadata, sitemap, and JSON-LD use the helpers in `lib/seo.ts`.
- Import with the `@/` alias, which points to the repository root.
- Colors come from the tokens in `app/globals.css`. Do not write inline hex colors.
- The only font is ABC Areal, loaded with `next/font/local` in `app/layout.tsx`.
- Motion and autoplay video must obey `prefers-reduced-motion`.
- Media files are in `public/<slug>/`. Images are not optimized by Next.js
  (`images.unoptimized`), so add files that are already compressed.

## Branches

- Start work branches from `develop`. Open pull requests against `develop`.
- `main` is for deployments only.

## Non-goals

- No case studies and no long project text. The site stays minimal.
- No backend, API routes, database, or auth.
- No new formatter, test framework, or UI library unless the owner asks for it.

## Before you say a task is done

Run these commands and show the output:

1. `pnpm lint`
2. `pnpm exec tsc --noEmit`
3. `pnpm build`

There are no tests. Say so; do not say that tests pass.
