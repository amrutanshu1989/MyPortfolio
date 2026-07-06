import { Award, Trophy, Mic2, BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { awards } from "@/data/awards";
import { memberships } from "@/data/memberships";

const typeMeta = {
  award: { label: "Award", icon: Trophy, variant: "default" as const },
  chair: { label: "Session Chair", icon: Mic2, variant: "link" as const },
  role: { label: "Role", icon: BadgeCheck, variant: "muted" as const },
};

export function Awards() {
  return (
    <SectionWrapper id="awards">
      <SectionHeading
        eyebrow="Awards & Recognition"
        title="Awards, chair roles & recognition"
        description="Best paper awards, session and publication chair roles, and professional memberships across leading computing bodies."
      />

      <ol className="mt-10 relative flex flex-col">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
        />
        {awards.map((entry, i) => {
          const meta = typeMeta[entry.type];
          const Icon = meta.icon;
          return (
            <Reveal as="li" key={entry.id} delay={i * 0.05} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
              <span
                aria-hidden
                className={cn(
                  "relative z-10 mt-2 flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                  entry.type === "award"
                    ? "border-link bg-link text-link-foreground"
                    : "border-border bg-background",
                )}
              >
                <Icon className="size-2.5" />
              </span>
              <div className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {entry.year}
                  </span>
                  <Badge variant={meta.variant} className="text-[10px]">
                    {meta.label}
                  </Badge>
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {entry.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {entry.context}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ol>

      <div className="mt-16">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
          <Award className="size-4 text-link" />
          Professional memberships
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {memberships.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.04}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-foreground/20">
                <div className="flex size-14 items-center justify-center rounded-xl border border-border bg-muted text-sm font-bold tracking-tight text-foreground">
                  {m.abbr}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-foreground">
                    {m.abbr}
                  </span>
                  <span className="text-[11px] leading-relaxed text-muted-foreground">
                    {m.description}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
