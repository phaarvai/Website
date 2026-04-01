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
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
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

      <article className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sectors
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              We operate in environments where operational data holds immense strategic value and where system failures carry significant institutional and public consequence.
            </p>
          </motion.header>

          <div className="space-y-5 mb-24">
            {sectors.map((sector, idx) => {
              const Icon = iconMap[sector.icon] || Network;
              const slug = sectorSlugs[sector.name] || sector.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.section
                  key={idx}
                  id={slug}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                  className="bg-white border border-border rounded-xl overflow-hidden scroll-mt-24"
                  aria-label={sector.name}
                >
                  <header className="px-8 py-6 border-b border-border flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground">{sector.name}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5 max-w-3xl">{sector.description}</p>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="px-8 py-6">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-rose-500/80 mb-4">Common Problems</h3>
                      <ul className="space-y-2.5">
                        {sector.problems.map((problem, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-8 py-6">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-primary/80 mb-4">Systems We Build</h3>
                      <ul className="space-y-2.5">
                        {sector.systemsBuilt.map((system, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3">
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
