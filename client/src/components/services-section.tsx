import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Globe2, Target, Brain, Sparkles, CheckCircle, Zap } from "lucide-react";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Rocket className="text-white text-xl" />,
      title: "MVP Development",
      price: "From €5,000",
      description: "Your first version — lean, functional and designed for rapid testing. Get to market fast with a product that validates your concept and attracts investors.",
      features: [
        "Rapid prototyping & user feedback integration",
        "Core features development & market validation",
        "Investor-ready documentation & scalable architecture",
        "7-day delivery guarantee"
      ],
      bgColor: "bg-vibe-green",
      buttonColor: "bg-vibe-green hover:bg-vibe-green/90"
    },
    {
      icon: <Globe2 className="text-white text-xl" />,
      title: "Web Development",
      price: "From €2,500", 
      description: "Custom web applications built with modern technologies. SaaS platforms, marketplaces, portals — whatever your startup needs to succeed.",
      features: [
        "Custom design & development with modern tech stack",
        "Responsive & mobile-friendly optimization",
        "SEO optimization & performance tuning",
        "Security best practices & deployment"
      ],
      bgColor: "bg-trust-blue",
      buttonColor: "bg-trust-blue hover:bg-trust-blue/90"
    },
    {
      icon: <Target className="text-white text-xl" />,
      title: "Landing Pages & Websites",
      price: "From €1,500",
      description: "Show your product, collect leads and build trust from day one. High-converting pages that turn visitors into customers.",
      features: [
        "Conversion-optimized design & copywriting",
        "Lead capture forms & analytics integration", 
        "A/B testing ready & mobile optimization",
        "3-day turnaround for landing pages"
      ],
      bgColor: "bg-conversion-orange",
      buttonColor: "bg-conversion-orange hover:bg-conversion-orange/90"
    },
    {
      icon: <Brain className="text-white text-xl" />,
      title: "Technical Consulting",
      price: "From €150/hour",
      description: "Expert guidance for your technical challenges. From architecture review to performance optimization — get the advice you need.",
      features: [
        "Technical strategy & architecture review",
        "Code review & performance optimization",
        "Security assessment & best practices",
        "Flexible hourly or project-based pricing"
      ],
      bgColor: "bg-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <>
      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
              Built for Founders, Dreamers & Doers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You bring the idea — we bring the technical power. Whether you're validating a concept, pitching investors, or launching to your first users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-vibe-green to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Validate Your Concept</h3>
              <p className="text-gray-600 leading-relaxed">Test your ideas quickly with a professional MVP that lets you gather real user feedback and iterate fast.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-trust-blue to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Impress Investors</h3>
              <p className="text-gray-600 leading-relaxed">Show them a working product, not just slides. Demonstrate market fit with a functional prototype they can interact with.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-conversion-orange to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Launch with Confidence</h3>
              <p className="text-gray-600 leading-relaxed">Scalable code that grows with your success. Built with modern best practices for easy maintenance and future development.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-vibe-green hover:bg-vibe-green/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Talk About Your Idea
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect solution for your project — from quick MVP validation to full-scale platform development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="service-card bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-poppins">{service.title}</h3>
                      <p className={`font-semibold ${service.bgColor === 'bg-vibe-green' ? 'text-vibe-green' : 
                        service.bgColor === 'bg-trust-blue' ? 'text-trust-blue' : 
                        service.bgColor === 'bg-conversion-orange' ? 'text-conversion-orange' : 'text-purple-600'}`}>
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className={`mr-3 ${service.bgColor === 'bg-vibe-green' ? 'text-vibe-green' : 
                          service.bgColor === 'bg-trust-blue' ? 'text-trust-blue' : 
                          service.bgColor === 'bg-conversion-orange' ? 'text-conversion-orange' : 'text-purple-600'}`} size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${service.buttonColor} text-white py-3 rounded-xl font-semibold transition-colors duration-300`}
                  >
                    Start Your {service.title.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
