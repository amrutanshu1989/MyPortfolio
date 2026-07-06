"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Counter } from "./counter";
import type { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
  className?: string;
}

export function StatCard({ stat, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col gap-1 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20",
        className,
      )}
    >
      <div className="text-3xl font-semibold tracking-tight text-foreground tabular-nums sm:text-4xl">
        {stat.display ?? (
          <Counter
            value={stat.value}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        )}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}
