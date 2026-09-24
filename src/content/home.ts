import { site } from "./site";

export const home = {
  badge: `${site.role} · Egypt · Remote`,
  greeting: "Hi, I'm",
  name: site.name,
  hook: "I build the systems other developers build on.",
  scrollLabel: "Scroll to About",
} as const;
