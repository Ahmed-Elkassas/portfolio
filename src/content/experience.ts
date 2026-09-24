export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  dates: string;
  current?: boolean;
  summary: string;
  bullets?: string[];
  /** Project card titles covered in the Projects section, so they aren't repeated here. */
  featured?: string[];
  stack?: string[];
};

export const experience = {
  title: "Experience",
  intro: "Shipping since 2021, most of it on products people use every day.",
  currentLabel: "Current",
  featuredLabel: "Featured in Projects",
} as const;

// Source: Ahmed-Elqassas-CV.pdf. Work that has its own project card is listed
// under `featured` instead of being repeated as a bullet.
export const experienceItems: ExperienceItem[] = [
  {
    id: "icloud-ready",
    role: "Frontend Engineer",
    org: "iCloud-Ready",
    dates: "Mar 2023 – Present",
    current: true,
    summary:
      "Multi-tenant real-estate SaaS: one codebase generating a different website for every client, plus the admin platform that configures it.",
    bullets: [
      "Own both sides of the product: the admin platform where staff configure their site, and the static pipeline that builds and deploys it. Sole frontend developer on the websites codebase through its first year.",
      "Architected multi-tenant theming: build-time configuration generates CSS custom properties and design tokens, and each template declares which route families it supports. Onboarding a new client is configuration, not code.",
      "Shipped an entire community-management product area solo in four months: residents and tenancies, gate passes and visitor requests, facility booking, and a configurable service-request system.",
      "Cut a build hitting an 18-minute hosting ceiling by replacing ~600 serial image round-trips with a bounded 12-worker pool, and resolved a week of out-of-memory build failures with paginated, incremental, retried data fetching.",
      "Migrated four entity types from multi-step to single-step creation without breaking records created under the old flow.",
    ],
    featured: [
      "Config-driven admin framework",
      "Website builder behind 9+ live sites",
      "Arabic-first property portal",
    ],
    stack: [
      "React",
      "Next.js",
      "Gatsby",
      "TypeScript",
      "React Query",
      "Ant Design",
      "Tailwind CSS",
      "Netlify",
    ],
  },
  {
    id: "awstreams",
    role: "Frontend Developer",
    org: "AWStreams",
    dates: "Jul 2021 – Oct 2022",
    summary: "Product and client work at a digital agency.",
    bullets: [
      "Customised WordPress sites for client delivery and optimised UI rendering performance.",
      "Worked directly with backend engineers on API shape and data flow to keep client-side state handling simple.",
    ],
    featured: ["OZZ.me app and admin dashboard"],
    stack: ["JavaScript", "React", "Redux", "Material UI", "WordPress"],
  },
  {
    id: "education",
    role: "BSc Civil Engineering",
    org: "Higher Technological Institute (HTI)",
    dates: "2012 – 2018",
    summary: "Before software. Self-taught into frontend from here.",
  },
];
