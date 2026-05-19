"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects, projectStages } from "@/content/projects";
import { themes } from "@/content/themes";
import type { ProjectStage, ThemeId } from "@/content/types";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { siteContent } from "@/content/site";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [themeFilter, setThemeFilter] = useState<ThemeId | "all">("all");
  const [stageFilter, setStageFilter] = useState<ProjectStage | "all">("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTheme = themeFilter === "all" || p.themes.includes(themeFilter);
      const matchesStage =
        stageFilter === "all" ||
        p.stages.includes(stageFilter) ||
        p.status.includes(stageFilter);
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.building.toLowerCase().includes(q) ||
        (p.opportunity?.toLowerCase().includes(q) ?? false);
      return matchesTheme && matchesStage && matchesSearch;
    });
  }, [search, themeFilter, stageFilter]);

  return (
    <>
      <PageSEO
        title="Projects — AI for Good Concepts & Prototypes"
        description="Explore Phaarvai's active concepts, prototypes, and proposal-ready projects across government, climate, policy, and more."
        path="/projects"
      />

      <article className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Projects"
            title="Proposal-ready innovation in progress"
            description="Our project portfolio is the core growth engine of Phaarvai — every funding opportunity, challenge, or prototype becomes a public credibility asset."
          />

          {/* Filters */}
          <motion.div
            className="mb-10 space-y-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-11 bg-card"
                aria-label="Search projects"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Theme
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  active={themeFilter === "all"}
                  onClick={() => setThemeFilter("all")}
                  label="All themes"
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

            <motion.div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Stage
              </p>
              <div className="flex flex-wrap gap-2">
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
            </motion.div>
          </motion.div>

          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} of {projects.length} projects
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground">No projects match your filters.</p>
            </div>
          ) : (
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="detailed"
                  delay={idx * 0.03}
                />
              ))}
            </motion.div>
          )}
        </div>

        <CTASection
          title="Have a challenge that should become a project?"
          description="We add new concepts and prototypes as opportunities emerge. Partner with us to co-create the next one."
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
      className={cn(
        "text-xs font-medium px-3 py-1.5 rounded-full border transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
