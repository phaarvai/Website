"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { AISystemsEcosystem } from "@/components/visuals/AISystemsEcosystem";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";

export function IntelligentSystemsSection() {
  const { intelligentSystems } = siteContent;

  return (
    <section className="section-y bg-background relative overflow-hidden" aria-label="AI systems ecosystem">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden>
        <NetworkMesh variant="light" density="sparse" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="section-header lg:mb-0 max-w-xl"
          >
            <span className="label-mono mb-3 block">Architecture</span>
            <h2 className="heading-section mb-4">{intelligentSystems.title}</h2>
            <p className="text-lead text-prose mb-8">{intelligentSystems.subtitle}</p>
            <ul className="space-y-3">
              {intelligentSystems.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-muted-foreground"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <AISystemsEcosystem />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
