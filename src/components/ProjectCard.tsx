"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { themes } from "@/content/themes";
import { StatusBadge, ThemeBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact" | "detailed";
  className?: string;
  delay?: number;
}

export function ProjectCard({
  project,
  variant = "default",
  className,
  delay = 0,
}: ProjectCardProps) {
  const themeLabels = project.themes
    .map((id) => themes.find((t) => t.id === id)?.title)
    .filter(Boolean) as string[];

  const displayStages = [...new Set([...project.stages, ...project.status])];

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col h-full",
        variant === "detailed" && "lg:p-8",
        className
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        className="flex flex-wrap gap-2 mb-4"
        initial={false}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {themeLabels.map((label) => (
          <ThemeBadge key={label} label={label} />
        ))}
      </motion.div>

      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors"
        />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <motion.div
        className="flex flex-wrap gap-1.5 mb-4"
        initial={false}
      >
        {displayStages.map((stage) => (
          <StatusBadge key={stage} stage={stage} />
        ))}
      </motion.div>

      {variant !== "compact" && project.opportunity && (
        <p className="text-xs text-muted-foreground border-t border-border pt-4 mb-3">
          <span className="font-semibold text-foreground/80">Opportunity: </span>
          {project.opportunity}
        </p>
      )}

      {variant === "detailed" && (
        <motion.div
          className="space-y-3 border-t border-border pt-4 text-xs text-muted-foreground"
          initial={false}
        >
          <p>
            <span className="font-semibold text-foreground/80">Building: </span>
            {project.building}
          </p>
          <p>
            <span className="font-semibold text-foreground/80">Partners: </span>
            {project.potentialPartners.join(" · ")}
          </p>
        </motion.div>
      )}
      </Link>
    </motion.article>
  );
}
