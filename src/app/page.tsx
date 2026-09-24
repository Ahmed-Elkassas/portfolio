import { BriefcaseBusiness, Layers, Mail } from "lucide-react";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/ui/section-heading";

// Home and About are real. Experience, Projects and Contact are still
// PLACEHOLDERS; the rest of Phase 3 replaces them.
export default function Home() {
  return (
    <>
      <Hero />
      <About />

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
