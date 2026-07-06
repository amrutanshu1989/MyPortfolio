import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

interface ContactCardProps {
  link: SocialLink;
  className?: string;
}

export function ContactCard({ link, className }: ContactCardProps) {
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={cn(
        "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 hover:bg-accent/40",
        className,
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground transition-colors group-hover:border-link/40 group-hover:text-link">
        <Icon className="size-4" />
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {link.label}
          </span>
          <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        {link.handle && (
          <span className="truncate text-xs text-muted-foreground">
            {link.handle}
          </span>
        )}
        {link.description && (
          <span className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
            {link.description}
          </span>
        )}
      </div>
    </a>
  );
}
