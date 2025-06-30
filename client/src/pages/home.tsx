import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhyUsSection from "@/components/why-us-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Code, Database, Cloud, GitBranch, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pb-20 lg:pb-0 relative overflow-hidden">
      {/* Tech Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-30"></div>
      <div className="fixed inset-0 particle-system">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      <Navigation />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
