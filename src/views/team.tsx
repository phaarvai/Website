"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { teamContent } from "@/content/team";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" },
  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const { hero, members, mission } = teamContent;

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  const isAboveFold = index < 3;
  return (
    <motion.article
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.05 }}
      className="group relative bg-white border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Photo */}
      <div className="relative h-48 overflow-hidden bg-muted shrink-0">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
          loading={isAboveFold ? "eager" : "lazy"}
          fetchPriority={isAboveFold ? "high" : "auto"}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 hidden items-center justify-center bg-primary/8"
          aria-hidden="true"
        >
          <span className="text-4xl font-bold text-primary/40 tracking-wider">{member.initials}</span>
        </div>

        {/* LinkedIn hover-reveal on photo */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View LinkedIn profile of ${member.name}`}
          title="View Profile"
          className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out hover:bg-[#0A66C2] hover:scale-110"
          style={{ transitionProperty: "opacity, transform, background-color, scale" }}
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin size={16} className="text-slate-600 group-hover/li:text-white transition-colors" style={{ color: "inherit" }} />
        </a>

        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <h2 className="text-base font-bold text-foreground leading-snug mb-0.5">{member.name}</h2>
          <p className="text-[11px] font-semibold text-primary uppercase tracking-widest">{member.role}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{member.bio}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.expertise.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/7 text-primary border border-primary/12"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom LinkedIn bar */}
        <div className="pt-3 border-t border-border flex items-center justify-between">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View LinkedIn profile of ${member.name}`}
            title="View Profile"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-[#0A66C2] transition-colors duration-200 group/li"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-muted group-hover/li:bg-[#0A66C2]/10 transition-colors duration-200">
              <Linkedin size={12} className="group-hover/li:text-[#0A66C2] transition-colors duration-200" />
            </span>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Team() {
  return (
    <>
      <PageSEO
        title="Our Team — PHAARVAI"
        description="Meet the practitioners behind PHAARVAI — experienced leaders in AI, IoT, cloud security, distributed systems, and institutional strategy."
      />

      <article>
        {/* Hero — dark navy gradient, no white expanse */}
        <div className="hero-gradient pt-24">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl pt-10 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <p className="text-[10px] font-mono tracking-[0.14em] uppercase text-blue-300/80 mb-3">
                {hero.label}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-3">
                {hero.title}
              </h1>
              <p className="text-base md:text-lg text-blue-100/70 max-w-lg leading-relaxed">
                {hero.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Cards section — tight to hero */}
        <div className="container mx-auto px-6 md:px-12 max-w-6xl pt-10 pb-16">

          <section aria-label="Team members">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {members.map((member, idx) => (
                <MemberCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </section>

          {/* Why We Build */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-12 bg-white border border-border rounded-2xl p-8 md:p-12"
            aria-label="Team mission"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-2">
                <p className="label-mono mb-3">{mission.label}</p>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                  {mission.title}
                </h2>
              </div>
              <div className="lg:col-span-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{mission.body}</p>
              </div>
            </div>
          </motion.section>

        </div>

        <CTASection
          title="Work with our team"
          description="Have a project in mind? We partner directly — no intermediaries, no handoffs."
          buttonLabel="Start a Conversation"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
