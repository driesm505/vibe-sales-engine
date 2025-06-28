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
      <StatsSection />
      <ServicesSection />
      
      {/* Tech Features Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
              <span className="text-green-400">{'>'}</span> Modern Tech Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              AI-accelerated development with enterprise-grade architecture. Clean code, best practices, and production-ready deployment from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm interactive-card group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white">Rapid Development</h3>
                <p className="text-gray-300">AI-enhanced workflows with modern frameworks for lightning-fast MVP development and deployment.</p>
                <div className="mt-4 text-xs font-mono text-green-400">$ npm run build --fast</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm interactive-card group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white">Clean Architecture</h3>
                <p className="text-gray-300">Enterprise-grade code structure with TypeScript, testing, and documentation built-in from the start.</p>
                <div className="mt-4 text-xs font-mono text-blue-400">$ npm test --coverage</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm interactive-card group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white">Scalable Database</h3>
                <p className="text-gray-300">PostgreSQL with optimized queries, migrations, and backup strategies for enterprise scalability.</p>
                <div className="mt-4 text-xs font-mono text-purple-400">$ drizzle-kit migrate</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm interactive-card group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white">Cloud-Native Deploy</h3>
                <p className="text-gray-300">Docker containers with auto-scaling, monitoring, and zero-downtime deployments on AWS/Vercel.</p>
                <div className="mt-4 text-xs font-mono text-orange-400">$ docker-compose up -d</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm interactive-card group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GitBranch className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white">CI/CD Pipeline</h3>
                <p className="text-gray-300">Automated testing, code quality checks, and deployment pipeline with GitHub Actions integration.</p>
                <div className="mt-4 text-xs font-mono text-yellow-400">$ git push origin main</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm interactive-card group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white">Performance First</h3>
                <p className="text-gray-300">Optimized bundle sizes, lazy loading, caching strategies, and Lighthouse scores of 90+ guaranteed.</p>
                <div className="mt-4 text-xs font-mono text-pink-400">$ npm run analyze</div>
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
      <FloatingCTA />
    </div>
  );
}
