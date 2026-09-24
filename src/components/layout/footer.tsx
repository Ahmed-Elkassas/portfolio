import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="page-container flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{site.footer.copyright}</p>
        <p>{site.footer.builtWith}</p>
      </div>
    </footer>
  );
}
