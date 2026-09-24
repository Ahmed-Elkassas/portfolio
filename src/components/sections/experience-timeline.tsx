"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { TagList } from "@/components/ui/tag-list";
import type { ExperienceItem } from "@/content/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  currentLabel: string;
  featuredLabel: string;
};

export function ExperienceTimeline({
  items,
  currentLabel,
  featuredLabel,
}: ExperienceTimelineProps) {
  // Each card toggles independently; the first starts open.
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(
    () => new Set(items.slice(0, 1).map((item) => item.id)),
  );

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <ol className="flex max-w-250 flex-col">
      {items.map((item, index) => {
        const open = openIds.has(item.id);
        const isLast = index === items.length - 1;
        const panelId = `experience-${item.id}`;
        const buttonId = `${panelId}-button`;

        return (
          <li
            key={item.id}
            className="grid grid-cols-[16px_1fr] gap-x-5 sm:gap-x-7"
          >
            {/* Rail: dot aligned with the card header, line down to the next item. */}
            <div aria-hidden="true" className="flex flex-col items-center pt-8">
              <span
                className={`size-4 shrink-0 rounded-full border-2 border-accent transition-colors ${
                  open ? "bg-accent" : "bg-card"
                }`}
              />
              {!isLast && <span className="w-px flex-1 bg-border" />}
            </div>

            <div className={isLast ? "" : "pb-6"}>
              <div className="rounded-panel border border-border bg-card">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-start justify-between gap-4 rounded-panel p-5 text-left sm:p-6"
                  >
                    <span className="flex flex-col gap-1.5">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="font-display text-[22px] leading-tight font-semibold text-text">
                          {item.role}
                        </span>
                        {item.current && (
                          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-sans text-xs font-semibold text-accent">
                            {currentLabel}
                          </span>
                        )}
                      </span>
                      <span className="font-sans text-[15px] text-muted">
                        {item.org} · {item.dates}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`mt-1 size-5 shrink-0 text-muted motion-safe:transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/* grid-rows 0fr → 1fr animates to the content's natural height. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!open}
                  className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-250 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 px-5 pb-6 sm:px-6">
                      <p className="text-muted">{item.summary}</p>
                      {item.bullets && (
                        <ul className="flex list-disc flex-col gap-2 pl-5 text-base marker:text-accent">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      {/* Points to the project cards instead of repeating them here. */}
                      {item.featured && (
                        <p className="text-sm text-muted">
                          <a
                            href="#projects"
                            className="font-semibold text-accent underline-offset-4 hover:underline"
                          >
                            {featuredLabel}
                          </a>
                          : {item.featured.join(" · ")}
                        </p>
                      )}
                      {item.stack && (
                        <TagList tags={item.stack} className="pt-1" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
