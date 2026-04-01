import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export function CTASection({ title, description, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-card border-t border-border">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            {description}
          </p>
          <Link href={buttonHref}>
            <Button size="lg" className="h-14 px-10 text-lg font-semibold hover-elevate">
              {buttonLabel}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
