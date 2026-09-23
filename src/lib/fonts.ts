import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

// Space Grotesk is a variable font (300–700): one file covers every heading weight.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

// IBM Plex Sans is variable (100–700): one upright + one italic file.
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-plex-sans",
});

// IBM Plex Mono is static, so only the weights we use are requested.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const fontVariables = [spaceGrotesk, plexSans, plexMono]
  .map((font) => font.variable)
  .join(" ");
