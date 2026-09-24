import {
  siAntdesign,
  siGatsby,
  siGit,
  siHtml5,
  siJavascript,
  siMui,
  siNextdotjs,
  siReact,
  siReactquery,
  siRedux,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

/** Lucide icons stand in where simple-icons has no official logo. */
export type LucideTechIconName = "Languages";

export type TechIcon =
  | { kind: "brand"; icon: SimpleIcon }
  | { kind: "lucide"; name: LucideTechIconName };

export type Technology = {
  name: string;
  icon: TechIcon;
};

const brand = (icon: SimpleIcon): TechIcon => ({ kind: "brand", icon });

export const about = {
  title: "About",
  intro:
    "Civil engineer turned frontend engineer. Still learning the way I started: one problem at a time.",
  paragraphs: [
    "Since 2021 I've built web products end to end. For the last three years I've worked on both halves of a multi-tenant real-estate SaaS at iCloud-Ready: the admin platform where staff configure their site, and the build that turns that configuration into a live website, in English and Arabic.",
    "I'm careful with things that already exist. Most of my hardest work has been changing a live system without breaking the data already in it.",
  ],
  cvLabel: "Download CV",
  technologiesLabel: "Technologies",
} as const;

export const technologies: Technology[] = [
  { name: "JavaScript", icon: brand(siJavascript) },
  { name: "TypeScript", icon: brand(siTypescript) },
  { name: "React", icon: brand(siReact) },
  { name: "Next.js", icon: brand(siNextdotjs) },
  { name: "Gatsby", icon: brand(siGatsby) },
  { name: "React Query", icon: brand(siReactquery) },
  { name: "Redux", icon: brand(siRedux) },
  { name: "Tailwind CSS", icon: brand(siTailwindcss) },
  { name: "Ant Design", icon: brand(siAntdesign) },
  { name: "Material UI", icon: brand(siMui) },
  { name: "RTL & i18n", icon: { kind: "lucide", name: "Languages" } },
  { name: "Git", icon: brand(siGit) },
  { name: "HTML & CSS", icon: brand(siHtml5) },
];
