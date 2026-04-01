import { motion } from "framer-motion";
import { capabilities } from "@/content/capabilities";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export default function Capabilities() {
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
            Capabilities
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We deliver technical capacity that institutional leaders require to manage complex, distributed operations effectively.
          </p>
        </motion.div>

        <div className="space-y-32 mb-32">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Practice Area {String(idx + 1).padStart(2, '0')}</div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">{cap.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {cap.intro}
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-7 bg-card border border-border p-8 md:p-12 rounded-2xl">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">Core Services</h3>
                <ul className="space-y-6 mb-12">
                  {cap.services.map((service, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-border pt-8">
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">Example Deliverable</h3>
                  <p className="text-lg text-foreground italic border-l-4 border-primary pl-6 py-2">
                    "{cap.deliverable}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <CTASection 
        title="Require specific technical capability?"
        description="We architect solutions precisely aligned to your operational parameters."
        buttonLabel="Request a Capabilities Brief"
        buttonHref="/contact"
      />
    </div>
  );
}
