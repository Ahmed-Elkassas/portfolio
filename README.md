# Ahmed Elqassas — Portfolio

My personal portfolio: a one-page site with Home, About, Experience, Projects and Contact.

**Live:** _coming soon_ · **CV:** [`/public/Ahmed-Elqassas-CV.pdf`](public/Ahmed-Elqassas-CV.pdf)

## Stack

- **Next.js** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4**: design tokens as CSS variables, dark/light via `next-themes`
- **next/font**: Space Grotesk, IBM Plex Sans, IBM Plex Mono
- **lucide-react** for UI icons, **Simple Icons** for technology logos
- CSS animations + `IntersectionObserver`; everything respects `prefers-reduced-motion`
- Deployed on **Vercel**

## Features

- One page, five sections, each with an `id` and a deep-linkable heading (a link icon appears on hover)
- Sticky navbar with monogram logo, section links, a highlighted Contact link and a dark/light toggle
- Active section highlighted in the navbar while scrolling
- Floating "Let's connect" LinkedIn button, always on the right
- Each section has its own solid background colour, in both themes
- Content lives in typed files under `src/content/`, separate from the components
- Accessible: semantic landmarks, skip link, visible focus states, WCAG AA contrast

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

## Project structure

```
src/
  app/            layout, page, globals.css (tokens), metadata
  components/     Navbar, ThemeToggle, FloatingConnect, SectionHeading, ScrollCue …
  sections/       Hero, About, Experience, Projects, Contact
  content/        profile.ts, tech.ts, experience.ts, projects.ts
public/           CV PDF, OG image, favicon
```

## Editing content

All text is in `src/content/*.ts`. Adding a project means adding one object to `projects.ts`: title, where/when, description, proof points and stack.

## License

The code is MIT. The content and CV are © Ahmed Elqassas.
