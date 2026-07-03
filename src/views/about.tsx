"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Server,
  Cloud,
  Bot,
  Shield,
  Layers,
  Activity,
  Cpu,
  Database,
  Network,
  Building2,
  FlaskConical,
} from "lucide-react";
import { aboutContent } from "@/content/about";
import { teamContent } from "@/content/team";
import { siteContent } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { OperationalDashboard } from "@/components/visuals/OperationalDashboard";
import { AISystemsEcosystem } from "@/components/visuals/AISystemsEcosystem";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

const infrastructureIcons: LucideIcon[] = [Server, Cloud, Bot, Shield, Layers, Activity];

const deploymentIcons: LucideIcon[] = [Cpu, Database, Network, Building2, Server, FlaskConical];

const impactIcons: LucideIcon[] = [Layers, Server, Activity, Building2];

export default function About() {
  const { leadership } = aboutContent;
  const leadershipMembers = leadership.memberIds
    .map((id) => teamContent.members.find((m) => m.id === id))
    .filter(Boolean) as typeof teamContent.members;

  return (
    <>
      <PageSEO
        title="About — Applied AI & Institutional Technology"
        description="Phaarvai is an applied technology organization designing, deploying, and operating AI systems and digital infrastructure for institutions and mission-critical environments."
        path="/about"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
            <PageHeader
              label={aboutContent.hero.label}
              title={aboutContent.hero.title}
              description={aboutContent.hero.subtitle}
              className="mb-0 max-w-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block"
              aria-hidden
            >
              <OperationalDashboard />
            </motion.div>
          </div>

          <motion.section {...fadeIn} className="mb-20 md:mb-24" aria-label="Core focus areas">
            <div className="flex flex-wrap gap-2 mb-10">
              {aboutContent.coreThemes.map((theme) => (
                <span
                  key={theme}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/6 text-primary border border-primary/12"
                >
                  {theme}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <span className="label-mono mb-4 block">{aboutContent.organizationStory.label}</span>
                <h2 className="heading-section mb-6">{aboutContent.organizationStory.title}</h2>
                {aboutContent.organizationStory.paragraphs.map((p, i) => (
                  <p key={i} className="text-[15px] text-muted-foreground text-prose mb-4">
                    {p}
                  </p>
                ))}
              </div>
              <div className="bg-card border border-border rounded-2xl card-pad">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                  What we execute on
                </p>
                <ul className="space-y-3">
                  {aboutContent.organizationStory.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-[15px] text-foreground/90">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <section className="mb-20 md:mb-24" aria-label="Deployment experience">
            <motion.div {...fadeIn} className="mb-10">
              <span className="label-mono mb-4 block">{aboutContent.deploymentExperience.label}</span>
              <h2 className="heading-section mb-4">{aboutContent.deploymentExperience.title}</h2>
              <p className="text-lead text-prose max-w-3xl">{aboutContent.deploymentExperience.description}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-10">
              {aboutContent.deploymentExperience.metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="glass-panel rounded-xl card-pad-sm border border-border text-center"
                >
                  <p className="stat-number text-2xl md:text-3xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aboutContent.deploymentExperience.categories.map((category, idx) => {
                const Icon = deploymentIcons[idx % deploymentIcons.length];
                return (
                  <motion.article
                    key={category.title}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                    className="bg-card border border-border rounded-xl card-pad-sm card-hover flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="mb-20 md:mb-24" aria-label="Infrastructure and systems expertise">
            <motion.div {...fadeIn} className="mb-10">
              <span className="label-mono mb-4 block">{aboutContent.infrastructureExpertise.label}</span>
              <h2 className="heading-section mb-4">{aboutContent.infrastructureExpertise.title}</h2>
              <p className="text-lead text-prose max-w-3xl">{aboutContent.infrastructureExpertise.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aboutContent.infrastructureExpertise.pillars.map((pillar, idx) => {
                const Icon = infrastructureIcons[idx % infrastructureIcons.length];
                return (
                  <motion.article
                    key={pillar.title}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                    className="bg-card border border-border rounded-xl card-pad-sm card-hover"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary mb-4">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section
            className="mb-20 md:mb-24 section-alt border-y border-border section-y"
            aria-label="AI and infrastructure leadership"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="label-mono mb-4 block">{aboutContent.aiInfrastructureLeadership.label}</span>
                <h2 className="heading-section mb-4">{aboutContent.aiInfrastructureLeadership.title}</h2>
                <p className="text-[15px] text-muted-foreground text-prose mb-6">
                  {aboutContent.aiInfrastructureLeadership.description}
                </p>
                <ul className="space-y-3">
                  {aboutContent.aiInfrastructureLeadership.expertiseAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                      {area}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-8 hover:gap-2.5 transition-all"
                >
                  Explore our capabilities <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.08 }}
                className="hidden md:block"
                aria-hidden
              >
                <AISystemsEcosystem />
              </motion.div>
            </div>
          </section>

          <section className="mb-20 md:mb-24" aria-label="Leadership and team expertise">
            <motion.div {...fadeIn} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="label-mono mb-4 block">{aboutContent.leadership.label}</span>
                <h2 className="heading-section mb-4">{aboutContent.leadership.title}</h2>
                <p className="text-lead text-prose max-w-2xl">{aboutContent.leadership.description}</p>
              </div>
              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary shrink-0 hover:gap-2.5 transition-all"
              >
                Meet the full team <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {leadershipMembers.map((member, idx) => (
                <motion.article
                  key={member.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                  className="bg-card border border-border rounded-2xl card-pad-sm card-hover flex gap-5"
                >
                  <div
                    className="w-16 h-16 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0 overflow-hidden"
                    aria-hidden
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt=""
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-lg font-bold text-primary">{member.initials}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-[15px] text-muted-foreground text-prose mb-3">
                      {leadership.capabilityFocus[member.id] ?? member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-primary/6 text-primary border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mb-20 md:mb-24" aria-label="Institutional impact">
            <motion.div {...fadeIn} className="mb-10">
              <span className="label-mono mb-4 block">{aboutContent.institutionalImpact.label}</span>
              <h2 className="heading-section mb-4">{aboutContent.institutionalImpact.title}</h2>
              <p className="text-lead text-prose max-w-3xl">{aboutContent.institutionalImpact.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aboutContent.institutionalImpact.outcomes.map((outcome, idx) => {
                const Icon = impactIcons[idx % impactIcons.length];
                return (
                  <motion.article
                    key={outcome.title}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                    className={cn(
                      "border border-border rounded-xl card-pad-sm card-hover",
                      idx === 0 ? "bg-primary/5 border-primary/15" : "bg-card"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-2">{outcome.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section aria-label="Operating principles">
            <motion.div {...fadeIn} className="mb-10">
              <span className="label-mono mb-4 block">Operating principles</span>
              <h2 className="heading-section">How we engineer and deliver</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aboutContent.values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="bg-card border border-border rounded-xl card-pad-sm card-hover"
                >
                  <h3 className="text-base font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-[15px] text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
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
