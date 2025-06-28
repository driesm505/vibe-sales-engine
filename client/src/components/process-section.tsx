import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      icon: <MessageCircle className="text-white" size={24} />,
      description: "We start with a free 30-minute consultation to understand your vision, goals, and requirements.",
      duration: "30 minutes",
      bgColor: "bg-purple-600"
    },
    {
      step: 2,
      title: "Strategy & Planning",
      icon: <Lightbulb className="text-white" size={24} />,
      description: "We create a detailed project plan with wireframes, tech stack recommendations, and timeline.",
      duration: "1-2 days",
      bgColor: "bg-yellow-500"
    },
    {
      step: 3,
      title: "Development Sprint",
      icon: <Code className="text-white" size={24} />,
      description: "Our AI-enhanced development process builds your application with daily progress updates.",
      duration: "3-7 days",
      bgColor: "bg-trust-blue"
    },
    {
      step: 4,
      title: "Launch & Support",
      icon: <Rocket className="text-white" size={24} />,
      description: "We deploy your application and provide post-launch support to ensure everything runs smoothly.",
      duration: "1 day + ongoing",
      bgColor: "bg-vibe-green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to successful launch — here's how we bring your idea to life in record time.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
          
          {processSteps.map((step, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Step Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">Step {step.step}</div>
                        <h3 className="text-2xl font-bold font-poppins">{step.title}</h3>
                        <div className="text-sm text-gray-600 font-medium">{step.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Node */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-200 items-center justify-center z-10">
                <div className={`w-6 h-6 ${step.bgColor} rounded-full flex items-center justify-center`}>
                  <CheckCircle className="text-white" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-vibe-green to-trust-blue rounded-2xl">
          <h3 className="text-3xl font-bold font-poppins text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Book a free consultation and get your custom project timeline today.
          </p>
          <a 
            href="https://meetings-eu1.hubspot.com/moons" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-trust-blue px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle className="mr-2" size={20} />
            Book Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}