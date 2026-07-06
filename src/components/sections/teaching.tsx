import { GraduationCap, Users2, BookText, BookUser } from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { teachingStats, courses, supervision } from "@/data/teaching";

export function Teaching() {
  return (
    <SectionWrapper id="teaching">
      <SectionHeading
        eyebrow="Teaching & Mentorship"
        title="Shaping the next generation of computer scientists"
        description="Seven-plus years teaching undergraduate and postgraduate courses, with active supervision of Ph.D., M.Tech, and undergraduate researchers."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {teachingStats.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.05}>
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5">
              <div className="text-3xl font-semibold tracking-tight text-foreground tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
            <BookText className="size-4 text-link" />
            Courses taught
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {courses.map((course, i) => (
              <Reveal key={course.id} delay={i * 0.03}>
                <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-foreground/20">
                  <span className="font-medium text-foreground">
                    {course.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {course.level}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
            <Users2 className="size-4 text-link" />
            Supervision & mentorship
          </div>
          <div className="flex flex-col gap-3">
            {supervision.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <BookUser className="mt-0.5 size-4 shrink-0 text-link" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-foreground">
                      {item.level}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
          <GraduationCap className="size-5 shrink-0 text-link" />
          Based at the Department of CSE, Siksha &lsquo;O&rsquo; Anusandhan
          (Deemed to be University), Bhubaneswar.
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
