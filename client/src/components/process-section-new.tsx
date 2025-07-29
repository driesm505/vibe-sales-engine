import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Code2, Rocket, Clock } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Intake Gesprek",
      icon: MessageCircle,
      description: "Gratis 30-minuten gesprek om je idee, doelen en technische vereisten te bespreken.",
      duration: "30 minuten",
      details: ["Projectscope bepalen", "Technische analyse", "Tijdlijn vaststellen"],
      color: "from-trust-blue to-trust-blue/80"
    },
    {
      step: 2,
      title: "Ontwerp & Planning",
      icon: Lightbulb,
      description: "Uitgewerkt plan met wireframes, technische architectuur en project roadmap.",
      duration: "Vanaf 1-2 dagen",
      details: ["UI/UX wireframes", "Database ontwerp", "API specificaties"],
      color: "from-sage-green to-sage-green/80"
    },
    {
      step: 3,
      title: "Ontwikkeling",
      icon: Code2,
      description: "Professionele ontwikkeling met dagelijkse updates en tussentijdse reviews.",
      duration: "Vanaf 3-7 dagen",
      details: ["Frontend & Backend", "Testing & QA", "Performance optimalisatie"],
      color: "from-vibe-green to-vibe-green/80"
    },
    {
      step: 4,
      title: "Lancering & Overdracht",
      icon: Rocket,
      description: "Live deployment met uitgebreide documentatie en training voor jouw team.",
      duration: "1 dag",
              details: ["Production deployment", "Documentatie", "Vanaf 30 dagen support"],
      color: "from-conversion-orange to-conversion-orange/80"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-vibe-green">{'>'}</span> Ons Ontwikkelproces
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-vibe-green">{'// '}</span>Van idee tot live product vanaf 7 dagen — transparant, professioneel en resultaatgericht
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
                  <div className="relative mb-6 group">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full border-4 border-slate-900 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-vibe-green/10`}>
                      <step.icon className="text-white transition-all duration-300" size={28} />
                    </div>
                    {/* Arrow to next step */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                        <div className="w-10 h-10 bg-vibe-green border-2 border-vibe-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-vibe-green/30">
                          <svg className="w-5 h-5 text-black font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Card */}
                  <Card className="bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm hover:border-vibe-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-vibe-green/10 hover:-translate-y-1 group-hover:bg-slate-800/80 cursor-pointer group">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-vibe-green">{step.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">{step.description}</p>
                      
                      <div className="flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Clock className="text-vibe-green mr-2 group-hover:animate-pulse" size={16} />
                        <span className="text-vibe-green font-mono text-sm font-medium">{step.duration}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 hover:translate-x-1 hover:text-vibe-green">
                            <div className="w-1 h-1 bg-vibe-green rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></div>
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
              <div className="flex-shrink-0 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center relative transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-vibe-green/10`}>
                  <step.icon className="text-white transition-all duration-300" size={24} />
                </div>
                {/* Arrow to next step */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-8 h-8 bg-vibe-green border-2 border-vibe-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-vibe-green/30">
                      <svg className="w-4 h-4 text-black font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <Card className="bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm hover:border-vibe-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-vibe-green/10 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <Clock className="text-vibe-green mr-2" size={16} />
                      <span className="text-vibe-green font-mono text-sm">{step.duration}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                          <div className="w-1 h-1 bg-vibe-green rounded-full mr-2"></div>
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