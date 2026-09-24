import { ArrowUpRight, Layers } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";
import { projects, projectsSection, type Project } from "@/content/projects";

/** "https://www.ilpapps.com/" → "ilpapps.com" */
const domainOf = (href: string) => new URL(href).hostname.replace(/^www\./, "");

function ProjectCard({ project }: { project: Project }) {
  const label = [project.where, project.when].filter(Boolean).join(" · ");

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-card border border-border bg-card motion-safe:transition-transform hover:-translate-y-1">
      {/* Fixed 200px media area: the --media colour doubles as placeholder,
          so adding screenshots later causes no layout shift. */}
      <div className="relative grid h-50 place-items-center bg-media">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        ) : (
          project.placeholder && (
            // Outlined like the hero monogram; decorative, the title names the project.
            <span
              aria-hidden="true"
              className="px-6 text-center font-display text-4xl leading-none font-bold tracking-[-1px] text-transparent select-none [-webkit-text-stroke:1.5px_var(--accent)] sm:text-5xl"
            >
              {project.placeholder}
            </span>
          )
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-mono text-xs tracking-[1px] text-accent uppercase">{label}</p>
        <h3 className="text-2xl leading-tight font-semibold">{project.title}</h3>
        <p className="text-muted">{project.description}</p>
        {project.links && (
          <ul aria-label="Live sites" className="flex flex-wrap gap-x-4">
            {project.links.map((href) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 py-1 font-mono text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {domainOf(href)}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.proof.map((item) => (
            <li
              key={item}
              className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Label always on its own line, so every card's footer has the same shape. */}
        <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
          <p className="font-mono text-xs tracking-[1px] text-muted uppercase">
            {projectsSection.stackLabel}
          </p>
          <TagList tags={project.stack} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-y bg-sec-projects">
      <div className="page-container flex flex-col gap-12">
        <SectionHeading id="projects" title={projectsSection.title} icon={<Layers />} />
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
