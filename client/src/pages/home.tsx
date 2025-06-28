import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import ProcessSection from "@/components/process-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Shield, Truck, MessageCircle, Handshake, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
              Built with AI, Backed by Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We accelerate your development with cutting-edge AI tools to move fast — without compromising on code quality. Our developers follow modern best practices, ensuring your app is easy to scale, maintain, and hand off to future teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100/50 border-none service-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-vibe-green rounded-2xl flex items-center justify-center">
                  <Bot className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">MVP's in Less Than a Week</h3>
                <p className="text-gray-600">From concept to working product faster than you thought possible — powered by advanced AI development tools.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100/50 border-none service-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-trust-blue rounded-2xl flex items-center justify-center">
                  <Shield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">AI-Enhanced Workflows</h3>
                <p className="text-gray-600">Advanced AI tools for speed and precision in development while maintaining high standards and best practices.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100/50 border-none service-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-conversion-orange rounded-2xl flex items-center justify-center">
                  <Truck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">Production-Ready Code</h3>
                <p className="text-gray-600">Fully maintainable code that scales with your success — built with modern architecture patterns.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100/50 border-none service-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">Clear Communication</h3>
                <p className="text-gray-600">No tech jargon — just clear communication and regular updates throughout your project development.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-none service-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <Handshake className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">Founder-First Mentality</h3>
                <p className="text-gray-600">Friendly, flexible approach focused on your success — we understand the startup journey.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-none service-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-indigo-600 rounded-2xl flex items-center justify-center">
                  <Award className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">Technical Excellence</h3>
                <p className="text-gray-600">Industry best practices and high code quality standards maintained throughout the development process.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
