import { motion } from "framer-motion";
import { solutions } from "@/content/solutions";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Solutions() {
  return (
    <>
      <PageSEO
        title="Solutions — AI Decision Support, Workflow Digitization & Infrastructure Monitoring"
        description="Concrete implementations that remove operational friction and build institutional intelligence. Each solution grounded in real client challenges."
        path="/solutions"
      />

      <article className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solutions
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Concrete implementations designed to remove operational friction, automate critical workflows, and build institutional intelligence — from architecture through production deployment.
            </p>
          </motion.header>

          {/* Header image strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-52 rounded-2xl overflow-hidden mb-16 bg-foreground"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=75"
              alt="Enterprise systems and analytics"
              className="w-full h-full object-cover opacity-35"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/30" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p className="text-[10px] font-mono text-blue-300/70 tracking-[0.14em] uppercase mb-3">Production-Grade Implementations</p>
                <p className="text-white text-xl md:text-2xl font-semibold max-w-2xl leading-snug">
                  Six solution areas — each designed around a real institutional problem, with defined outputs and measurable impact.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8 mb-24">
            {solutions.map((solution, idx) => (
              <motion.section
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.04 }}
                className="bg-white border border-border rounded-xl overflow-hidden"
                aria-label={solution.title}
              >
                <header className="p-7 md:p-8 border-b border-border">
                  <span className="label-mono mb-2 block">{solution.category}</span>
                  <h2 className="text-2xl font-bold text-foreground">{solution.title}</h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                  {[
                    { label: "Challenge", text: solution.challenge },
                    { label: "Typical Client", text: solution.typicalClient },
                    { label: "What We Build", text: solution.whatWeBuild },
                    { label: "Impact", text: solution.impact },
                  ].map((col, cIdx) => (
                    <div key={cIdx} className="p-6 md:p-7">
                      <h3 className={`text-xs font-semibold tracking-widest uppercase mb-3 ${col.label === "What We Build" ? "text-primary/80" : "text-muted-foreground"}`}>
                        {col.label}
                      </h3>
                      <p className="text-sm text-foreground leading-relaxed">{col.text}</p>
                    </div>
                  ))}
                </div>

                <footer className="px-7 md:px-8 py-5 bg-muted/30 border-t border-border">
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-2.5">Outputs</span>
                  <div className="flex flex-wrap gap-2">
                    {solution.outputs.map((output, oIdx) => (
                      <span key={oIdx} className="text-xs bg-primary/6 text-primary border border-primary/12 px-3 py-1 rounded-full font-medium">
                        {output}
                      </span>
                    ))}
                  </div>
                </footer>
              </motion.section>
            ))}
          </div>

        </div>

        <CTASection
          title="Discuss a Specific Use Case"
          description="Our team will map your operational constraints and propose a high-confidence technical path forward."
          buttonLabel="Schedule a Call"
          buttonHref="/contact"
        />
      </article>
    </>
  );
}
