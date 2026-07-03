"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects, projectStages } from "@/content/projects";
import { themes } from "@/content/themes";
import type { ProjectStage, ThemeId } from "@/content/types";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { Input } from "@/components/ui/input";
import { projectMatchesSearch } from "@/lib/projectSearch";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [themeFilter, setThemeFilter] = useState<ThemeId | "all">("all");
  const [stageFilter, setStageFilter] = useState<ProjectStage | "all">("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTheme = themeFilter === "all" || p.themes.includes(themeFilter);
      const matchesStage =
        stageFilter === "all" ||
        p.stages.includes(stageFilter) ||
        p.status.includes(stageFilter);
      const matchesSearch = projectMatchesSearch(p, search);
      return matchesTheme && matchesStage && matchesSearch;
    });
  }, [search, themeFilter, stageFilter]);

  return (
    <>
      <PageSEO
        title="Systems & Deployments"
        description="Explore Phaarvai's applied AI systems, operational platforms, and deployment environments across institutional domains."
        path="/projects"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Systems"
            title="Deployment portfolio"
            description="Browse deployable AI platforms, operational systems, and intelligent infrastructure across domains — a living ecosystem of production-grade technology."
            visual
          />

          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, technology, domain, tag, or capability..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-11 bg-card"
                aria-label="Search systems by title, technology, domain, or capability"
              />
            </div>

            <div>
              <p className="label-mono mb-3">Domain</p>
              <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter by domain">
                <FilterChip
                  active={themeFilter === "all"}
                  onClick={() => setThemeFilter("all")}
                  label="All domains"
                />
                {themes.map((t) => (
                  <FilterChip
                    key={t.id}
                    active={themeFilter === t.id}
                    onClick={() => setThemeFilter(t.id)}
                    label={t.title}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="label-mono mb-3">Deployment stage</p>
              <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter by deployment stage">
                <FilterChip
                  active={stageFilter === "all"}
                  onClick={() => setStageFilter("all")}
                  label="All stages"
                />
                {projectStages.map((stage) => (
                  <FilterChip
                    key={stage}
                    active={stageFilter === stage}
                    onClick={() => setStageFilter(stage)}
                    label={stage}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.p
            key={`count-${filtered.length}-${search}-${themeFilter}-${stageFilter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[15px] text-muted-foreground mb-8"
          >
            Showing {filtered.length} of {projects.length} systems
          </motion.p>

          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 border border-dashed border-border rounded-2xl"
            >
              <p className="text-muted-foreground">No systems match your filters.</p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                Try a different search term or clear your domain and stage filters.
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={Math.min(idx * 0.03, 0.15)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <CTASection
          title="Partner on your next deployment"
          description="AI systems engineered for institutional and operational environments."
          buttonLabel="Partner With Us"
          buttonHref="/partner"
        />
      </article>
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "text-sm font-medium px-3.5 py-2 rounded-full border transition-all duration-200",
        active
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground hover:shadow-sm"
      )}
    >
      {label}
    </button>
  );
}
