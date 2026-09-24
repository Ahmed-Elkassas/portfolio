export type SectionId = "home" | "about" | "experience" | "projects" | "contact";

export type NavLink = {
  id: SectionId;
  label: string;
};

export const site = {
  name: "Ahmed Elqassas",
  initials: "AE",
  role: "Frontend Engineer",
  email: "dev.ahmedbasuony@gmail.com",
  cvPath: "/Ahmed-Elqassas-CV.pdf",
  links: {
    linkedin: "https://linkedin.com/in/ahmed-elkassas",
    github: "https://github.com/Ahmed-Elkassas",
  },
  footer: {
    copyright: "© 2026 Ahmed Elqassas",
    builtWith: "Built with Next.js & Tailwind",
  },
} as const;

// Plain links in the navbar. Contact is rendered separately as a pill.
export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const contactLink: NavLink = { id: "contact", label: "Contact" };
