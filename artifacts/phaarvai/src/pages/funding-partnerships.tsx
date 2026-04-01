import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";

export default function FundingPartnerships() {
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
            Funding & Partnerships
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We structure the technical foundation for public-impact initiatives, ensuring they are implementation-ready, fundable, and measurable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground border-b border-border pb-4">Why Alignment Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Capital deployment in the public and foundation sectors requires exacting technical architecture. Funding bodies demand rigorous tracking, auditable outcomes, and scalable infrastructure. We architect these systems prior to capital deployment, de-risking the technological execution of major programs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground border-b border-border pb-4">How We Contribute</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We operate as the technical execution partner for large-scale grants, sovereign initiatives, and philanthropic deployments. Our role is to build the digital platforms that manage, track, and measure the impact of these capital programs at an institutional scale.
            </p>
          </motion.div>
        </div>

        <SectionIntro title="Partnership Models" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Program Technical Strategy",
              description: "Assisting foundations and agencies in defining the technical requirements for Request for Proposals (RFPs) and grant parameters."
            },
            {
              title: "Execution Consortiums",
              description: "Partnering with domain experts, policy advisory firms, and research institutions to provide the software execution layer for joint bids."
            },
            {
              title: "Impact Measurement Systems",
              description: "Building the digital dashboards and data pipelines required to report operational impact back to oversight committees and funders."
            }
          ].map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-muted-foreground">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <CTASection 
        title="Structuring a major initiative?"
        description="Engage PHAARVAI to establish the technical and data requirements for your next deployment."
        buttonLabel="Discuss Partnerships"
        buttonHref="/contact"
      />
    </div>
  );
}
