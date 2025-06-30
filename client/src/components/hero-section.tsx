import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Shield, Zap, Code2, Play, Terminal, ChevronRight } from "lucide-react";
import VideoModal from "@/components/video-modal";
import AutoVideo from "@/components/auto-video";
import { useLanguage } from "@/lib/i18n";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  console.log('Hero section current language:', language);
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
            <div className="mb-4">
              <span className="text-sm font-mono text-green-400 bg-slate-800 px-3 py-1 rounded-full border border-green-400/30">
                LIVE DEMO
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight mb-6">
              {t.hero.title} <span className="text-green-400">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed font-mono">
              {'// '}{t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Terminal className="mr-2" size={20} />
                $ {t.hero.shareIdea.toLowerCase()}
              </Button>
              <VideoModal videoId="dQw4w9WgXcQ" />
            </div>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 font-mono text-sm">
              <div className="flex items-center">
                <ChevronRight className="text-green-400 mr-2" size={16} />
                <span>{t.hero.features.delivery}</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="text-green-400 mr-2" size={16} />
                <span>{t.hero.features.production}</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="text-green-400 mr-2" size={16} />
                <span>{t.hero.features.ai}</span>
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
                  <span className="text-xs font-mono text-green-400">vibe-mvp-demo.app</span>
                </div>
                
                {/* Auto-Playing Video */}
                <AutoVideo 
                  className="h-80"
                  poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                />
                
                <div className="p-6 bg-slate-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">$ ./deploy-mvp --live</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400 font-mono">STATUS: DEPLOYED</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700 transition-colors border border-slate-600">
                      <div className="text-2xl font-bold text-green-400">7</div>
                      <div className="text-xs text-gray-400 font-mono">days_to_launch</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700 transition-colors border border-slate-600">
                      <div className="text-2xl font-bold text-blue-400">100%</div>
                      <div className="text-xs text-gray-400 font-mono">mobile_ready</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700 transition-colors border border-slate-600">
                      <div className="text-2xl font-bold text-purple-400">AI</div>
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
