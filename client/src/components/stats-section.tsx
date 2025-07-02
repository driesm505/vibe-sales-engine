import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState, useEffect, useRef } from "react";

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);
  
  return count;
}

// Custom hook for intersection observer
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return { ref, isVisible };
}

export default function StatsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver();
  
  // Animated counts
  const clientsCount = useCountUp(150, 2000, isVisible);
  const averageCount = useCountUp(7, 1500, isVisible);
  const fundingCount = useCountUp(2, 2500, isVisible);
  const ratingCount = useCountUp(49, 2000, isVisible);
  
  const stats = [
    {
      icon: <Users className="text-white" size={28} />,
      number: `${clientsCount}+`,
      label: t.stats.clients,
      description: t.stats.clientsDesc,
      bgColor: "bg-vibe-green",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="text-white" size={28} />,
      number: `${averageCount}`,
      label: t.stats.average,
      description: t.stats.averageDesc,
      bgColor: "bg-trust-blue",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <TrendingUp className="text-white" size={28} />,
      number: `€${fundingCount}M+`,
      label: t.stats.funding,
      description: t.stats.fundingDesc,
      bgColor: "bg-conversion-orange",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: <Star className="text-white" size={28} />,
      number: `${(ratingCount / 10).toFixed(1)}/5`,
      label: t.stats.rating,
      description: t.stats.ratingDesc,
      bgColor: "bg-sage-green",
      gradient: "from-sage-green to-trust-blue"
    }
  ];

  return (
    <section ref={ref} className="py-20 hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Numbers that speak louder than words — see why founders trust us to bring their visions to life
          </p>
          
          {/* Progress indicator */}
          <div className="max-w-md mx-auto">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-green-400 h-1 rounded-full transition-all duration-2000"
                style={{ width: isVisible ? '100%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-yellow-300 mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold font-poppins mb-2">100%</div>
            <div className="text-blue-100">{t.stats.delivery}</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-poppins mb-2">24h</div>
            <div className="text-blue-100">{t.stats.response}</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-poppins mb-2">30</div>
            <div className="text-blue-100">{t.stats.support}</div>
          </div>
        </div>
      </div>
    </section>
  );
}