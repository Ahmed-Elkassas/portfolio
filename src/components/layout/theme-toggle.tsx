"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Both icons are rendered and CSS picks one, so the server markup is the
// same for either theme (no hydration mismatch, no icon flicker).
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Switch colour theme"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="grid size-11 shrink-0 place-items-center rounded-btn border border-border text-text transition-colors hover:bg-surface"
    >
      <Sun aria-hidden="true" className="hidden size-5 dark:block" />
      <Moon aria-hidden="true" className="size-5 dark:hidden" />
    </button>
  );
}
