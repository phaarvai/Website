import { motion } from "framer-motion";
import { sectors } from "@/content/sectors";
import { CTASection } from "@/components/CTASection";
import { Building2, Train, Zap, Globe, Network } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Train,
  Zap,
  Globe,
  Network
};

export default function Sectors() {
  return (
    <div className="pt-32 pb-16">
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
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We operate in environments where systems failure has severe consequences, and operational data holds immense value.
          </p>
        </motion.div>

        <div className="space-y-12 mb-32">
          {sectors.map((sector, idx) => {
            const Icon = iconMap[sector.icon] || Network;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{sector.name}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <CTASection 
        title="Aligning Technology with Mandates"
        description="Whether navigating government procurement or infrastructure compliance, we build systems that meet rigorous domain standards."
        buttonLabel="Contact Our Team"
        buttonHref="/contact"
      />
    </div>
  );
}
