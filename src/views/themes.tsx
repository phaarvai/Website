"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { themes } from "@/content/themes";
import { getProjectsByTheme } from "@/content/projects";
import { siteContent } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { CardTechHeader, techVariantForIndex } from "@/components/visuals/CardTechHeader";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

function TagGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/6 text-primary border border-primary/12"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Themes() {
  const { themesPage, partnerCta } = siteContent;

  return (
    <>
      <PageSEO
        title="Technology Domains — Applied AI & Infrastructure"
        description="Applied AI across infrastructure, institutions, and operational systems — technology domains where Phaarvai designs, deploys, and scales intelligent platforms."
        path="/themes"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label={themesPage.label}
            title={themesPage.title}
            description={themesPage.description}
            visual
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-8">
            {themes.map((theme, themeIdx) => {
              const Icon = theme.icon;
              const related = getProjectsByTheme(theme.id).slice(0, 2);

              return (
                <motion.section
                  key={theme.id}
                  id={theme.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: themeIdx * 0.04 }}
                  className="scroll-mt-28 bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col tech-panel"
                  aria-label={theme.title}
                >
                  <CardTechHeader variant={techVariantForIndex(themeIdx)} />

                  <div className="card-pad-sm pt-0 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <div>
                        <span className="label-mono mb-1 block">
                          Domain {String(themeIdx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl font-bold text-foreground leading-snug">{theme.title}</h2>
                      </div>
                    </div>

                    <p className="text-[15px] text-muted-foreground text-prose mb-6">{theme.description}</p>

                    <div className="space-y-4 mb-6">
                      <TagGroup label="Core technologies" items={theme.coreTechnologies} />
                      <TagGroup label="Operational capabilities" items={theme.operationalCapabilities} />
                      <TagGroup label="Deployed across" items={theme.industries} />
                    </div>

                    {related.length > 0 && (
                      <div className="space-y-3 mb-6 flex-grow border-t border-border pt-5">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                          Related systems
                        </p>
                        {related.map((project, idx) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            variant="compact"
                            showThumbnail={false}
                            delay={idx * 0.02}
                          />
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                      <Link
                        href="/projects"
                        className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all gap-1.5 group"
                      >
                        View systems
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      <Link
                        href="/capabilities"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors gap-1 group"
                      >
                        Explore capability
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>

        <CTASection
          title="Engineering intelligent systems across domains"
          description="Explore our capabilities and deployment portfolio — or partner with us to architect, build, and operate AI-powered infrastructure."
          buttonLabel="View Capabilities"
          buttonHref="/capabilities"
          secondaryLabel={partnerCta.primary.label}
          secondaryHref={partnerCta.primary.href}
        />
      </article>
    </>
  );
}
