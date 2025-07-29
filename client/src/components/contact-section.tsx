import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n";
import { NotebookPen, Calendar, Clock, Shield, Handshake } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  newsletter: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call for demo purposes
    setTimeout(() => {
      console.log("Contact form submission:", data);
      
      // Show success message
      toast({
        title: t.toast.success.title,
        description: t.toast.success.description,
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-green-400">{'>'}</span> {t.contact.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
            {'// '}{t.contact.subtitle}
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.name} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t.contact.form.name}
                  {...form.register("name")}
                  className="w-full"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.email} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.contact.form.email}
                  {...form.register("email")}
                  className="w-full"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.company}
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder={t.contact.form.company}
                  {...form.register("company")}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.projectType}
                </Label>
                <Select onValueChange={(value) => form.setValue("projectType", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.contact.form.projectTypePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mvp">{t.services.mvp.title}</SelectItem>
                    <SelectItem value="webapp">{t.services.web.title}</SelectItem>
                    <SelectItem value="landing">{t.services.landing.title}</SelectItem>
                    <SelectItem value="consulting">{t.services.consulting.title}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.form.budget}
              </Label>
              <Select onValueChange={(value) => form.setValue("budget", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.contact.form.budgetPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Onder €5.000</SelectItem>
                  <SelectItem value="5k-10k">€5.000 - €10.000</SelectItem>
                  <SelectItem value="10k-25k">€10.000 - €25.000</SelectItem>
                  <SelectItem value="25k-plus">€25.000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.form.message} *
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder={t.contact.form.messagePlaceholder}
                {...form.register("message")}
                className="w-full resize-none"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={form.watch("newsletter")}
                onCheckedChange={(checked) => form.setValue("newsletter", !!checked)}
              />
              <Label htmlFor="newsletter" className="text-sm text-gray-700">
                {t.contact.form.newsletter}
              </Label>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-conversion-orange hover:bg-conversion-orange/90 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <NotebookPen className="mr-2" size={20} />
              {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">{t.contact.call}</p>
            <a 
              href="https://meetings-eu1.hubspot.com/moons" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-trust-blue hover:bg-trust-blue/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              <Calendar className="mr-2" size={20} />
              {t.contact.schedule}
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center text-blue-100">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <Clock className="mr-2" size={20} />
              <span>{t.contact.info.response}</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2" size={20} />
              <span>{t.contact.info.nda}</span>
            </div>
            <div className="flex items-center">
              <Handshake className="mr-2" size={20} />
              <span>{t.contact.info.consultation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
