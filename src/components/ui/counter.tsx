"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "motion/react";

interface UseCountUpOptions {
  value: number;
  duration?: number;
  start?: boolean;
}

export function useCountUp({ value, duration = 1400, start }: UseCountUpOptions) {
  const [display, setDisplay] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (!start) return;
    let raf = 0;
    let startTime = 0;

    if (reduce) {
      raf = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(raf);
    }

    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [start, value, duration, reduce]);

  return display;
}

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function Counter({ value, prefix, suffix, className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp({ value, start: inView });
  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
