import { siteConfig } from "@/data/site";
import { contactLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight"
          >
            {siteConfig.name}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {contactLinks.slice(0, 6).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Research &middot; Teaching &middot; Innovation
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
