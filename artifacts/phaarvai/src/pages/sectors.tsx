import { motion } from "framer-motion";
import { sectors } from "@/content/sectors";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { Building2, Train, Zap, Globe, Network, Shield } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2, Train, Zap, Globe, Network, Shield
};

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Sectors() {
  return (
    <>
      <PageSEO
        title="Sectors — Government, Infrastructure, Energy, Foundations & Defense"
        description="PHAARVAI operates across government, critical infrastructure, energy, foundations, innovation ecosystems, and defense — where operational data holds strategic value."
        path="/sectors"
      />

      <article className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5">
              Sectors
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We operate in environments where operational data holds immense strategic value and where system failures carry significant institutional and public consequence.
            </p>
          </motion.header>

          <div className="space-y-6 mb-24">
            {sectors.map((sector, idx) => {
              const Icon = iconMap[sector.icon] || Network;
              return (
                <motion.section
                  key={idx}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                  className="bg-white border border-border rounded-xl overflow-hidden"
                  aria-label={sector.name}
                >
                  <header className="p-7 md:p-8 border-b border-border flex items-start gap-5">
                    <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-foreground">{sector.name}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{sector.description}</p>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="p-7">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Common Problems</h3>
                      <ul className="space-y-2.5">
                        {sector.problems.map((problem, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Systems We Build</h3>
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
