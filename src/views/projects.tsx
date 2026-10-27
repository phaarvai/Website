"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { Input } from "@/components/ui/input";
import { projectMatchesSearch } from "@/lib/projectSearch";

export default function Projects() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => projects.filter((project) => projectMatchesSearch(project, search)),
    [search]
  );

  return (
    <>
      <PageSEO
        title="Projects & Deployments"
        description="Explore Phaarvai's applied AI systems, operational platforms, and deployment environments across institutional domains."
        path="/projects"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="mb-12"
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
                aria-label="Search projects by title, technology, domain, or capability"
              />
            </div>
          </motion.div>

          <motion.p
            key={`count-${filtered.length}-${search}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[15px] text-muted-foreground mb-8"
          >
            Showing {filtered.length} of {projects.length} projects
          </motion.p>

          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 border border-dashed border-border rounded-2xl"
            >
              <p className="text-muted-foreground">No projects match your filters.</p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                Try a different search term or clear your search.
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
          buttonHref="/partner#contact"
        />
      </article>
    </>
  );
}
