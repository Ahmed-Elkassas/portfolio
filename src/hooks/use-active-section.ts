"use client";

import { useEffect, useState } from "react";

// A thin horizontal band ~40% down the viewport: the section crossing it is
// "active". Pass a stable (module-level) array so the observer isn't rebuilt.
const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "-40% 0px -55% 0px",
};

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
