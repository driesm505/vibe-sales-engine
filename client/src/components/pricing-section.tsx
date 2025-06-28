import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Rocket, Crown } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      name: "Landing Page",
      price: "€1,500",
      duration: "3 days",
      icon: <Zap className="text-white" size={24} />,
      bgColor: "bg-conversion-orange",
      description: "Perfect for validating your idea and collecting early interest",
      features: [
        "High-converting single page design",
        "Lead capture form integration",
        "Mobile-responsive layout",
        "SEO optimization",
        "Analytics setup",
        "3 rounds of revisions"
      ],
      popular: false
    },
    {
      name: "Web Application",
      price: "€2,500",
      duration: "1-2 weeks",
      icon: <Rocket className="text-white" size={24} />,
      bgColor: "bg-trust-blue",
      description: "Full-featured web app with custom functionality",
      features: [
        "Custom web application development",
        "User authentication system",
        "Database integration",
        "Admin dashboard",
        "API development",
        "Security best practices",
        "Testing & deployment"
      ],
      popular: true
    },
    {
      name: "MVP Development",
      price: "€5,000",
      duration: "7 days",
      icon: <Crown className="text-white" size={24} />,
      bgColor: "bg-vibe-green",
      description: "Complete MVP ready for investors and early users",
      features: [
        "Full MVP with core features",
        "User management system",
        "Payment integration (if needed)",
        "Advanced analytics",
        "Scalable architecture",
        "Investor documentation",
        "30 days post-launch support",
        "Performance optimization"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 gradient-bg" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your project. No hidden fees, no surprises — just clear pricing for exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'ring-2 ring-trust-blue' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-trust-blue text-white px-4 py-1 text-sm font-semibold">
                    <Star className="mr-1" size={14} />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 ${plan.bgColor} rounded-2xl flex items-center justify-center`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-poppins mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-rich-black">{plan.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Delivered in {plan.duration}</p>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`mr-3 mt-0.5 ${plan.bgColor === 'bg-vibe-green' ? 'text-vibe-green' : 
                        plan.bgColor === 'bg-trust-blue' ? 'text-trust-blue' : 'text-conversion-orange'}`} size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${plan.bgColor === 'bg-vibe-green' ? 'bg-vibe-green hover:bg-vibe-green/90' : 
                    plan.bgColor === 'bg-trust-blue' ? 'bg-trust-blue hover:bg-trust-blue/90' : 
                    'bg-conversion-orange hover:bg-conversion-orange/90'} text-white py-3 rounded-xl font-semibold transition-colors duration-300`}
                >
                  Get Started with {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Need something custom? Let's discuss your specific requirements.</p>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}