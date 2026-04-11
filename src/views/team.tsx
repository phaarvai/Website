"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { teamContent } from "@/content/team";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const { hero, members, mission } = teamContent;

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  return (
    <motion.article
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.07 }}
      className="group bg-white border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        {/* Initials fallback */}
        <div
          className="absolute inset-0 hidden items-center justify-center bg-primary/8"
          aria-hidden="true"
        >
          <span className="text-4xl font-bold text-primary/40 tracking-wider">
            {member.initials}
          </span>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        {/* Name + Role */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-foreground leading-snug mb-1">{member.name}</h2>
          <p className="text-sm font-medium text-primary">{member.role}</p>
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {member.bio}
        </p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.expertise.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/7 text-primary border border-primary/12"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LinkedIn */}
        <div className="pt-4 border-t border-border">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors group/link"
            aria-label={`${member.name} on LinkedIn`}
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted group-hover/link:bg-primary/10 transition-colors">
              <Linkedin size={14} className="group-hover/link:text-primary transition-colors" />
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

      <article className="pt-24">
        {/* Hero */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="label-mono mb-5">{hero.label}</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Divider line */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="border-t border-border" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl py-16 md:py-20">

          {/* Team Grid */}
          <section aria-label="Team members">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, idx) => (
                <MemberCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </section>

          {/* Why We Build */}
          <motion.section
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="mt-20 md:mt-28 bg-white border border-border rounded-2xl p-10 md:p-14"
            aria-label="Team mission"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-2">
                <p className="label-mono mb-4">{mission.label}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                  {mission.title}
                </h2>
              </div>
              <div className="lg:col-span-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {mission.body}
                </p>
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
