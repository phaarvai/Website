"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/content/projects";
import { themes } from "@/content/themes";
import { ThemeBadge, ProjectLinkBadge, TechTagBadge } from "@/components/StatusBadge";
import { ProjectThumbnail } from "@/components/visuals/ProjectThumbnail";
import {
  getProjectAriaLabel,
  getProjectLinkLabel,
  projectOpensInNewTab,
  resolveProjectUrl,
} from "@/lib/projectLinks";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact" | "detailed";
  showThumbnail?: boolean;
  className?: string;
  delay?: number;
}

export function ProjectCard({
  project,
  variant = "default",
  showThumbnail,
  className,
  delay = 0,
}: ProjectCardProps) {
  const themeLabels = project.themes
    .map((id) => themes.find((t) => t.id === id)?.title)
    .filter(Boolean) as string[];

  const href = resolveProjectUrl(project.externalUrl);
  const opensInNewTab = projectOpensInNewTab(project);
  const linkLabel = getProjectLinkLabel(project);
  const ariaLabel = getProjectAriaLabel(project);
  const primaryTheme = project.themes[0];
  const shouldShowThumbnail =
    showThumbnail ?? (variant !== "compact" && !project.image);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay }}
      className={cn(
        "group relative bg-card border border-border rounded-2xl flex flex-col h-full overflow-hidden",
        "cursor-pointer transition-all duration-200 ease-out",
        "hover:shadow-[0_16px_48px_-16px_rgba(30,80,90,0.22)] hover:scale-[1.02] hover:-translate-y-1",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background",
        variant === "compact" && "card-pad",
        className
      )}
    >
      <a
        href={href}
        target={opensInNewTab ? "_blank" : undefined}
        rel={opensInNewTab ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className="absolute inset-0 z-10 rounded-2xl outline-none"
      >
        <span className="sr-only">{linkLabel}</span>
      </a>

      {shouldShowThumbnail && primaryTheme && (
        <ProjectThumbnail
          primaryTheme={primaryTheme}
          systemType={project.systemType}
          className="-mx-px -mt-px"
        />
      )}

      {project.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted shrink-0">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={delay === 0}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-12 md:h-14 bg-gradient-to-t from-card/45 to-transparent pointer-events-none"
            aria-hidden
          />
          {project.systemType && (
            <span className="absolute top-3 left-3 z-[1] text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
              {project.systemType}
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          "relative flex flex-col flex-grow pointer-events-none min-h-0",
          variant === "compact" ? "" : "card-pad pt-5 md:pt-6"
        )}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className={cn(
              "font-bold text-foreground leading-snug group-hover:text-primary transition-colors",
              variant === "compact" ? "text-lg" : "text-xl"
            )}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            aria-hidden
            className="text-muted-foreground/40 group-hover:text-primary shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <p
          className={cn(
            "text-muted-foreground text-prose text-pretty",
            variant === "compact"
              ? "text-sm mb-3 line-clamp-3"
              : "text-[15px] leading-[1.65] mb-4 line-clamp-3 min-h-[4.875rem]"
          )}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.badge && <ProjectLinkBadge label={project.badge} />}
          {project.tags.slice(0, 3).map((tag) => (
            <TechTagBadge key={tag} label={tag} />
          ))}
        </div>

        {themeLabels.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {themeLabels.map((label) => (
              <ThemeBadge key={label} label={label} />
            ))}
          </div>
        )}

        {variant !== "compact" && (project.deploymentContext || project.targetUsers) && (
          <div className="text-body-sm text-muted-foreground border-t border-border pt-4 space-y-1.5 mt-auto">
            {project.deploymentContext && (
              <p className="leading-snug">
                <span className="font-semibold text-foreground/80">Deployment: </span>
                {project.deploymentContext}
              </p>
            )}
            {project.targetUsers && (
              <p className="leading-snug">
                <span className="font-semibold text-foreground/80">Operators: </span>
                {project.targetUsers}
              </p>
            )}
          </div>
        )}

        {variant === "detailed" && (
          <div className="border-t border-border pt-4 text-body-sm text-muted-foreground mb-4">
            <p>
              <span className="font-semibold text-foreground/80">Capabilities: </span>
              {project.building}
            </p>
          </div>
        )}

        <div
          className={cn(
            "pt-4 border-t border-border flex items-center justify-between gap-3",
            variant !== "compact" && !(project.deploymentContext || project.targetUsers)
              ? "mt-auto"
              : variant !== "compact"
                ? "mt-4"
                : "mt-auto"
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
            {linkLabel}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-px"
            />
          </span>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors pointer-events-auto"
                title="View GitHub Repository"
                aria-label={`${project.title} GitHub repository (opens in a new tab)`}
              >
                <Github size={16} />
              </a>
            )}
            {opensInNewTab && (
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70">
                External
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
