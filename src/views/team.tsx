"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Award, Server, CheckCircle2 } from "lucide-react";
import { teamContent, type TeamMember } from "@/content/team";
import { TechTagBadge } from "@/components/StatusBadge";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";
import { OperationalDashboard } from "@/components/visuals/OperationalDashboard";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const { hero, members, mission, credibilityMetrics, collectiveImpact } = teamContent;

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const isAboveFold = index < 3;

  return (
    <motion.article
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.05 }}
      className={cn(
        "group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col",
        "transition-all duration-200 ease-out",
        "hover:shadow-[0_16px_48px_-16px_rgba(30,80,90,0.2)] hover:scale-[1.01] hover:-translate-y-1",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background"
      )}
    >
      <div className="relative overflow-hidden shrink-0 h-64 md:h-72 bg-muted">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ objectPosition: "center center" }}
            loading={isAboveFold ? "eager" : "lazy"}
            fetchPriority={isAboveFold ? "high" : "auto"}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className={cn(
            "absolute inset-0 items-center justify-center bg-muted",
            member.photo ? "hidden" : "flex"
          )}
          aria-hidden
        >
          <span className="text-5xl font-bold tracking-wider text-primary/40">{member.initials}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card via-card/80 to-transparent" />

        <div className="absolute top-3 right-3 flex gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View LinkedIn profile of ${member.name}`}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-card/95 shadow-md border border-border opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-105"
            >
              <Linkedin size={15} className="text-[#0A66C2] group-hover:text-white transition-colors" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub profile of ${member.name}`}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-card/95 shadow-md border border-border opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:bg-foreground hover:border-foreground hover:scale-105"
            >
              <Github size={15} className="text-foreground group-hover:text-background transition-colors" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 card-pad-sm -mt-4 relative">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-foreground leading-snug mb-1">{member.name}</h2>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">{member.role}</p>
          <p className="text-sm font-medium text-foreground/80 leading-snug">{member.specialization}</p>
        </div>

        <p className="text-[15px] text-muted-foreground text-prose mb-5">{member.bio}</p>

        <div className="mb-5">
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
            Technology domains
          </p>
          <div className="flex flex-wrap gap-1.5">
            {member.expertise.map((tag) => (
              <TechTagBadge key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="mb-5 rounded-xl border border-primary/12 bg-primary/4 p-4">
          <p className="text-[10px] font-mono uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
            <Award size={12} aria-hidden />
            Verified achievements
          </p>
          <ul className="space-y-2">
            {member.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2 text-sm text-foreground/85 leading-snug">
                <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" aria-hidden />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
            <Server size={12} aria-hidden />
            Systems delivered
          </p>
          <ul className="space-y-1.5">
            {member.systemsDelivered.map((system) => (
              <li key={system} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" aria-hidden />
                {system}
              </li>
            ))}
          </ul>
        </div>

        {member.certifications && member.certifications.length > 0 && (
          <div className="mb-5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Certifications & publications
            </p>
            <ul className="space-y-1">
              {member.certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted-foreground">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-border flex flex-wrap gap-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#0A66C2] transition-colors group/li"
            >
              <Linkedin size={14} className="group-hover/li:text-[#0A66C2] transition-colors" />
              LinkedIn
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Team() {
  return (
    <>
      <PageSEO
        title="Engineering Team — Phaarvai"
        description="Technical leadership with proven experience delivering AI systems, cloud infrastructure, enterprise platforms, cybersecurity, and digital twin deployments at institutional scale."
        path="/team"
      />

      <article>
        <div className="hero-gradient pt-28 md:pt-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
            <NetworkMesh variant="dark" />
          </div>
          <div className="container mx-auto px-6 md:px-12 max-w-6xl pt-12 pb-16 md:pb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <p className="label-mono text-teal-300/80 mb-4">{hero.label}</p>
                <h1 className="heading-page text-white mb-5">{hero.title}</h1>
                <p className="text-lead text-teal-100/80 max-w-xl text-prose">{hero.subtitle}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:block scale-90 origin-top-right"
                aria-hidden
              >
                <OperationalDashboard />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl pt-12 pb-20 md:pb-24">
          <motion.section {...fadeUp} className="mb-14 md:mb-16" aria-label="Collective engineering impact">
            <span className="label-mono mb-4 block">{collectiveImpact.label}</span>
            <h2 className="heading-section mb-3">{collectiveImpact.title}</h2>
            <p className="text-lead text-prose max-w-3xl mb-10">{collectiveImpact.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {credibilityMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.03 }}
                  className="glass-panel rounded-xl border border-border card-pad-sm text-center card-hover"
                >
                  <p className="stat-number text-xl md:text-2xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div {...fadeUp} className="mb-10">
            <span className="label-mono mb-4 block">Team profiles</span>
            <h2 className="heading-section">Engineering leadership & contributors</h2>
          </motion.div>

          <section aria-label="Team members">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-8">
              {members.map((member, idx) => (
                <MemberCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </section>

          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-16 md:mt-20 bg-card border border-border rounded-2xl card-pad"
            aria-label="Engineering standard"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-2">
                <p className="label-mono mb-4">{mission.label}</p>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug">{mission.title}</h2>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[15px] text-muted-foreground text-prose">{mission.body}</p>
              </div>
            </div>
          </motion.section>
        </div>

        <CTASection
          title="Work with our engineering team"
          description="Partner on AI systems, cloud infrastructure, and institutional technology — from architecture through production deployment."
          buttonLabel="Partner With Us"
          buttonHref="/partner"
        />
      </article>
    </>
  );
}
