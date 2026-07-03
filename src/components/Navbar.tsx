"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/themes", label: "Operational Domains" },
  { href: "/projects", label: "Systems" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/partner", label: "Partner" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-white/85 backdrop-blur-sm border-b border-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center group shrink-0 py-1 pr-2 md:pr-4 -ml-1">
          <Image
            src="/images/logo-transparent.png"
            alt="Phaarvai"
            width={300}
            height={96}
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
              isScrolled
                ? "h-[4.25rem] sm:h-[4.5rem] md:h-[5rem]"
                : "h-[5.5rem] sm:h-[6rem] md:h-[7.25rem]"
            }`}
            priority
          />
        </Link>

        <div className="hidden xl:flex items-center gap-0.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2.5 text-[15px] md:text-base font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? "text-primary bg-primary/8"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <Link href="/partner">
            <Button variant="default" className="font-semibold px-6 text-base hover-elevate">
              Partner With Us
            </Button>
          </Link>
        </div>

        <button
          className="xl:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/8"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Link href="/partner">
                  <Button variant="default" className="w-full justify-center">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
