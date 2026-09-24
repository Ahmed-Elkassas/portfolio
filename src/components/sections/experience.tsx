import { BriefcaseBusiness } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, experienceItems } from "@/content/experience";
import { ExperienceTimeline } from "./experience-timeline";

export function Experience() {
  return (
    <section id="experience" className="section-y bg-sec-experience">
      <div className="page-container flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <SectionHeading id="experience" title={experience.title} icon={<BriefcaseBusiness />} />
          <p className="text-lg text-muted">{experience.intro}</p>
        </div>
        <ExperienceTimeline
          items={experienceItems}
          currentLabel={experience.currentLabel}
          featuredLabel={experience.featuredLabel}
        />
      </div>
    </section>
  );
}
