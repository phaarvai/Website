import { motion } from "framer-motion";
import { sectors } from "@/content/sectors";
import { CTASection } from "@/components/CTASection";
import { Building2, Train, Zap, Globe, Network, Shield } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Train,
  Zap,
  Globe,
  Network,
  Shield
};

export default function Sectors() {
  return (
    <div className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Sectors
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We operate in environments where operational data holds immense strategic value and where system failures carry significant institutional and public consequence.
          </p>
        </motion.div>

        <div className="space-y-8 mb-32">
          {sectors.map((sector, idx) => {
            const Icon = iconMap[sector.icon] || Network;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-border rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-8 md:p-10 border-b border-border flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground">{sector.name}</h2>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{sector.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="p-8">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">Common Problems</h3>
                    <ul className="space-y-3">
                      {sector.problems.map((problem, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">Systems We Build</h3>
                    <ul className="space-y-3">
                      {sector.systemsBuilt.map((system, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span className="text-sm text-foreground leading-relaxed">{system}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
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
    </div>
  );
}
