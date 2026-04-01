import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export function HeroSection({ headline, subheadline, ctaPrimary, ctaSecondary }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background graphic element */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -right-[20%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight md:leading-[1.1] mb-8 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {subheadline}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {ctaPrimary && (
              <Link href={ctaPrimary.href}>
                <Button size="lg" className="h-14 px-8 text-lg font-semibold hover-elevate">
                  {ctaPrimary.label}
                </Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent hover:bg-white/5 border-border hover-elevate">
                  {ctaSecondary.label}
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
