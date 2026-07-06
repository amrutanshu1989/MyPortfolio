"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { usePreloader } from "@/hooks/use-preloader";

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const COUNT_DURATION = 1900;
const HOLD_DURATION = 500;

function AnimatedCounter({ value }: { value: ReturnType<typeof useMotionValue<number>> }) {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = value.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [value]);

  return <>{display}</>;
}

export function Preloader() {
  const { showPreloader, setShowPreloader } = usePreloader();
  const count = useMotionValue(0);
  const dashoffset = useTransform(count, [0, 100], [CIRCUMFERENCE, 0]);

  React.useEffect(() => {
    if (!showPreloader) return;

    document.body.style.overflow = "hidden";
    const controls = animate(count, 100, {
      duration: COUNT_DURATION / 1000,
      ease: [0.65, 0, 0.35, 1],
    });
    const timer = setTimeout(() => {
      setShowPreloader(false);
      document.body.style.overflow = "";
    }, COUNT_DURATION + HOLD_DURATION);

    return () => {
      controls.stop();
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPreloader]);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ transition: { duration: 0.9 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Curtain wipe reveal */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute inset-0 bg-background"
          />

          <motion.div
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Progress ring with live counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex h-28 w-28 items-center justify-center"
            >
              <svg
                className="absolute inset-0 -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={RADIUS}
                  fill="none"
                  strokeWidth="1"
                  className="stroke-border"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={RADIUS}
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="stroke-primary"
                  style={{
                    strokeDasharray: CIRCUMFERENCE,
                    strokeDashoffset: dashoffset,
                  }}
                />
              </svg>
              <span className="font-mono text-2xl font-light tabular-nums text-foreground">
                <AnimatedCounter value={count} />
                <span className="text-sm text-muted-foreground">%</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-center text-2xl font-light tracking-tight text-foreground sm:text-3xl"
            >
              Dr. Amrutanshu Panigrahi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Research &bull; Teaching &bull; Innovation
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute bottom-12 px-6 text-center"
          >
            <p className="text-sm italic text-muted-foreground/60">
              &quot;Advancing knowledge through research and innovation.&quot;
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
