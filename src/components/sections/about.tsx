import { Download, Languages, User, type LucideIcon } from "lucide-react";
import { BrandIcon } from "@/components/icons/brand-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { about, technologies, type LucideTechIconName, type TechIcon } from "@/content/about";
import { site } from "@/content/site";

const lucideTechIcons: Record<LucideTechIconName, LucideIcon> = { Languages };

function TechIconGlyph({ icon }: { icon: TechIcon }) {
  if (icon.kind === "brand") return <BrandIcon icon={icon.icon} size={30} />;
  const Icon = lucideTechIcons[icon.name];
  return <Icon aria-hidden="true" className="size-7.5" />;
}

export function About() {
  return (
    <section id="about" className="section-y bg-sec-about">
      <div className="page-container grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading id="about" title={about.title} icon={<User />} />
          <p className="text-2xl leading-snug italic">{about.intro}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-[1.7] text-muted">
              {paragraph}
            </p>
          ))}
          <a
            href={site.cvPath}
            download
            className="mt-2 inline-flex h-12 items-center gap-2.5 rounded-btn border border-border bg-card px-5 font-semibold text-text transition-colors hover:border-accent"
          >
            <Download aria-hidden="true" className="size-5 text-accent" />
            {about.cvLabel}
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-mono text-[13px] tracking-[2px] text-muted uppercase">
            {about.technologiesLabel}
          </h3>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="flex h-27 flex-col items-center justify-center gap-2.5 rounded-tile border border-border bg-card px-1 text-center text-accent motion-safe:transition-transform hover:-translate-y-1"
              >
                <TechIconGlyph icon={tech.icon} />
                <span className="text-[13px] leading-tight text-muted">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
