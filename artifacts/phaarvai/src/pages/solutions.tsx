import { motion } from "framer-motion";
import { solutions } from "@/content/solutions";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";

export default function Solutions() {
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
            Solutions
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Concrete implementations designed to remove friction, automate critical workflows, and yield institutional intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {solutions.map((solution, idx) => (
            <Card key={idx} delay={idx * 0.1} className="flex flex-col">
              <div className="text-xs font-mono tracking-widest text-primary uppercase mb-6 bg-primary/10 w-fit px-3 py-1 rounded-sm">
                {solution.category}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {solution.description}
              </p>
            </Card>
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
