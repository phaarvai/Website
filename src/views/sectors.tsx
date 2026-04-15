"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { sectors } from "@/content/sectors";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { Building2, Train, Zap, Globe, Network, Shield } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2, Train, Zap, Globe, Network, Shield
};

export const sectorSlugs: Record<string, string> = {
  "Government": "government",
  "Infrastructure": "infrastructure",
  "Energy": "energy",
  "Foundations & Philanthropy": "foundations",
  "Innovation Ecosystems": "innovation-ecosystems",
  "Defense & Strategic Systems": "defense",
};

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

export default function Sectors() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 80);
      }
    };
    tryScroll();
  }, []);

  return (
    <>
      <PageSEO
        title="Sectors — Government, Infrastructure, Energy, Foundations & Defense"
        description="PHAARVAI operates across government, critical infrastructure, energy, foundations, innovation ecosystems, and defense — where operational data holds strategic value."
        path="/sectors"
      />

      <article className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-[1.1]">
              Sectors
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              We operate in environments where operational data holds immense strategic value and system failures carry significant public consequence.
            </p>
          </motion.header>

          <div className="space-y-4 mb-12">
            {sectors.map((sector, idx) => {
              const Icon = iconMap[sector.icon] || Network;
              const slug = sectorSlugs[sector.name] || sector.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.section
                  key={idx}
                  id={slug}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                  className="bg-white border border-border rounded-xl overflow-hidden scroll-mt-24"
                  aria-label={sector.name}
                >
                  <header className="px-6 py-5 border-b border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-foreground">{sector.name}</h2>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 max-w-3xl">{sector.description}</p>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="px-6 py-5">
                      <h3 className="text-[10px] font-semibold tracking-widest uppercase text-rose-500/80 mb-3">Common Problems</h3>
                      <ul className="space-y-2">
                        {sector.problems.map((problem, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 py-5">
                      <h3 className="text-[10px] font-semibold tracking-widest uppercase text-primary/80 mb-3">Systems We Build</h3>
                      <ul className="space-y-2">
                        {sector.systemsBuilt.map((system, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span className="text-sm text-foreground leading-relaxed">{system}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>

        </div>

        <CTASection
          title="Aligning Technology with Institutional Mandates"
          description="Whether navigating government procurement or infrastructure compliance, we build systems that meet rigorous domain standards."
          buttonLabel="Contact Our Team"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
