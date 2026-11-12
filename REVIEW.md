# Review rules

## What is a failure in this project
- `pnpm lint`, `pnpm exec tsc --noEmit`, or `pnpm build` fails.
- An entry in `data/works.tsx` points to a route or a media file in `public/` that does not exist.
- A project page has no metadata, or is absent from the sitemap (`lib/seo.ts`, `app/sitemap.ts`).
- Motion or autoplay video ignores `prefers-reduced-motion`.
- A server/client mismatch: a hook or a browser API in a file without `"use client"`, or a hydration error.
- A secret or a private value in the diff. The repository is public.

## Rules for the reviewer
- Report bugs only. Do not report style, naming, or formatting.
- Give the file and the line for each finding. Do not guess file names.
- Mark each finding as Important, Nit, or Pre-existing.
- Start with a summary: the number of findings, or the statement "No issues found".
- Name the class of the bug, so that the author can correct all occurrences.
- Do not report a finding again if its thread is resolved.

## Ignored paths
- `pnpm-lock.yaml`
- `public/` (binary media and the font file)
- `.next/`, `out/`, `build/`, `node_modules/`
- `next-env.d.ts`, `*.tsbuildinfo`

## Recurring problems
<Empty at the start. Add one line each time the reviewer flags the same problem again.>
