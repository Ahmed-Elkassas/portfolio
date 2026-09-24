import type { Metadata } from "next";
import { FloatingConnect } from "@/components/layout/floating-connect";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Elqassas — Frontend Engineer",
  description:
    "Frontend engineer building config-driven admin platforms and bilingual websites with React and Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // next-themes sets the theme class on <html> before React hydrates,
    // so the server and client markup legitimately differ here.
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only rounded-btn bg-accent px-4 py-3 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
          >
            Skip to content
          </a>
          <Navbar />
          {/* tabIndex lets the skip link move keyboard focus here, not just scroll. */}
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <FloatingConnect />
        </ThemeProvider>
      </body>
    </html>
  );
}
