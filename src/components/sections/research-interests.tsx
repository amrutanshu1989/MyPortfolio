import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { researchInterests } from "@/data/research";

export function ResearchInterests() {
  const lastRowStart = researchInterests.length - (researchInterests.length % 2 === 0 ? 2 : 1);

  return (
    <SectionWrapper id="research">
      <SectionHeading
        eyebrow="Research"
        title="Research interests"
        description="Eight intersecting domains where blockchain, artificial intelligence, and applied computing meet real-world problems in healthcare, security, and distributed systems."
      />

      <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
        {researchInterests.map((interest, i) => {
          const Icon = interest.icon;
          const isRightCol = i % 2 === 1;
          const isLastRow = i >= lastRowStart;

          return (
            <Reveal key={interest.title} delay={i * 0.04}>
              <div
                className={cn(
                  "group flex h-full flex-col gap-5 p-6 transition-colors hover:bg-muted/30 sm:p-8",
                  !isLastRow && "border-b border-border",
                  !isRightCol && "sm:border-r sm:border-border",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <Icon className="size-4.5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {interest.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
