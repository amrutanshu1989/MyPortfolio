import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Reveal } from "@/components/ui/reveal";
import { researchImpact } from "@/data/impact";

export function ResearchImpact() {
  return (
    <SectionWrapper id="impact" className="bg-muted/30">
      <SectionHeading
        eyebrow="Impact"
        title="Research impact"
        description="A growing body of peer-reviewed work across top-tier journals, international conferences, patents, and books."
        align="center"
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {researchImpact.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.05}>
            <StatCard stat={stat} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
