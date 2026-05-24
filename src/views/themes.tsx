"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { themes } from "@/content/themes";
import { getProjectsByTheme } from "@/content/projects";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { siteContent } from "@/content/site";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function Themes() {
  return (
    <>
      <PageSEO
        title="Operational Domains — Applied AI Systems"
        description="Technology systems, government infrastructure, environment & resilience, data & AI, cybersecurity, and emerging research."
        path="/themes"
      />

      <article className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Operational Domains"
            title="Where we build and deploy AI systems"
            description="Six domains where Phaarvai delivers applied AI, operational intelligence, and intelligent infrastructure for institutional environments."
          />

          <div className="space-y-20">
            {themes.map((theme, themeIdx) => {
              const Icon = theme.icon;
              const related = getProjectsByTheme(theme.id);

              return (
                <motion.section
                  key={theme.id}
                  id={theme.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: themeIdx * 0.02 }}
                  className="scroll-mt-28"
                  aria-label={theme.title}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {theme.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed max-w-3xl">
                        {theme.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                        Operational challenges
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {theme.problemAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {related.length > 0 && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                          Related systems
                        </h3>
                        <motion.div className="grid gap-4">
                          {related.map((project, idx) => (
                            <ProjectCard
                              key={project.id}
                              project={project}
                              variant="compact"
                              delay={idx * 0.03}
                            />
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/projects"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View all systems in this domain →
                  </Link>

                  {themeIdx < themes.length - 1 && (
                    <hr className="mt-16 border-border" />
                  )}
                </motion.section>
              );
            })}
          </div>
        </div>

        <CTASection
          title={siteContent.partnerCta.title}
          description={siteContent.partnerCta.description}
          buttonLabel={siteContent.partnerCta.primary.label}
          buttonHref={siteContent.partnerCta.primary.href}
        />
      </article>
    </>
  );
}
