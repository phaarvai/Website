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
        "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wide",
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
        "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border",
        className
      )}
    >
      {label}
    </span>
  );
}

const projectBadgeStyles: Record<string, string> = {
  Live: "bg-emerald-50 text-emerald-800 border-emerald-200",
  Platform: "bg-violet-50 text-violet-800 border-violet-200",
  System: "bg-teal-50 text-teal-800 border-teal-200",
  Operational: "bg-cyan-50 text-cyan-800 border-cyan-200",
  Production: "bg-indigo-50 text-indigo-800 border-indigo-200",
  Deployment: "bg-slate-50 text-slate-800 border-slate-200",
  Active: "bg-amber-50 text-amber-800 border-amber-200",
  Research: "bg-blue-50 text-blue-800 border-blue-200",
  Figma: "bg-pink-50 text-pink-800 border-pink-200",
};

interface ProjectLinkBadgeProps {
  label: string;
  className?: string;
}

export function ProjectLinkBadge({ label, className }: ProjectLinkBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wide",
        projectBadgeStyles[label] ?? "bg-muted text-muted-foreground border-border",
        className
      )}
    >
      {label}
    </span>
  );
}

const techTagStyles: Record<string, string> = {
  AI: "bg-primary/8 text-primary border-primary/15",
  Infrastructure: "bg-slate-100 text-slate-700 border-slate-200",
  Data: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Security: "bg-sky-50 text-sky-800 border-sky-200",
  Research: "bg-blue-50 text-blue-800 border-blue-200",
  Deployment: "bg-teal-50 text-teal-800 border-teal-200",
  Operational: "bg-cyan-50 text-cyan-800 border-cyan-200",
  Platform: "bg-violet-50 text-violet-800 border-violet-200",
};

interface TechTagBadgeProps {
  label: string;
  className?: string;
}

export function TechTagBadge({ label, className }: TechTagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-md border tracking-wide",
        techTagStyles[label] ?? "bg-muted/80 text-muted-foreground border-border",
        className
      )}
    >
      {label}
    </span>
  );
}
