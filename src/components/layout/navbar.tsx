"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactLink, navLinks, site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "./theme-toggle";

// home + contact are observed too, so no link stays lit in those sections.
const OBSERVED_IDS = [
  "home",
  ...navLinks.map((link) => link.id),
  contactLink.id,
];
const DESKTOP_QUERY = "(min-width: 64rem)";

export function Navbar() {
  const active = useActiveSection(OBSERVED_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on Escape (returning focus to its button)
  // and when the viewport grows into the desktop layout.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onViewportChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 h-[84px] border-b border-border bg-sec-nav">
      <div className="page-container flex h-full items-center justify-between gap-4">
        <a href="" className="flex items-center gap-3 rounded-btn">
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-btn bg-accent font-display text-lg font-bold text-on-accent"
          >
            {site.initials}
          </span>
          {/* Visually hidden on small phones (no room), still read by screen readers. */}
          <span className="sr-only sm:not-sr-only sm:flex sm:flex-col">
            <span className="font-display text-[17px] leading-tight font-bold text-text">
              {site.name}
            </span>
            <span className="text-sm leading-tight text-muted">
              {site.role}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-2 lg:gap-8">
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative inline-flex h-11 items-center text-[15px] transition-colors hover:text-text ${
                      isActive ? "text-text" : "text-muted"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-1.5 h-0.5 rounded-full bg-accent transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 lg:gap-3">
            <a
              href={`#${contactLink.id}`}
              aria-current={active === contactLink.id ? "location" : undefined}
              className="inline-flex h-11 items-center rounded-full border-[1.5px] border-accent px-5 font-semibold text-accent transition-colors hover:bg-accent-soft"
            >
              {contactLink.label}
            </a>
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-btn border border-border text-text transition-colors hover:bg-surface lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>

          <div
            id="mobile-menu"
            hidden={!menuOpen}
            className="absolute inset-x-0 top-full border-b border-border bg-sec-nav lg:hidden"
          >
            <ul className="page-container flex flex-col py-2">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flex h-12 items-center gap-3 text-base transition-colors hover:text-text ${
                        isActive ? "text-text" : "text-muted"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-5 w-0.5 rounded-full bg-accent ${isActive ? "" : "opacity-0"}`}
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
