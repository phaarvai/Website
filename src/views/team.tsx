"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { teamContent } from "@/content/team";

const fadeIn = {
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
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.05 }}
      className="group bg-white border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <h2 className="text-base font-bold text-foreground leading-snug mb-0.5">{member.name}</h2>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">{member.role}</p>
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

        <div className="pt-3 border-t border-border">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors group/link"
            aria-label={`${member.name} on LinkedIn`}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-muted group-hover/link:bg-primary/10 transition-colors">
              <Linkedin size={12} className="group-hover/link:text-primary transition-colors" />
            </span>
            LinkedIn
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

      <article className="pt-20">
        {/* Hero — compact */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl pt-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="label-mono mb-3">{hero.label}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-3">
              {hero.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="border-t border-border" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl pt-10 pb-16">

          {/* Team Grid */}
          <section aria-label="Team members">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {members.map((member, idx) => (
                <MemberCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </section>

          {/* Why We Build */}
          <motion.section
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
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
