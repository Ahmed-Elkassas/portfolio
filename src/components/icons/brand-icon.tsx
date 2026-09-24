import type { SVGProps } from "react";
import type { SimpleIcon } from "simple-icons";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  icon: SimpleIcon;
  size?: number;
};

// Draws a simple-icons logo from its path data. The brand's own hex is
// ignored: it takes currentColor, so the design tokens decide the colour.
export function BrandIcon({ icon, size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
}
