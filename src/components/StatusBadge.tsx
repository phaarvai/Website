import { cn } from "@/lib/utils";
import type { ProjectStage } from "@/content/types";

const stageStyles: Record<ProjectStage, string> = {
  Deployed: "bg-emerald-50 text-emerald-800 border-emerald-200",
  Pilot: "bg-violet-50 text-violet-800 border-violet-200",
  "Production Candidate": "bg-indigo-50 text-indigo-800 border-indigo-200",
  "In Integration": "bg-teal-50 text-teal-800 border-teal-200",
  "Research System": "bg-blue-50 text-blue-800 border-blue-200",
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
