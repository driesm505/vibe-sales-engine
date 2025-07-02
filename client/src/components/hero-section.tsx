import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Shield, Zap, Code2, Play, Terminal, ChevronRight } from "lucide-react";
import VideoModal from "@/components/video-modal";
import AutoVideo from "@/components/auto-video";
import { useLanguage } from "@/lib/i18n";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const techFeatures = [
    "React + TypeScript",
    "Node.js Backend", 
    "PostgreSQL Database",
    "Cloud Deployment",
    "CI/CD Pipeline"
  ];
  
  useEffect(() => {
    const text = "Building your MVP with modern tech stack...";
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider text-vibe-green bg-slate-800/50 px-4 py-2 rounded-lg border border-vibe-green/20 backdrop-blur-sm">
                ENTERPRISE READY
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {t.hero.title} <span className="text-vibe-green">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-400 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-start mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-vibe-green/50 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 backdrop-blur-sm"
              >
                {t.hero.shareIdea}
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-400 text-sm">
              <div className="flex items-center bg-slate-800/30 px-4 py-3 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-vibe-green rounded-full mr-3"></div>
                <span className="font-medium">{t.hero.features.delivery}</span>
              </div>
              <div className="flex items-center bg-slate-800/30 px-4 py-3 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-trust-blue rounded-full mr-3"></div>
                <span className="font-medium">{t.hero.features.production}</span>
              </div>
              <div className="flex items-center bg-slate-800/30 px-4 py-3 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-sage-green rounded-full mr-3"></div>
                <span className="font-medium">{t.hero.features.ai}</span>
              </div>
            </div>
            <div className="mt-6 text-xs font-mono text-green-400">
              {typedText}<span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="animate-fade-in-up animate-float">
            <div className="bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-700">
              <div className="bg-black rounded-xl overflow-hidden relative">
                <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-vibe-green">vibe-mvp-demo.app</span>
                </div>
                
                {/* Demo Video Mockup */}
                <div className="h-80 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                  >
                    <source src="https://player.vimeo.com/external/259160015.sd.mp4?s=c12f0a6b8e7c0e4e7f0f5a5c9b3a1f1e1f0f5a5c&profile_id=164" type="video/mp4" />
                    <div className="absolute inset-0 bg-gradient-to-br from-vibe-green/20 via-trust-blue/20 to-sage-green/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold mb-2">MVP Demo</div>
                        <div className="text-sm opacity-75">Building your ideas into reality</div>
                      </div>
                    </div>
                  </video>
                  <div className="absolute top-4 right-4 bg-vibe-green/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-mono text-vibe-green">LIVE DEMO</span>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">$ ./deploy-mvp --live</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-vibe-green rounded-full animate-pulse"></div>
                      <span className="text-sm text-vibe-green font-mono">STATUS: DEPLOYED</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700 transition-colors border border-slate-600">
                      <div className="text-2xl font-bold text-vibe-green">7</div>
                      <div className="text-xs text-gray-400 font-mono">days_to_launch</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700 transition-colors border border-slate-600">
                      <div className="text-2xl font-bold text-trust-blue">100%</div>
                      <div className="text-xs text-gray-400 font-mono">mobile_ready</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700 transition-colors border border-slate-600">
                      <div className="text-2xl font-bold text-sage-green">AI</div>
                      <div className="text-xs text-gray-400 font-mono">powered</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 font-mono">
                    <span>React + TypeScript + Node.js</span>
                    <span>Vercel Deploy ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
