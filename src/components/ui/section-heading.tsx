"use client";

import { Check, Link as LinkIcon } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: string;
  /**
   * A rendered icon, e.g. `<User />`. It must be an element, not the
   * component itself: functions can't cross from a server to a client component.
   */
  icon: ReactNode;
  /**
   * `contact`: outlined icon in contact colours, rendered as a label (<p>)
   * because that section's real <h2> is its large headline.
   */
  variant?: "default" | "contact";
};

const COPIED_MS = 2000;

export function SectionHeading({ id, title, icon, variant = "default" }: SectionHeadingProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), COPIED_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  // The link still navigates to #id as usual; copying is a bonus.
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`${location.origin}${location.pathname}#${id}`);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context): navigation still works.
    }
  }

  const isContact = variant === "contact";
  const Tag = isContact ? "p" : "h2";
  const StatusIcon = copied ? Check : LinkIcon;

  return (
    <>
      <Tag
        className={
          isContact
            ? "font-display text-2xl font-semibold text-contact-text"
            : "font-display text-[44px] leading-tight font-semibold tracking-[-1px] text-text"
        }
      >
        <a href={`#${id}`} onClick={copyLink} className="group inline-flex items-center gap-4 rounded-btn">
          <span
            aria-hidden="true"
            className={`grid size-11 shrink-0 place-items-center rounded-btn [&>svg]:size-5.5 ${
              isContact
                ? "border-[1.5px] border-contact-text text-contact-text"
                : "bg-accent-soft text-accent"
            }`}
          >
            {icon}
          </span>
          {title}
          <StatusIcon
            aria-hidden="true"
            className={`size-5 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${
              copied ? "opacity-100" : "opacity-0"
            } ${isContact ? "text-contact-text" : "text-muted"}`}
          />
        </a>
      </Tag>
      {/* Outside the heading so its accessible name stays just the title. */}
      <span role="status" className="sr-only">
        {copied ? "Link copied" : ""}
      </span>
    </>
  );
}
