"use client";

import { Cpu, Database, Shield, Building2, CloudRain, FlaskConical } from "lucide-react";
import type { ThemeId } from "@/content/types";
import { cn } from "@/lib/utils";

const THEME_VISUALS: Record<
  ThemeId,
  { gradient: string; icon: typeof Cpu; accent: string }
> = {
  "technology-systems": {
    gradient: "from-slate-900 via-[#0f2847] to-slate-800",
    icon: Cpu,
    accent: "text-teal-400",
  },
  government: {
    gradient: "from-[#0B1F3A] via-[#152E52] to-[#1a3660]",
    icon: Building2,
    accent: "text-cyan-300",
  },
  "environment-resilience": {
    gradient: "from-emerald-950 via-teal-900 to-slate-900",
    icon: CloudRain,
    accent: "text-emerald-300",
  },
  "data-ai-systems": {
    gradient: "from-indigo-950 via-slate-900 to-[#0f2847]",
    icon: Database,
    accent: "text-indigo-300",
  },
  "cybersecurity-trust": {
    gradient: "from-slate-950 via-slate-900 to-[#0f2744]",
    icon: Shield,
    accent: "text-sky-300",
  },
  "research-emerging": {
    gradient: "from-violet-950 via-slate-900 to-[#152E52]",
    icon: FlaskConical,
    accent: "text-violet-300",
  },
};

interface ProjectThumbnailProps {
  primaryTheme: ThemeId;
  systemType?: string;
  className?: string;
}

export function ProjectThumbnail({ primaryTheme, systemType, className }: ProjectThumbnailProps) {
  const visual = THEME_VISUALS[primaryTheme] ?? THEME_VISUALS["technology-systems"];
  const Icon = visual.icon;

  return (
    <div
      className={cn(
        "relative h-36 md:h-40 overflow-hidden rounded-t-2xl border-b border-white/10",
        `bg-gradient-to-br ${visual.gradient}`,
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-tech-grid opacity-20" />
      <div className="absolute inset-0 bg-circuit opacity-25" />

      <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden>
        <line x1="0" y1="60%" x2="100%" y2="40%" stroke="rgba(45,212,191,0.25)" strokeWidth="0.5" />
        <line x1="20%" y1="0" x2="80%" y2="100%" stroke="rgba(45,212,191,0.15)" strokeWidth="0.5" />
        <circle cx="75%" cy="30%" r="3" fill="rgba(45,212,191,0.4)" className="network-pulse" />
        <circle cx="25%" cy="70%" r="2" fill="rgba(45,212,191,0.35)" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
          <Icon className={cn("w-7 h-7", visual.accent)} strokeWidth={1.5} />
        </div>
      </div>

      {systemType && (
        <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-white/70 bg-black/25 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
          {systemType}
        </span>
      )}
    </div>
  );
}
