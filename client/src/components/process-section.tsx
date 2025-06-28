import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Code2, Rocket, CheckCircle, ArrowRight, Clock, Zap, Sparkles } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      icon: <MessageCircle className="text-white" size={24} />,
      description: "We start with a free 30-minute consultation to understand your vision, goals, and requirements.",
      duration: "30 minutes",
      bgColor: "bg-purple-600",
      progressColor: "#9333ea"
    },
    {
      step: 2,
      title: "Strategy & Planning",
      icon: <Lightbulb className="text-white" size={24} />,
      description: "We create a detailed project plan with wireframes, tech stack recommendations, and timeline.",
      duration: "1-2 days",
      bgColor: "bg-yellow-500",
      progressColor: "#eab308"
    },
    {
      step: 3,
      title: "Development Sprint",
      icon: <Code2 className="text-white" size={24} />,
      description: "Our AI-enhanced development process builds your application with daily progress updates.",
      duration: "3-7 days",
      bgColor: "bg-trust-blue",
      progressColor: "#0066cc"
    },
    {
      step: 4,
      title: "Launch & Delivery",
      icon: <Rocket className="text-white" size={24} />,
      description: "Your MVP goes live with full documentation, training, and ongoing support included.",
      duration: "1 day",
      bgColor: "bg-vibe-green",
      progressColor: "#4CAC77"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From initial consultation to successful launch — here's how we bring your idea to life in record time.
          </p>
          
          {/* Overall Timeline Progress */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between text-sm font-semibold text-gray-600 mb-4">
                <div className="flex items-center">
                  <Sparkles className="mr-2 text-purple-500" size={16} />
                  <span>Start</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-2 text-yellow-500" size={16} />
                  <span>7 Days Later</span>
                </div>
                <div className="flex items-center">
                  <Rocket className="mr-2 text-green-500" size={16} />
                  <span>Launch!</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 via-yellow-500 via-blue-500 to-green-500 h-3 rounded-full animate-pulse shadow-lg" style={{ width: '100%' }}></div>
                </div>
                <div className="absolute top-0 left-0 w-full flex justify-between">
                  <div className="w-4 h-4 bg-purple-500 rounded-full -mt-0.5 shadow-lg animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full -mt-0.5 shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full -mt-0.5 shadow-lg animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full -mt-0.5 shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Main Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-yellow-500 via-blue-500 to-green-500 transform -translate-y-1/2 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-20 h-20 ${step.bgColor} rounded-full border-4 border-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Step Card */}
                <div className="pt-24">
                  <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 group-hover:border-t-8" style={{ borderTopColor: step.progressColor }}>
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: step.progressColor }}>Step {step.step}</div>
                        <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">{step.description}</p>
                      
                      <div className="flex items-center justify-center text-sm text-gray-500 bg-gray-50 rounded-xl px-4 py-3 mb-4">
                        <Clock className="mr-2" size={14} />
                        <span className="font-semibold">{step.duration}</span>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-1000 shadow-sm"
                            style={{ 
                              width: '100%',
                              backgroundColor: step.progressColor,
                              animationDelay: `${index * 200}ms`
                            }}
                          ></div>
                        </div>
                        <div className="absolute -top-1 right-0 w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: step.progressColor }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Arrow Connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <ArrowRight className="text-gray-600 animate-pulse" size={20} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-yellow-500 via-blue-500 to-green-500 rounded-full"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Node */}
                  <div className={`w-20 h-20 ${step.bgColor} rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 flex-shrink-0 animate-pulse`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Card */}
                  <div className="ml-8 flex-1">
                    <Card className="bg-white rounded-2xl shadow-xl border-l-4 hover:shadow-2xl transition-all duration-300" style={{ borderLeftColor: step.progressColor }}>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: step.progressColor }}>Step {step.step}</div>
                          <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">{step.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 bg-gray-50 rounded-xl px-4 py-3 inline-flex">
                          <Clock className="mr-2" size={14} />
                          <span className="font-semibold">{step.duration}</span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-1000 shadow-sm"
                              style={{ 
                                width: '100%',
                                backgroundColor: step.progressColor
                              }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-t-4 border-gradient-to-r from-purple-500 to-green-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-green-50/50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4 flex items-center justify-center">
                <Sparkles className="mr-3 text-purple-500" size={28} />
                Ready to Start Your Journey?
                <Rocket className="ml-3 text-green-500" size={28} />
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Join 150+ successful founders who've launched their MVPs with us
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center bg-green-50 px-3 py-2 rounded-lg">
                  <CheckCircle className="mr-2 text-green-500" size={16} />
                  <span className="font-semibold">Free consultation</span>
                </span>
                <span className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <CheckCircle className="mr-2 text-blue-500" size={16} />
                  <span className="font-semibold">7-day delivery</span>
                </span>
                <span className="flex items-center bg-purple-50 px-3 py-2 rounded-lg">
                  <CheckCircle className="mr-2 text-purple-500" size={16} />
                  <span className="font-semibold">Production ready</span>
                </span>
              </div>
              
              {/* Mini progress indicator */}
              <div className="w-32 mx-auto">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}