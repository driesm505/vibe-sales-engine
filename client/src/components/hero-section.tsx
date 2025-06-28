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
    <section className="pt-24 pb-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight mb-6">
              {t.hero.title} <span className="text-yellow-300">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-conversion-orange hover:bg-conversion-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Rocket className="mr-2" size={20} />
                {t.hero.shareIdea}
              </Button>
              <VideoModal videoId="dQw4w9WgXcQ" />
            </div>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Zap className="text-yellow-300 mr-2" size={20} />
                <span>{t.hero.features.delivery}</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-yellow-300 mr-2" size={20} />
                <span>{t.hero.features.production}</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="text-yellow-300 mr-2" size={20} />
                <span>{t.hero.features.ai}</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up animate-float">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <div className="bg-gray-900 rounded-xl overflow-hidden relative">
                <div className="flex items-center space-x-2 p-4 bg-gray-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Auto-Playing Video */}
                <AutoVideo 
                  className="h-80"
                  poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                />
                
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Your MVP Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-vibe-green rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live in Production</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg text-center hover:bg-green-100 transition-colors">
                      <div className="text-2xl font-bold text-vibe-green">7</div>
                      <div className="text-xs text-gray-600">Days to Launch</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center hover:bg-blue-100 transition-colors">
                      <div className="text-2xl font-bold text-trust-blue">100%</div>
                      <div className="text-xs text-gray-600">Mobile Ready</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center hover:bg-orange-100 transition-colors">
                      <div className="text-2xl font-bold text-conversion-orange">AI</div>
                      <div className="text-xs text-gray-600">Powered</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Built with React + Node.js</span>
                    <span>Deployed on Vercel</span>
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
