import * as React from "react";
import { BookOpenText, FileText, Presentation, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Publication } from "@/types";

const typeMeta: Record<
  Publication["type"],
  { label: string; icon: typeof FileText }
> = {
  journal: { label: "Journal", icon: FileText },
  conference: { label: "Conference", icon: Presentation },
  "book-chapter": { label: "Book Chapter", icon: BookOpenText },
};

interface PublicationCardProps {
  publication: Publication;
  className?: string;
}

export function PublicationCard({ publication, className }: PublicationCardProps) {
  const TypeIcon = typeMeta[publication.type].icon;
  const doiUrl = publication.doi.startsWith("http")
    ? publication.doi
    : `https://doi.org/${publication.doi}`;

  return (
    <article
      className={cn(
        "group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <TypeIcon className="size-3.5" />
          <span>{typeMeta[publication.type].label}</span>
          <span aria-hidden>&middot;</span>
          <span>{publication.year}</span>
        </div>
        {publication.quartile && (
          <Badge variant="muted" className="text-[10px]">
            {publication.quartile}
          </Badge>
        )}
      </div>

      <h3 className="text-pretty text-sm font-semibold leading-snug tracking-tight text-foreground">
        {publication.title}
      </h3>

      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
        {publication.authors}
      </p>

      <p className="text-xs italic text-muted-foreground/90">
        {publication.venue}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap gap-1.5">
          {publication.categories.map((cat) => (
            <Badge key={cat} variant="link" className="text-[10px]">
              {cat}
            </Badge>
          ))}
          {publication.impactFactor && (
            <Badge variant="outline" className="text-[10px]">
              IF {publication.impactFactor}
            </Badge>
          )}
        </div>
        <a
          href={doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-link transition-opacity hover:opacity-80"
        >
          DOI
          <ExternalLink className="size-3" />
        </a>
      </div>
    </article>
  );
}
