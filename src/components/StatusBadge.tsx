import { cn } from "@/lib/utils";
import type { ProjectStage } from "@/content/types";

const stageStyles: Record<ProjectStage, string> = {
  Concept: "bg-slate-100 text-slate-700 border-slate-200",
  Prototype: "bg-teal-50 text-teal-800 border-teal-200",
  Proposal: "bg-indigo-50 text-indigo-800 border-indigo-200",
  Pilot: "bg-violet-50 text-violet-800 border-violet-200",
  "Seeking Partners": "bg-amber-50 text-amber-800 border-amber-200",
  "Seeking Funding": "bg-orange-50 text-orange-800 border-orange-200",
  "In Development": "bg-emerald-50 text-emerald-800 border-emerald-200",
  Research: "bg-blue-50 text-blue-800 border-blue-200",
};

interface StatusBadgeProps {
  stage: ProjectStage;
  className?: string;
}

export function StatusBadge({ stage, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide",
        stageStyles[stage],
        className
      )}
    >
      {stage}
    </span>
  );
}

interface ThemeBadgeProps {
  label: string;
  className?: string;
}

export function ThemeBadge({ label, className }: ThemeBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border",
        className
      )}
    >
      {label}
    </span>
  );
}
