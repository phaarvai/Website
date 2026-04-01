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
    <section className="py-20 relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-base text-blue-100/70 mb-8 leading-relaxed">
            {description}
          </p>
          <Link href={buttonHref}>
            <Button size="lg" className="h-12 px-8 text-sm font-semibold bg-primary hover:bg-primary/90 text-white hover-elevate">
              {buttonLabel}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
