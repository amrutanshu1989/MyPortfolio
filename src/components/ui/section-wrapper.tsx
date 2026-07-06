"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "scroll-mt-20 border-b border-border/60 py-20 sm:py-24 lg:py-28",
        className,
      )}
      {...(props as React.ComponentProps<typeof motion.section>)}
    >
      <div className={cn("mx-auto max-w-6xl px-6", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}
