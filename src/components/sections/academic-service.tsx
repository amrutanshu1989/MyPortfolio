import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { serviceCards } from "@/data/service";

export function AcademicService() {
  return (
    <SectionWrapper id="service" className="bg-muted/30">
      <SectionHeading
        eyebrow="Academic Service"
        title="Editorial, review & committee work"
        description="Contributions to the academic community through editorial roles, peer review, conference chairing, and technical program committees."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {serviceCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.id} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted text-link">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-link/70"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
