"use client";

import { cn } from "@/lib/utils";

interface SystemStatusStripProps {
  className?: string;
  status?: "live" | "pilot" | "building";
}

const STATUS_LABELS = {
  live: "Operational",
  pilot: "Pilot",
  building: "In Build",
} as const;

export function SystemStatusStrip({ className, status = "live" }: SystemStatusStripProps) {
  const dotColor =
    status === "live" ? "bg-emerald-400" : status === "pilot" ? "bg-amber-400" : "bg-cyan-400";

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 px-4 py-2.5 -mx-7 md:-mx-8 -mt-7 md:-mt-8 mb-5 rounded-t-2xl border-b border-border/80 bg-gradient-to-r from-slate-900 via-[#0f2744] to-slate-900",
        className
      )}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <span className={cn("w-1.5 h-1.5 rounded-full ops-dot-blink", dotColor)} />
        <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300/80">
          {STATUS_LABELS[status]}
        </span>
      </div>
      <svg className="w-20 h-6" viewBox="0 0 80 24" aria-hidden>
        <polyline
          points="0,18 12,14 24,16 36,10 48,12 60,6 72,8 80,4"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="1"
          strokeOpacity="0.55"
          className="ops-wave-pan"
        />
      </svg>
      <span className="text-[10px] font-mono text-slate-400 tabular-nums">99.2%</span>
    </div>
  );
}

export function statusFromProjectStages(stages: string[]): "live" | "pilot" | "building" {
  const joined = stages.join(" ").toLowerCase();
  if (joined.includes("live") || joined.includes("deployed") || joined.includes("production")) return "live";
  if (joined.includes("pilot") || joined.includes("beta")) return "pilot";
  return "building";
}
