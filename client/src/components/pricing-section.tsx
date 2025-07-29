import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Terminal, Code, Database, GitBranch } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function PricingSection() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      name: t.pricing.plans.mvpPrototype.name,
      price: `${t.common.from} €1,500`,
      duration: `3-5 ${t.common.days}`,
      icon: <Terminal className="text-white" size={24} />,
      bgColor: "from-conversion-orange to-conversion-orange/80",
      borderColor: "border-conversion-orange",
      description: t.pricing.plans.mvpPrototype.description,
      techStack: ["React", "Node.js", "SQLite", "Tailwind"],
      codeSnippet: "npx create-mvp --template=prototype",
      features: t.pricing.plans.mvpPrototype.features,
      popular: false
    },
    {
      name: t.pricing.plans.productionMvp.name,
      price: `${t.common.from} €2,500`,
      duration: `1-2 weeks`,
      icon: <Code className="text-white" size={24} />,
      bgColor: "from-vibe-green to-vibe-green/80",
      borderColor: "border-vibe-green",
      description: t.pricing.plans.productionMvp.description,
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
      codeSnippet: "docker-compose up --scale web=3",
      features: t.pricing.plans.productionMvp.features,
      popular: true
    },
    {
      name: t.pricing.plans.scaleReady.name,
      price: `${t.common.from} €5,000`,
      duration: `7-10 ${t.common.days}`,
      icon: <Database className="text-white" size={24} />,
      bgColor: "from-trust-blue to-trust-blue/80",
      borderColor: "border-trust-blue",
      description: t.pricing.plans.scaleReady.description,
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
      codeSnippet: "kubectl apply -f k8s/ && helm upgrade app",
      features: t.pricing.plans.scaleReady.features,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="pricing">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-vibe-green">{'$'}</span> {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
          <div className="mt-4 text-sm font-mono text-vibe-green">
            {'>'} npm install @vibe/mvp-builder --save
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative bg-slate-800/90 border-2 ${plan.borderColor} rounded-2xl backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105 group ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-semibold font-mono">
                    <Star className="mr-1" size={14} />
                    {t.pricing.popular}
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 relative overflow-hidden">
                {/* Terminal Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-poppins mb-2 text-white">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-green-400 font-mono">{plan.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 font-mono">// {plan.duration}</p>
                  <p className="text-gray-300 leading-relaxed">{plan.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-xs text-green-400 mb-2 font-mono">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {plan.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full font-mono border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code snippet */}
                <div className="bg-black/50 rounded-lg p-4 mb-6 border border-slate-600">
                  <div className="text-xs text-green-400 mb-1 font-mono">{'>'}</div>
                  <div className="text-xs text-gray-300 font-mono">{plan.codeSnippet}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 text-green-400" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${plan.bgColor} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg group-hover:shadow-green-500/30`}
                >
                  <GitBranch className="mr-2" size={16} />
                  {t.pricing.getStarted} {plan.name}
                </Button>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-green-400">{'>'}</span> Custom Architecture?
            </h3>
            <p className="text-gray-300 mb-6">
              {t.pricing.custom}
            </p>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 font-mono"
            >
              <Terminal className="mr-2" size={16} />
              {t.pricing.customQuote}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}