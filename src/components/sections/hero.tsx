import { ChevronDown } from "lucide-react";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-84px)] items-center overflow-hidden bg-sec-hero py-24"
    >
      <div className="page-container relative">
        {/* Outlined monogram behind the text, desktop only. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-(--gutter) hidden -translate-y-1/2 font-display text-[520px] leading-none font-bold text-transparent select-none [-webkit-text-stroke:2px_var(--border)] lg:block"
        >
          {site.initials}
        </span>

        {/* @container: lets the h1 size itself from this column's width (cqi). */}
        <div className="@container relative flex flex-col items-start gap-7">
          <p className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
            {home.badge}
          </p>

          {/* The name measures 7.33em in Space Grotesk 700 at -0.03em tracking.
              Dividing the column width (100cqi) by 7.5 makes it always fit on
              one line; min() caps it at the design's 96px. */}
          <h1 className="text-[min(6rem,calc(100cqi/7.5))] leading-none font-bold tracking-[-0.03em]">
            {home.greeting}{" "}
            {/* block = own line; w-fit = only as wide as the name, so the
                underline inside matches it; nowrap = never two lines. */}
            <span className="block w-fit mt-1.5 md:mt-0 whitespace-nowrap text-accent">
              {home.name}
              {/* Hand-drawn underline: spans the name, pulled up 0.23em
                  (22/96), draws in once on load. */}
              <svg
                aria-hidden="true"
                width="720"
                height="34"
                viewBox="0 0 720 34"
                fill="none"
                className="mt-[-0.23em] block h-auto w-full"
              >
                <path
                  d="M8 24c110-16 250-20 420-13s240 6 284-4"
                  pathLength={1}
                  strokeDasharray={1}
                  stroke="currentColor"
                  strokeWidth={5}
                  strokeLinecap="round"
                  className="motion-safe:animate-draw"
                />
              </svg>
            </span>
          </h1>

          <p className="max-w-3xl text-2xl text-text md:text-[28px]">
            {home.hook}
          </p>
        </div>
      </div>

      <a
        href="#about"
        aria-label={home.scrollLabel}
        className="absolute bottom-9 left-1/2 flex h-21 w-14 -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-btn text-muted"
      >
        <svg
          aria-hidden="true"
          width="30"
          height="46"
          viewBox="0 0 30 46"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="28"
            height="44"
            rx="14"
            stroke="currentColor"
            strokeWidth={2}
          />
          <rect
            x="13.5"
            y="9"
            width="3"
            height="8"
            rx="1.5"
            className="fill-accent motion-safe:animate-scroll-wheel"
          />
        </svg>
        <ChevronDown
          aria-hidden="true"
          className="size-4 motion-safe:animate-nudge"
        />
      </a>
    </section>
  );
}
