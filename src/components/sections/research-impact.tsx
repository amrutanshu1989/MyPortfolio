import { GraduationCap } from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Reveal } from "@/components/ui/reveal";
import { researchImpact, researchScholars } from "@/data/impact";

export function ResearchImpact() {
  return (
    <SectionWrapper id="impact" className="bg-muted/30">
      <SectionHeading
        eyebrow="Impact"
        title="Research impact"
        description="A growing body of peer-reviewed work across top-tier journals, international conferences, patents, and books."
        align="center"
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {researchImpact.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.05}>
            <StatCard stat={stat} className="h-full" />
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-medium text-foreground">
            <GraduationCap className="size-4 text-primary" />
            Research scholars supervised
          </div>
        </Reveal>
        <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {researchScholars.map((scholar, i) => (
            <Reveal key={scholar.id} delay={0.05 + i * 0.05}>
              <div className="flex flex-col gap-1.5 px-4 py-4 text-center sm:py-0">
                <span className="text-2xl font-semibold tabular-nums text-foreground">
                  {scholar.count}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {scholar.role}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {scholar.institution}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wide text-primary">
                  {scholar.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
