import { Handshake, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCard } from "@/components/ui/contact-card";
import { Reveal } from "@/components/ui/reveal";
import { contactLinks } from "@/data/profile";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-muted/30">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Open to research collaborations, academic enquiries, and speaking engagements. Reach out through any of the channels below."
        align="center"
      />

      <Reveal delay={0.05}>
        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-xl border border-border bg-card p-5 text-center">
          <Handshake className="size-5 shrink-0 text-link" />
          <p className="text-sm font-medium text-foreground">
            Open for Research Collaborations
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link, i) => (
          <Reveal key={link.label} delay={i * 0.05}>
            <ContactCard link={link} className="h-full" />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="size-4" />
              Email directly
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            {siteConfig.location}
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
