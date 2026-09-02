# Sanchit — Personal Portfolio

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What to edit first

- `src/data/projects.ts` — project descriptions are drafted from the stack
  you gave me; swap in real, specific sentences.
- `src/data/timeline.ts` — the Evolution section is placeholder scaffolding
  (marked `20XX`) — replace with your real years and milestones.
- `src/components/Contact.tsx` — swap the placeholder email/GitHub/X/LinkedIn
  links for your real ones.
- `src/components/About.tsx` and `src/components/Currently.tsx` — marked
  with `EDIT ME` comments for a couple of sentences in your own words.
- Your photo: drop the file into `public/` (e.g. `public/me.jpg`) and in
  `src/components/Hero.tsx` replace the placeholder `div` with:
  ```tsx
  import Image from "next/image";
  // ...
  <Image src="/me.jpg" alt="Sanchit" fill className="object-cover" />
  ```
  (keep the parent `div` as `relative` — it already is).

## Structure

- `src/app/page.tsx` — assembles all sections in order
- `src/components/` — one component per section (Navbar, Hero, ProofOfWork,
  About, Evolution, Currently, OpenSource, RecentlyOnline, Contact, Footer)
- `src/data/` — editable content (projects, timeline)
- `src/app/globals.css` — color tokens and the two custom CSS effects
  (blinking cursor, selection color)

## Notes

- Fonts (Bricolage Grotesque, Hanken Grotesk, JetBrains Mono) load via
  `next/font/google` and need a normal internet connection on first build —
  this is automatic, nothing to configure.
- No database, no API integrations, no animation library — on purpose, per
  the brief. The Open Source and Recently Online sections are intentional
  placeholders until you wire up real data.
