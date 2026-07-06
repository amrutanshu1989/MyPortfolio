"use client";

import * as React from "react";
import { Search, FileText, Presentation, BookOpenText } from "lucide-react";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { PublicationCard } from "@/components/ui/publication-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  publications,
  featuredPublications,
  publicationCategoryFilters,
} from "@/data/publications";
import type { Publication, PublicationCategory, PublicationType } from "@/types";

const typeFilters: { label: string; value: "all" | PublicationType }[] = [
  { label: "All", value: "all" },
  { label: "Journals", value: "journal" },
  { label: "Conferences", value: "conference" },
  { label: "Book Chapters", value: "book-chapter" },
];

export function Publications() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] =
    React.useState<(typeof publicationCategoryFilters)[number]>("All");
  const [type, setType] = React.useState<"all" | PublicationType>("all");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((p) => {
      const matchesType = type === "all" || p.type === type;
      const matchesCategory =
        category === "All" ||
        p.categories.includes(category as PublicationCategory);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        String(p.year).includes(q);
      return matchesType && matchesCategory && matchesQuery;
    });
  }, [query, category, type]);

  return (
    <SectionWrapper id="publications">
      <SectionHeading
        eyebrow="Publications"
        title="Featured publications"
        description="A selection of peer-reviewed journal articles. Use the filters below to explore the full list of 51 publications by topic, type, or keyword."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPublications.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <PublicationCard publication={p} className="h-full" />
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex flex-col gap-4 border-t border-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, author, or venue…"
                className="pl-9"
                aria-label="Search publications"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by type">
              {typeFilters.map((t) => (
                <Button
                  key={t.value}
                  size="sm"
                  variant={type === t.value ? "default" : "outline"}
                  onClick={() => setType(t.value)}
                  className="h-8"
                >
                  {t.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by topic">
            {publicationCategoryFilters.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={category === c ? "default" : "outline"}
                onClick={() => setCategory(c)}
                className={cn("h-8")}
              >
                {c}
              </Button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground" aria-live="polite">
          Showing {filtered.length} of {publications.length} publications
        </p>

        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p: Publication) => (
              <PublicationCard key={p.id} publication={p} className="h-full" />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
            <div className="flex gap-2 text-muted-foreground">
              <FileText className="size-5" />
              <Presentation className="size-5" />
              <BookOpenText className="size-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              No publications match your search.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setType("all");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
