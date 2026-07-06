import * as React from "react";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/types";

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export function Timeline({ entries, className }: TimelineProps) {
  return (
    <ol className={cn("relative flex flex-col", className)}>
      <span
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
      />
      {entries.map((entry) => (
        <li key={entry.id} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
          <span
            aria-hidden
            className={cn(
              "relative z-10 mt-1.5 size-3.5 shrink-0 rounded-full border-2 sm:mt-2 sm:size-5",
              entry.current
                ? "border-link bg-link"
                : "border-border bg-background",
            )}
          />
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {entry.period}
            </span>
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {entry.title}
            </h3>
            <p className="text-sm font-medium text-foreground/80">
              {entry.organization}
            </p>
            {entry.location && (
              <p className="text-sm text-muted-foreground">{entry.location}</p>
            )}
            {entry.description && (
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
