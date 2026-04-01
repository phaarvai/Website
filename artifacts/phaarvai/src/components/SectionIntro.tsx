import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionIntro({ title, subtitle, className, centered = false }: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-16", centered && "text-center mx-auto max-w-3xl", className)}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
