import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { Reveal } from "@/components/ui/reveal";
import { aboutHighlights } from "@/data/profile";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About"
            title="A focus on secure, intelligent, and decentralized systems"
            description={`${siteConfig.name} is a higher-education professional with over 7+ years of teaching UG and PG courses and 2+ years of focused research experience. His work spans blockchain, artificial intelligence, machine learning, healthcare AI, and cloud computing.`}
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              He holds a Ph.D. in Computer Science &amp; Engineering and is
              currently a Postdoctoral Research Fellow at Lincoln University
              College, Malaysia. His doctoral research investigated
              blockchain-based emerging solutions for centralized applications.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <Timeline entries={aboutHighlights} />
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
