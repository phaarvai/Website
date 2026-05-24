"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { themes } from "@/content/themes";
import { getFeaturedProjects } from "@/content/projects";
import { homeCapabilities } from "@/content/capabilities";
import { HeroSection } from "@/components/HeroSection";
import { ThemeCard } from "@/components/ThemeCard";
import { ProjectCard } from "@/components/ProjectCard";
import { InfrastructureSnapshot } from "@/components/InfrastructureSnapshot";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.35 },
};

export default function Home() {
  const { hero, operationalDomains, featuredDeployments, partnerCta } = siteContent;
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <PageSEO
        title="Applied AI & Intelligent Infrastructure"
        description="Phaarvai develops AI-powered systems and intelligent infrastructure for governments, institutions, and real-world operational environments."
        path="/"
      />

      <HeroSection
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
        ctaTertiary={hero.ctaTertiary}
        badges={hero.badges}
      />

      <InfrastructureSnapshot />

      <section className="py-16 md:py-20 bg-background" aria-label="Operational domains">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {operationalDomains.title}
            </h2>
            <Link
              href="/themes"
              className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 shrink-0"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme, idx) => (
              <ThemeCard key={theme.id} theme={theme} delay={idx * 0.03} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-y border-border" aria-label="Featured systems">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="label-mono mb-1 block">{featuredDeployments.label}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {featuredDeployments.title}
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 shrink-0"
            >
              All systems <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} delay={idx * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" aria-label="Capabilities">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Capabilities</h2>
            <Link
              href="/capabilities"
              className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 shrink-0"
            >
              Explore <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {homeCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                  className="bg-card border border-border rounded-xl p-4 text-center card-hover"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary mx-auto mb-3">
                    <Icon size={17} />
                  </div>
                  <h3 className="text-xs font-bold text-foreground leading-snug">{cap.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={partnerCta.title}
        description={partnerCta.description}
        buttonLabel={partnerCta.primary.label}
        buttonHref={partnerCta.primary.href}
        secondaryLabel={partnerCta.secondary.label}
        secondaryHref={partnerCta.secondary.href}
      />
    </>
  );
}
