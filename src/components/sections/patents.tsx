import { ShieldCheck } from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { patents } from "@/data/patents";

const statusVariant: Record<string, "default" | "link" | "muted"> = {
  Granted: "default",
  Published: "link",
  Filed: "muted",
};

export function Patents() {
  return (
    <SectionWrapper id="patents">
      <SectionHeading
        eyebrow="Intellectual Property"
        title="Patents"
        description="Filed and granted patents applying AI, deep learning, and automation to healthcare diagnostics and engineering."
      />

      <ol className="mt-10 relative flex flex-col">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
        />
        {patents.map((patent, i) => (
          <Reveal as="li" key={patent.id} delay={i * 0.05} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
            <span
              aria-hidden
              className="relative z-10 mt-2 flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-link bg-link text-link-foreground"
            >
              <ShieldCheck className="size-2.5" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {patent.publicationDate}
                </span>
                <Badge variant={statusVariant[patent.status] ?? "muted"}>
                  {patent.status}
                </Badge>
              </div>
              <h3 className="text-pretty text-sm font-semibold leading-snug tracking-tight text-foreground">
                {patent.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {patent.description}
              </p>
              <p className="text-xs text-muted-foreground/80">
                Application / Design No. {patent.applicationNumber}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionWrapper>
  );
}
