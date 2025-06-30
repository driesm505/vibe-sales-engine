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
      color: "from-blue-600 to-blue-700"
    },
    {
      step: 2,
      title: "Ontwerp & Planning",
      icon: Lightbulb,
      description: "Uitgewerkt plan met wireframes, technische architectuur en project roadmap.",
      duration: "1-2 dagen",
      details: ["UI/UX wireframes", "Database ontwerp", "API specificaties"],
      color: "from-purple-600 to-purple-700"
    },
    {
      step: 3,
      title: "Ontwikkeling",
      icon: Code2,
      description: "Professionele ontwikkeling met dagelijkse updates en tussentijdse reviews.",
      duration: "3-7 dagen",
      details: ["Frontend & Backend", "Testing & QA", "Performance optimalisatie"],
      color: "from-green-600 to-green-700"
    },
    {
      step: 4,
      title: "Lancering & Overdracht",
      icon: Rocket,
      description: "Live deployment met uitgebreide documentatie en training voor jouw team.",
      duration: "1 dag",
      details: ["Production deployment", "Documentatie", "30 dagen support"],
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-green-400">{'>'}</span> Ons Ontwikkelproces
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            {'// '}Van idee tot live product in 7 dagen — transparant, professioneel en resultaatgericht
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2 z-0"></div>
            
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
                  <Card className="bg-slate-800/70 border border-slate-700 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="flex items-center justify-center mb-4">
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