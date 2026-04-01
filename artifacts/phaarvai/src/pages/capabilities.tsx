import { motion } from "framer-motion";
import { capabilities } from "@/content/capabilities";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, Users, FileText } from "lucide-react";

export default function Capabilities() {
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
            Capabilities
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Four integrated practice areas that address the operational gaps most limiting to institutional effectiveness. Each is backed by a full delivery capability — from architecture to production deployment.
          </p>
        </motion.div>

        <div className="space-y-24 mb-32">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-primary font-mono text-xs mb-4 tracking-widest uppercase">Practice Area {String(idx + 1).padStart(2, '0')}</div>
                  <h2 className="text-3xl font-bold mb-5 text-foreground leading-tight">{cap.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{cap.intro}</p>

                  <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl">
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                      <Users size={16} /> Ideal Client
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.idealClient}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white border border-border p-8 rounded-xl shadow-sm">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Core Services</h3>
                  <ul className="space-y-4">
                    {cap.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-border p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                    <FileText size={14} /> Deliverables
                  </div>
                  <ul className="space-y-3">
                    {cap.deliverables.map((deliverable, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection
        title="Require specific technical capability?"
        description="We architect solutions precisely aligned to your operational parameters and institutional constraints."
        buttonLabel="Request a Capabilities Brief"
        buttonHref="/contact"
      />
    </div>
  );
}
