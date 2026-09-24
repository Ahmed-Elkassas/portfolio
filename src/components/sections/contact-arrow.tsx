"use client";

import { useEffect, useRef, useState } from "react";

// Hand-drawn arrow that draws itself once, when scrolled into view.
// Visible by default: the effect marks the SVG `data-armed`, and only then
// (and only with motion allowed) does CSS hide the stroke until it draws.
// No-JS and reduced-motion visitors simply see the finished arrow.
export function ContactArrow({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    svg.dataset.armed = "true";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setDrawing(true);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  const stroke = `motion-safe:group-data-[armed=true]:[stroke-dashoffset:1] ${
    drawing ? "motion-safe:animate-draw" : ""
  }`;

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      width="260"
      height="170"
      viewBox="0 0 260 170"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`group ${className}`}
    >
      <path
        d="M20 10c-6 40 30 70 90 60s110-40 125 5c12 38-30 72-70 82"
        pathLength={1}
        strokeDasharray={1}
        className={stroke}
      />
      {/* The arrowhead follows once the line has drawn. */}
      <path
        d="M188 132l-24 26 32 8"
        pathLength={1}
        strokeDasharray={1}
        className={stroke}
        // Inline so it reliably overrides the delay inside `animate-draw`.
        style={{ animationDelay: "1000ms" }}
      />
    </svg>
  );
}
