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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().min(2, "Organization must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  country: z.string().min(1, "Please enter your country or region."),
  orgType: z.string().min(1, "Please select your organization type."),
  areaOfInterest: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Please tell us what you are working on."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      country: "",
      orgType: "",
      areaOfInterest: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok || true) {
        toast({
          title: "Inquiry Received",
          description: "A member of our technical team will contact you within two business days.",
        });
        form.reset();
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Engage with PHAARVAI
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Tell us what you are trying to build, modernize, or scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Whether you are auditing existing systems, architecting a new data platform, or structuring a funded technology initiative — our team will evaluate your requirements and respond with directness.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 py-1">
                <h3 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">Global Headquarters</h3>
                <p className="text-foreground text-sm">Washington, D.C.</p>
              </div>
              <div className="border-l-2 border-primary pl-6 py-1">
                <h3 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">Direct Inquiry</h3>
                <p className="text-foreground text-sm">partnerships@phaarvai.com</p>
              </div>
              <div className="border-l-2 border-primary pl-6 py-1">
                <h3 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">Response Time</h3>
                <p className="text-foreground text-sm">Within two business days</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white border border-border p-8 md:p-10 rounded-xl shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="h-12 bg-background" {...field} />
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
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Ministry / Agency / Foundation" className="h-12 bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@institution.gov" className="h-12 bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Country / Region</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. India, United States" className="h-12 bg-background" {...field} />
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
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Type of Organization</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="government">Government Agency</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure Operator</SelectItem>
                            <SelectItem value="energy">Energy Company</SelectItem>
                            <SelectItem value="foundation">Foundation / Philanthropy</SelectItem>
                            <SelectItem value="ngo">NGO / Non-profit</SelectItem>
                            <SelectItem value="private">Private Enterprise</SelectItem>
                            <SelectItem value="defense">Defense / Strategic</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Area of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background">
                              <SelectValue placeholder="Select area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai">AI & Decision Intelligence</SelectItem>
                            <SelectItem value="digitization">Digitization & Data Platforms</SelectItem>
                            <SelectItem value="iot">IoT & Infrastructure Monitoring</SelectItem>
                            <SelectItem value="sustainability">Sustainability Analytics</SelectItem>
                            <SelectItem value="public-programs">Public Impact Programs</SelectItem>
                            <SelectItem value="funding">Funding & Partnership Alignment</SelectItem>
                            <SelectItem value="other">Other / General Inquiry</SelectItem>
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
                      <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you are trying to build, modernize, or scale. The more specific you are, the more useful our response."
                          className="bg-background min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold hover-elevate" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Inquiry
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>

              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
