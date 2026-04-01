import { motion } from "framer-motion";
import { solutions } from "@/content/solutions";
import { CTASection } from "@/components/CTASection";

export default function Solutions() {
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
            Solutions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Concrete implementations designed to remove operational friction, automate critical workflows, and build institutional intelligence. Each solution is grounded in real client challenges.
          </p>
        </motion.div>

        <div className="space-y-10 mb-32">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="bg-white border border-border rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-8 md:p-10 border-b border-border flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs font-mono tracking-widest text-primary uppercase mb-3">{solution.category}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{solution.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-8">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Challenge</h3>
                  <p className="text-sm text-foreground leading-relaxed">{solution.challenge}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Typical Client</h3>
                  <p className="text-sm text-foreground leading-relaxed">{solution.typicalClient}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">How We Help</h3>
                  <p className="text-sm text-foreground leading-relaxed">{solution.howWeHelp}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Impact</h3>
                  <p className="text-sm text-foreground leading-relaxed">{solution.impact}</p>
                </div>
              </div>

              <div className="px-8 md:px-10 py-6 bg-muted/30 border-t border-border">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Outputs</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.outputs.map((output, oIdx) => (
                    <span key={oIdx} className="text-xs bg-primary/8 text-primary border border-primary/15 px-3 py-1 rounded-full font-medium">
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection
        title="Discuss a Specific Use Case"
        description="Our team will map your operational constraints and propose a high-confidence technical path forward."
        buttonLabel="Schedule a Call"
        buttonHref="/contact"
      />
    </div>
  );
}
