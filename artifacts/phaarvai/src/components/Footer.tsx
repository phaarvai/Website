import { Link } from "wouter";
import { siteContent } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { footer } = siteContent;
  
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 pr-0 md:pr-12">
            <span className="text-2xl font-bold tracking-widest text-primary block mb-6">PHAARVAI</span>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              {footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4">
              {footer.links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="flex flex-col gap-4">
              {footer.links.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
