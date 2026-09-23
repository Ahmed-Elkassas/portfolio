"use client";

import { useTheme } from "next-themes";

// TEMPORARY (Phase 1 review only) — replaced by the real ThemeToggle in Phase 2.
export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-11 rounded-btn border border-border bg-surface px-4 font-mono text-sm"
    >
      Toggle theme
    </button>
  );
}
