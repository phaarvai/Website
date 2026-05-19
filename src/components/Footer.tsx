"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { themes } from "@/content/themes";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-foreground text-white pt-16 pb-10">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-2">
            <img
              src="/images/logo-transparent.png"
              alt="Phaarvai"
              className="h-12 w-auto object-contain mb-5 brightness-0 invert opacity-95"
            />
            <p className="text-lg font-semibold text-white mb-2">{footer.tagline}</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-5">
              {footer.statement}
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Mail size={14} />
              {footer.email}
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {footer.links.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Themes
            </h4>
            <ul className="flex flex-col gap-2.5">
              {themes.map((theme) => (
                <li key={theme.id}>
                  <Link
                    href={theme.href}
                    className="text-white/55 hover:text-white transition-colors text-sm"
                  >
                    {theme.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/45">
          <p>{footer.copyright}</p>
          <motion.div className="flex gap-6">
            {footer.links.connect.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
