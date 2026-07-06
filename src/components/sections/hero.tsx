"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Send, FileText, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { siteConfig } from "@/data/site";
import { contactLinks } from "@/data/profile";
import { researchImpact } from "@/data/impact";

const heroStats = researchImpact.filter((s) =>
  ["pubs", "patents", "books"].includes(s.id),
);

const heroSocials = contactLinks.filter((l) =>
  ["LinkedIn", "Google Scholar", "ORCID"].includes(l.label),
);

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] sm:h-[320px] sm:w-[520px] lg:h-[420px] lg:w-[720px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-12 md:gap-8 lg:py-28">
        <div className="flex flex-col gap-6 md:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MapPin className="size-3" />
              {siteConfig.location}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-6 items-center text-sm font-medium sm:text-base">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-primary"
                >
                  {siteConfig.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteConfig.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg">
                <a href="#publications">View Publications</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Send className="size-4" />
                  Contact
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.id}
                  className={
                    i > 0
                      ? "flex flex-col gap-0.5 border-l border-border pl-8"
                      : "flex flex-col gap-0.5"
                  }
                >
                  <span className="text-2xl font-semibold tabular-nums text-foreground sm:text-3xl">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {heroSocials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <link.icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-5">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-linear-to-b from-muted/60 to-muted/20 shadow-xl shadow-foreground/5">
              <Image
                src="/WhatsApp%20Image%202026-07-06%20at%207.28.45%20PM.jpeg"
                alt="Dr. Amrutanshu Panigrahi"
                fill
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/10 to-transparent px-4 pb-4 pt-10 text-white">
                <p className="text-sm font-medium">Assistant Professor</p>
                <p className="text-xs text-white/70">Postdoctoral Fellow</p>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-2xl border border-border bg-background/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:flex">
              <FileText className="size-4 text-primary" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-foreground">51+</span>
                <span className="text-[10px] text-muted-foreground">Publications</span>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}
