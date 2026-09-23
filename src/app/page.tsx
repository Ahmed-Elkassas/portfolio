import { ThemeSwitch } from "./_preview/theme-switch";

// TEMPORARY (Phase 1 review only): a token and type sheet.
// Replaced by the real sections in Phases 2–3.

const core = [
  ["bg", "bg-bg"],
  ["surface", "bg-surface"],
  ["border", "bg-border"],
  ["text", "bg-text"],
  ["muted", "bg-muted"],
  ["accent", "bg-accent"],
  ["on-accent", "bg-on-accent"],
  ["accent-soft", "bg-accent-soft"],
] as const;

const sections = [
  ["sec-nav / sec-hero", "bg-sec-hero"],
  ["sec-about", "bg-sec-about"],
  ["sec-experience", "bg-sec-experience"],
  ["sec-projects", "bg-sec-projects"],
  ["sec-contact", "bg-sec-contact"],
  ["card", "bg-card"],
  ["media", "bg-media"],
] as const;

function Swatches({ items }: { items: ReadonlyArray<readonly [string, string]> }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map(([name, cls]) => (
        <li key={name} className="rounded-tile border border-border bg-card p-3">
          <div className={`h-16 rounded-btn border border-border ${cls}`} />
          <p className="mt-2 font-mono text-xs text-muted">--{name}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="page-container section-y flex flex-col gap-12">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[13px] tracking-[2px] text-muted">
          PHASE 1 · FOUNDATIONS PREVIEW
        </p>
        <ThemeSwitch />
      </div>

      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold tracking-[-2px] lg:text-8xl lg:tracking-[-3px]">
          Hi, I&apos;m <span className="text-accent">Ahmed Elqassas</span>
        </h1>
        <h2 className="text-[44px] font-semibold tracking-[-1px]">
          Space Grotesk 600 heading
        </h2>
        <p className="text-2xl italic">IBM Plex Sans italic 400 — one problem at a time.</p>
        <p className="max-w-2xl text-lg leading-[1.7] text-muted">
          IBM Plex Sans body at 18px with a 1.7 line-height in the muted colour. Since
          2021 I&apos;ve built web products end to end.
        </p>
        <p className="font-mono text-xs font-medium text-accent">
          IBM PLEX MONO 500 · ICLOUD-READY · 2023 — NOW
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-[13px] tracking-[2px] text-muted">CORE TOKENS</h2>
        <Swatches items={core} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-[13px] tracking-[2px] text-muted">SECTION TOKENS</h2>
        <Swatches items={sections} />
      </section>

      <section className="rounded-card bg-sec-contact p-8 text-contact-text">
        <p className="font-display text-4xl font-bold tracking-[-2px]">
          Something to <span className="text-contact-accent">build?</span> Let&apos;s make
          it{" "}
          <span className="rounded-[18px] bg-contact-hi-bg px-[18px] text-contact-hi-text">
            last.
          </span>
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <span className="rounded-btn bg-accent px-4 py-2 font-semibold text-on-accent">
          radius-btn 10
        </span>
        <span className="rounded-tile border border-border bg-card px-4 py-2">radius-tile 12</span>
        <span className="rounded-panel border border-border bg-card px-4 py-2">radius-panel 14</span>
        <span className="rounded-card border border-border bg-card px-4 py-2">radius-card 16</span>
        <span className="rounded-full bg-accent-soft px-4 py-2 text-accent">pill 999</span>
      </div>
    </main>
  );
}
