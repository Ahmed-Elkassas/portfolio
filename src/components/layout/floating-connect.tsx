"use client";

import { useEffect, useState } from "react";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { contactLink, site } from "@/content/site";

// Hide once the Contact section rises above the lower 30% of the viewport.
const CONTACT_OBSERVER: IntersectionObserverInit = { rootMargin: "0px 0px -30% 0px" };

// md and up: a vertical tab docked to the right edge, centred. At 44px wide it
// fits inside the 48/80px gutter, so it never covers content.
// Below md: a 52px icon circle in the bottom-right thumb zone.
// Over Contact it steps aside: that section has the same link, and in dark mode
// amber on amber would disappear. `inert` keeps the hidden button out of the tab order.
export function FloatingConnect() {
  const [overContact, setOverContact] = useState(false);

  useEffect(() => {
    const contact = document.getElementById(contactLink.id);
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverContact(entry.isIntersecting),
      CONTACT_OBSERVER,
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.links.linkedin}
      target="_blank"
      rel="noopener"
      aria-label="Let's connect on LinkedIn"
      inert={overContact}
      className={`fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 flex items-center rounded-full bg-accent p-2 font-bold text-on-accent shadow-lg motion-safe:transition-[translate,opacity] motion-safe:duration-300 md:top-1/2 md:right-0 md:bottom-auto md:w-11 md:-translate-y-1/2 md:flex-col md:gap-3 md:rounded-l-btn md:rounded-r-none md:px-0 md:pt-4 md:pb-1.75 md:text-[15px] ${
        overContact ? "translate-x-[150%] opacity-0" : "md:hover:-translate-x-1"
      }`}
    >
      {/* Reads bottom-to-top, the usual direction for spine-style labels. */}
      <span className="hidden rotate-180 whitespace-nowrap [writing-mode:vertical-rl] md:block">
        Let&apos;s connect
      </span>
      <span className="grid size-9 place-items-center rounded-full bg-on-accent text-accent md:size-7.5">
        <LinkedinIcon size={16} />
      </span>
    </a>
  );
}
