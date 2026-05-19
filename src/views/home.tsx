"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { themes } from "@/content/themes";
import { getFeaturedProjects } from "@/content/projects";
import { homeCapabilities, whatWeDoSteps } from "@/content/capabilities";
import { aboutContent } from "@/content/about";
import { HeroSection } from "@/components/HeroSection";
import { ThemeCard } from "@/components/ThemeCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessFlow } from "@/components/ProcessFlow";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { SectionIntro } from "@/components/SectionIntro";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

export default function Home() {
  const { hero, whatWeDo, operatingModel, whyPhaarvai, partnerCta } = siteContent;
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <PageSEO
        title="AI for Good, Built for Public Impact"
        description="Phaarvai develops AI-powered ideas, prototypes, and platforms across government, climate, economic development, startups, technology, and policy."
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

      <section className="py-16 md:py-20 bg-background" aria-label="What we do">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={whatWeDo.title} subtitle={whatWeDo.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatWeDoSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <span className="text-[10px] font-mono text-primary font-semibold mb-3 block">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-y border-border" aria-label="Operating model">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            title={operatingModel.title}
            subtitle={operatingModel.subtitle}
            centered
            className="mx-auto text-center"
          />
          <ProcessFlow steps={operatingModel.steps} />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" aria-label="Themes">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionIntro
              title="Impact Themes"
              subtitle="Six domains where we identify challenges, build prototypes, and develop proposal-ready solutions."
              className="mb-0"
            />
            <Link
              href="/themes"
              className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1.5 shrink-0"
            >
              All themes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {themes.map((theme, idx) => (
              <ThemeCard key={theme.id} theme={theme} delay={idx * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-y border-border" aria-label="Featured projects">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
            {...fadeIn}
          >
            <div>
              <span className="label-mono mb-2 block">Active Concepts & Prototypes</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Proposal-ready concepts and prototypes across our impact themes — scalable as new opportunities emerge.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1.5"
            >
              View all projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" aria-label="Capabilities">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionIntro
              title="Capabilities"
              subtitle="From challenge discovery to implementation partnerships — built for public-impact institutions."
              className="mb-0"
            />
            <Link
              href="/capabilities"
              className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1.5"
            >
              Full capabilities <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="bg-card border border-border rounded-xl p-5 card-hover group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={17} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-y border-border" aria-label="Why Phaarvai">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro title={whyPhaarvai.title} subtitle={whyPhaarvai.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyPhaarvai.points.map((point, idx) => (
              <motion.div
                key={point.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                className="flex gap-4 p-6 bg-card border border-border rounded-xl"
              >
                <span className="text-xs font-bold text-primary font-mono shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.ul className="mt-10 flex flex-wrap gap-2" {...fadeIn}>
            {aboutContent.positioning.map((item) => (
              <li
                key={item}
                className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
              >
                {item}
              </li>
            ))}
          </motion.ul>
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
