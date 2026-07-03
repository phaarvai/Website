"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PageHeader } from "@/components/PageHeader";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";
import { OperationalDashboard } from "@/components/visuals/OperationalDashboard";
import { partnerContent } from "@/content/partner";
import { contactContent } from "@/content/contact";
import { partnerAudiences, siteContent } from "@/content/site";
import { submitContactInquiry } from "@/lib/submitContact";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().min(2, "Organization is required."),
  role: z.string().min(2, "Role is required."),
  email: z.string().email("Invalid email address."),
  partnershipInterest: z.string().min(1, "Please select a partnership area."),
  message: z.string().min(10, "Please provide a brief overview of your collaboration interest."),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Washington, D.C. · Global collaborations" },
  { icon: Mail, label: "Email", value: siteContent.footer.email },
  {
    icon: Globe,
    label: "Engagement",
    value: "Strategic partnerships · AI systems · Digital infrastructure",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function Partner() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { hero, partnershipAreas, collaborationPrinciples, contact, partnershipInterests } =
    partnerContent;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      role: "",
      email: "",
      partnershipInterest: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const interestLabel =
        partnershipInterests.find((i) => i.id === data.partnershipInterest)?.label ??
        data.partnershipInterest;

      const result = await submitContactInquiry({
        name: data.name,
        organization: data.organization,
        role: data.role,
        email: data.email,
        partnerType: interestLabel,
        areaOfInterest: interestLabel,
        message: data.message,
        source: "partner",
        website: data.website,
      });

      if (!result.success) {
        throw new Error(result.errors?.[0] || "Submission failed");
      }

      toast({
        title: contactContent.successTitle,
        description: contactContent.followUpMessage,
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: contactContent.failureMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageSEO
        title="Partner With Us — Strategic Institutional Partnerships"
        description="Phaarvai partners with governments, enterprises, research institutions, and infrastructure operators on AI systems, digital infrastructure, and intelligent platform deployments."
        path="/partner"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
            <PageHeader
              label={hero.label}
              title={hero.title}
              description={hero.subtitle}
              className="mb-0 max-w-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block"
              aria-hidden
            >
              <OperationalDashboard />
            </motion.div>
          </div>

          <section className="mb-20 md:mb-24" aria-label="Partnership areas">
            <motion.div {...fadeIn} className="mb-10">
              <span className="label-mono mb-4 block">Collaboration areas</span>
              <h2 className="heading-section mb-4">Strategic partnership opportunities</h2>
              <p className="text-lead text-prose max-w-3xl">
                Long-term engagements across applied AI, digital infrastructure, research collaboration,
                and operational technology — structured for institutional impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {partnershipAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                    className={cn(
                      "bg-card border border-border rounded-2xl card-pad-sm card-hover flex flex-col",
                      idx === 0 && "md:col-span-2 lg:col-span-1"
                    )}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-2">{area.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                    <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section
            className="mb-20 md:mb-24 section-alt border-y border-border section-y relative overflow-hidden"
            aria-label="Who we partner with"
          >
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none" aria-hidden>
              <NetworkMesh variant="light" density="sparse" />
            </div>
            <div className="relative z-10">
              <motion.div {...fadeIn} className="mb-10">
                <span className="label-mono mb-4 block">Institutional partners</span>
                <h2 className="heading-section mb-4">Organizations we collaborate with</h2>
                <p className="text-lead text-prose max-w-3xl">
                  Governments, research ecosystems, infrastructure operators, enterprises, and
                  mission-driven organizations building intelligent systems at scale.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {partnerAudiences.map((audience, idx) => (
                  <motion.article
                    key={audience.id}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                    className="bg-card border border-border rounded-xl card-pad-sm card-hover"
                  >
                    <h3 className="text-base font-bold text-foreground mb-2">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20 md:mb-24" aria-label="Collaboration principles">
            <motion.div {...fadeIn} className="mb-10">
              <span className="label-mono mb-4 block">Partnership principles</span>
              <h2 className="heading-section mb-4">How we approach collaboration</h2>
              <p className="text-lead text-prose max-w-3xl">
                Principles that guide every institutional engagement — from initial alignment through
                long-term capability building.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {collaborationPrinciples.map((principle, idx) => (
                <motion.article
                  key={principle.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                  className="bg-card border border-border rounded-xl card-pad-sm card-hover"
                >
                  <h3 className="text-base font-bold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-28 pb-16 md:pb-20" aria-label="Partnership inquiry">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <motion.div {...fadeIn} className="lg:col-span-2">
                <span className="label-mono mb-4 block">Connect</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{contact.title}</h2>
                <p className="text-[15px] text-muted-foreground text-prose mb-10">{contactContent.followUpMessage}</p>
                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm text-foreground">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.1 }}
                className="lg:col-span-3 bg-card border border-border card-pad rounded-2xl"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden
                      className="sr-only"
                      {...form.register("website")}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" className="h-11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Organization
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Agency, institution, or enterprise"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Role
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your role or title" className="h-11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@organization.org"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="partnershipInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                            Partnership interest
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select partnership area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {partnershipInterests.map((interest) => (
                                <SelectItem key={interest.id} value={interest.id}>
                                  {interest.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                            Collaboration overview
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Briefly describe the partnership, technology initiative, or collaboration you have in mind."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 font-semibold hover-elevate gap-2 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          {contact.submitLabel}
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
