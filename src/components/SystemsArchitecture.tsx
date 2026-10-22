"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { StackFlowDiagram } from "@/components/visuals/StackFlowDiagram";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";

export function SystemsArchitecture() {
  const { systemsArchitecture } = siteContent;
  return (
    <section className="section-y-tight relative overflow-hidden bg-background" aria-label="Systems architecture">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <NetworkMesh variant="light" density="sparse" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="section-header lg:mb-0">
            <span className="label-mono mb-3 block">Stack</span>
            <h2 className="heading-section mb-4">{systemsArchitecture.title}</h2>
            <p className="text-lead mb-6">{systemsArchitecture.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {["Data Ingestion", "AI Orchestration", "Secure Deploy"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/6 text-primary border border-primary/12"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <StackFlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
