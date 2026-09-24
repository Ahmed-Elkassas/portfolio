import { BriefcaseBusiness, Layers, Mail, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

// PLACEHOLDER (Phase 2): empty sections so the navbar, scroll-spy and
// headings can be reviewed. Phase 3 replaces each with its real component.
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-[calc(100svh-84px)] items-center bg-sec-hero"
      >
        <div className="page-container">
          <h1 className="text-[52px] leading-none font-bold tracking-[-3px] lg:text-8xl">
            Hi, I&apos;m <span className="block text-accent">{site.name}</span>
          </h1>
        </div>
      </section>

      <section id="about" className="section-y min-h-svh bg-sec-about">
        <div className="page-container">
          <SectionHeading id="about" title="About" icon={<User />} />
        </div>
      </section>

      <section id="experience" className="section-y min-h-svh bg-sec-experience">
        <div className="page-container">
          <SectionHeading id="experience" title="Experience" icon={<BriefcaseBusiness />} />
        </div>
      </section>

      <section id="projects" className="section-y min-h-svh bg-sec-projects">
        <div className="page-container">
          <SectionHeading id="projects" title="Projects" icon={<Layers />} />
        </div>
      </section>

      <section id="contact" className="section-y min-h-[70svh] bg-sec-contact text-contact-text">
        <div className="page-container flex flex-col items-center text-center">
          <SectionHeading id="contact" title="Contact" icon={<Mail />} variant="contact" />
        </div>
      </section>
    </>
  );
}
