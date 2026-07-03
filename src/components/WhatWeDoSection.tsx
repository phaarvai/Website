"use client";

import { motion } from "framer-motion";
import { Bot, Database, Network, Workflow } from "lucide-react";
import { siteContent } from "@/content/site";
import { CardTechHeader, techVariantForIndex } from "@/components/visuals/CardTechHeader";
import type { LucideIcon } from "lucide-react";

const areaIcons: Record<string, LucideIcon> = {
  "applied-ai": Bot,
  "intelligent-infrastructure": Network,
  "data-platforms": Database,
  "decision-automation": Workflow,
};

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.38 },
};

export function WhatWeDoSection() {
  const { whatWeDo } = siteContent;

  return (
    <section className="section-y section-alt border-y border-border" aria-label="What we do">
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-header text-center max-w-2xl mx-auto">
          <span className="label-mono mb-3 block">Engineering</span>
          <h2 className="heading-section mb-4">{whatWeDo.title}</h2>
          <p className="text-lead text-prose">{whatWeDo.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7 max-w-5xl mx-auto">
          {whatWeDo.areas.map((area, idx) => {
            const Icon = areaIcons[area.id] ?? Bot;
            return (
              <motion.article
                key={area.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                className="bg-card border border-border rounded-2xl card-pad-sm card-hover overflow-hidden flex flex-col"
              >
                <CardTechHeader variant={techVariantForIndex(idx)} />
                <div className="flex gap-4 items-start -mt-1">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{area.title}</h3>
                    <p className="text-[15px] text-muted-foreground text-prose">{area.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
