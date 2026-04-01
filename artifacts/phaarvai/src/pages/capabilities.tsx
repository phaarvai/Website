import { motion } from "framer-motion";
import { capabilities } from "@/content/capabilities";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import { CheckCircle2, Users, FileText } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Capabilities() {
  return (
    <>
      <PageSEO
        title="Capabilities — AI Decision Intelligence, Data Platforms, IoT & Public Impact"
        description="Four practice areas: AI Decision Intelligence, Digitization & Data Platforms, IoT & Smart Infrastructure, and Public Impact Programs. Each backed by full delivery capability."
        path="/capabilities"
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
              Capabilities
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four practice areas — each backed by full delivery capability, from architecture to production deployment.
            </p>
          </motion.header>

          <div className="space-y-20 mb-24">
            {capabilities.map((cap, idx) => (
              <motion.section
                key={cap.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                aria-label={cap.title}
              >
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <span className="label-mono mb-3 block">Practice Area {String(idx + 1).padStart(2, '0')}</span>
                    <h2 className="text-2xl font-bold mb-4 text-foreground leading-tight">{cap.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cap.intro}</p>

                    <div className="bg-primary/5 border border-primary/15 p-5 rounded-xl">
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-3">
                        <Users size={14} /> Ideal Client
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cap.idealClient}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <div className="bg-white border border-border p-7 rounded-xl">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">Core Services</h3>
                    <ul className="space-y-3">
                      {cap.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-border p-7 rounded-xl">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                      <FileText size={13} /> Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {cap.deliverables.map((deliverable, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

        </div>

        <CTASection
          title="Require specific technical capability?"
          description="We architect solutions precisely aligned to your operational parameters."
          buttonLabel="Request a Capabilities Brief"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
