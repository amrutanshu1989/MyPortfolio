import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { academicPositions, academicEducation } from "@/data/journey";

export function AcademicJourney() {
  return (
    <SectionWrapper id="journey">
      <SectionHeading
        eyebrow="Academic Journey"
        title="Education & experience"
        description="From undergraduate studies in computer science to a postdoctoral fellowship, with teaching roles across multiple institutions."
      />

      <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Positions held
          </h3>
          <div className="mt-5 flex flex-col">
            {academicPositions.map((entry, i) => (
              <Reveal key={entry.id} delay={i * 0.05}>
                <div className="grid grid-cols-[5.5rem_1fr] gap-x-6 border-t border-border/60 py-6 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr]">
                  <span className="pt-0.5 font-mono text-xs leading-snug text-muted-foreground sm:text-sm">
                    {entry.period}
                  </span>
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-semibold tracking-tight text-foreground sm:text-[1.05rem]">
                        {entry.title}
                      </h4>
                      {entry.current && (
                        <span className="inline-flex items-center rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      {entry.organization}
                    </p>
                    {entry.location && (
                      <p className="text-xs text-muted-foreground">{entry.location}</p>
                    )}
                    {entry.description && (
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {entry.description}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1} className="md:sticky md:top-28">
            <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Education
              </h3>
              <div className="mt-5 flex flex-col divide-y divide-border">
                {academicEducation.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold leading-snug text-foreground">
                        {entry.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {entry.organization}
                      </p>
                      {entry.description && (
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
                          {entry.description}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {entry.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
