import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Code2, Rocket, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ProcessSection() {
  const { t } = useLanguage();
  
  const processSteps = [
    {
      step: 1,
      title: t.process.step1.title,
      icon: MessageCircle,
      description: t.process.step1.description,
      duration: t.process.step1.duration,
      details: t.process.step1.details,
      color: "from-trust-blue to-trust-blue/80"
    },
    {
      step: 2,
      title: t.process.step2.title,
      icon: Lightbulb,
      description: t.process.step2.description,
      duration: t.process.step2.duration,
      details: t.process.step2.details,
      color: "from-sage-green to-sage-green/80"
    },
    {
      step: 3,
      title: t.process.step3.title,
      icon: Code2,
      description: t.process.step3.description,
      duration: t.process.step3.duration,
      details: t.process.step3.details,
      color: "from-vibe-green to-vibe-green/80"
    },
    {
      step: 4,
      title: t.process.step4.title,
      icon: Rocket,
      description: t.process.step4.description,
      duration: t.process.step4.duration,
      details: t.process.step4.details,
      color: "from-conversion-orange to-conversion-orange/80"
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-trust-blue via-sage-green via-vibe-green to-conversion-orange transform -translate-y-1/2 z-0 shadow-lg"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full border-4 border-slate-900 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="text-white" size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Card */}
                  <Card className="bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-green-400/30 transition-all duration-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="flex items-center justify-center mb-3">
                        <Clock className="text-green-400 mr-2" size={14} />
                        <span className="text-green-400 text-sm">{step.duration}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                            <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Step Icon */}
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center relative`}>
                  <step.icon className="text-white" size={24} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 text-black rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <Card className="bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <Clock className="text-green-400 mr-2" size={16} />
                      <span className="text-green-400 font-mono text-sm">{step.duration}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}