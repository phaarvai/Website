"use client";

import { motion } from "framer-motion";
import { ArrowDown, Layers } from "lucide-react";
import { siteContent } from "@/content/site";
import { SectionIntro } from "@/components/SectionIntro";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

export function SystemsArchitecture() {
  const { systemsArchitecture } = siteContent;
  return (
    <section className="section-y bg-background" aria-label="Systems architecture">
      <div className="container mx-auto px-6 md:px-12">
        <SectionIntro title={systemsArchitecture.title} subtitle={systemsArchitecture.subtitle} centered className="mx-auto text-center mb-12" />
        <div className="max-w-3xl mx-auto">
          {systemsArchitecture.layers.map((layer, idx) => (
            <motion.div key={layer.id} {...fadeIn} transition={{ ...fadeIn.transition, delay: idx * 0.06 }}>
              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 card-hover overflow-hidden group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Layers size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-primary font-semibold mb-1 block">Layer {String(idx + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{layer.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                  </div>
                </div>
              </div>
              {idx < systemsArchitecture.layers.length - 1 && (
                <div className="flex justify-center py-3 text-muted-foreground/50" aria-hidden>
                  <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowDown size={18} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}