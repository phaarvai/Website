"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
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
import { Loader2, MapPin, Mail, Globe, ArrowRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PageHeader } from "@/components/PageHeader";
import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";
import { submitContactInquiry } from "@/lib/submitContact";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().min(2, "Organization is required."),
  role: z.string().min(2, "Role is required."),
  email: z.string().email("Invalid email address."),
  orgType: z.string().min(1, "Please select an organization type."),
  areaOfInterest: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Please provide a brief overview of your inquiry."),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Washington, D.C. · Global collaborations" },
  { icon: Mail, label: "Email", value: siteContent.footer.email },
  {
    icon: Globe,
    label: "Engagement",
    value: "AI systems · Digital infrastructure · Institutional deployments",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      role: "",
      email: "",
      orgType: "",
      areaOfInterest: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setFormStatus("idle");
    try {
      const honeypot = honeypotRef.current?.value?.trim() ?? "";
      const orgLabel =
        contactContent.organizationTypes.find((t) => t.id === data.orgType)?.label ?? data.orgType;
      const interestLabel =
        contactContent.interestAreas.find((i) => i.id === data.areaOfInterest)?.label ??
        data.areaOfInterest;

      const result = await submitContactInquiry({
        name: data.name,
        organization: data.organization,
        role: data.role,
        email: data.email,
        orgType: orgLabel,
        areaOfInterest: interestLabel,
        message: data.message,
        source: "contact",
        website: honeypot || undefined,
      });

      if (!result.success) {
        throw new Error(result.message || result.errors?.[0] || "Submission failed");
      }

      setFormStatus("success");
      toast({
        title: contactContent.successTitle,
        description: contactContent.followUpMessage,
      });
      form.reset();
      if (honeypotRef.current) honeypotRef.current.value = "";
    } catch (error) {
      setFormStatus("error");
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error instanceof Error ? error.message : contactContent.failureMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageSEO
        title="Contact Phaarvai — AI Systems & Infrastructure"
        description="Connect with Phaarvai's engineering team about AI systems, digital infrastructure, and institutional technology deployments."
        path="/contact"
      />

      <article className="page-shell bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Contact"
            title="Connect with our team"
            description={contactContent.positioning}
            visual
            className="mb-16 md:mb-20"
          />

          <section id="contact" className="scroll-mt-28 pb-16 md:pb-20" aria-label="Contact inquiry">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Start a conversation</h2>
                <p className="text-[15px] text-muted-foreground text-prose mb-10">
                  {contactContent.followUpMessage}
                </p>
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.1 }}
                className="lg:col-span-3 bg-card border border-border card-pad rounded-2xl"
              >
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit, () => {
                      toast({
                        variant: "destructive",
                        title: "Please complete the required fields",
                        description: "Name, organization, role, email, organization type, area of interest, and a short overview are required.",
                      });
                    })}
                    className="space-y-5 relative z-10"
                    noValidate
                  >
                    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                      <label htmlFor="company_url_confirm_contact">Company URL</label>
                      <input
                        id="company_url_confirm_contact"
                        ref={honeypotRef}
                        type="text"
                        name="company_url_confirm"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

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
                              <Input placeholder="Agency, institution, or enterprise" className="h-11" {...field} />
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
                              <Input type="email" placeholder="you@organization.org" className="h-11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="orgType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Organization type
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || undefined}>
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {contactContent.organizationTypes.map((type) => (
                                  <SelectItem key={type.id} value={type.id}>
                                    {type.label}
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
                        name="areaOfInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Area of interest
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || undefined}>
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Select area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {contactContent.interestAreas.map((area) => (
                                  <SelectItem key={area.id} value={area.id}>
                                    {area.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                            Inquiry overview
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Briefly describe the systems, infrastructure, or collaboration you are exploring."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {formStatus === "success" && (
                      <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                        {contactContent.followUpMessage}
                      </p>
                    )}
                    {formStatus === "error" && (
                      <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                        {contactContent.failureMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 font-semibold hover-elevate gap-2 group relative z-10 pointer-events-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          Connect With Our Team
                          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
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
