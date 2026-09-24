export type Project = {
  title: string;
  where: string;
  when?: string;
  /** From the CV. The Experience section links here instead of repeating it. */
  description: string;
  proof: string[];
  /** Headline tech only, max 5 (keeps cards balanced); the full stack is in Experience. */
  stack: string[];
  /** Optional screenshot in /public; the card shows a placeholder without it. */
  image?: { src: string; alt: string };
  /** Word shown in the media area when there's no image (e.g. "Platform"). */
  placeholder?: string;
  /** Optional live URLs; each shows as its domain, e.g. "ilpapps.com ↗". */
  links?: string[];
};

export const projectsSection = {
  title: "Projects",
  stackLabel: "Stack",
} as const;

// Draft list: not final. Reorder, edit or remove entries freely.
export const projects: Project[] = [
  {
    title: "Config-driven admin framework",
    where: "iCloud-Ready",
    when: "2023 — now",
    description:
      "One declarative config per entity generates its table, filters, forms, bulk actions and Excel import, replacing per-screen code. It became the standard for new admin modules: the team builds on it rather than around it.",
    proof: ["39 modules", "19 form engines", "114 routes"],
    stack: ["React", "TypeScript", "Ant Design", "React Query"],
    placeholder: "Platform",
  },
  {
    title: "Bilingual visual page builder",
    where: "iCloud-Ready",
    when: "2023 — now",
    description:
      "Both sides of a page builder: the authoring UI where non-technical marketers compose pages from a section gallery in English and Arabic, with per-element theming, and the renderer that ships them live.",
    proof: ["9+ websites", "254 sections", "11 templates"],
    stack: ["React", "Next.js", "Gatsby", "Tailwind", "RTL/i18n"],
    image: {
      src: "/projects/page-builder-sites.png",
      alt: "Five live websites built from the same page-builder codebase: iCloud-Ready, ilpApps, BuildaPay, The Cloudors and EaseLease",
    },
    links: [
      "https://www.icloud-ready.com/",
      "https://www.ilpapps.com/",
      "https://buildapay.com/",
      "https://www.thecloudors.com/",
      "https://ease-lease.com/",
    ],
  },
  {
    title: "Arabic-first property portal",
    where: "Saudi developer",
    when: "2026",
    description:
      "Built from scratch: faceted search, project and unit pages, branded maps, favourites, accounts and online reservations. Filters live in the URL and are checked against live data, so a shared search link never opens empty.",
    proof: ["~2,000 units", "Arabic by default"],
    stack: ["React", "Gatsby", "React Query", "Tailwind", "RTL/i18n"],
    image: {
      src: "/projects/alsaedan.png",
      alt: "Al Saedan property listings page in Arabic, with search filters and project cards",
    },
    links: ["https://app.alsaedan.com/"],
  },
  {
    title: "OZZ.me app and admin dashboard",
    where: "AWStreams",
    when: "2021 — 22",
    description:
      "Replaced the OZZ.me web app's legacy frontend with a vanilla JavaScript rebuild, and built its internal admin dashboard from scratch in React, Redux and Material UI.",
    proof: ["web app + admin"],
    placeholder: "Ozz dashboard",
    stack: ["JavaScript", "React", "Redux", "Material UI"],
  },
];
