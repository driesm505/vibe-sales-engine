import { CheckCircle, Clock, Users, Shield, Code2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export default function WhyUsSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Clock,
      title: t.whyUs.fastDelivery.title,
      description: t.whyUs.fastDelivery.description,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Code2,
      title: t.whyUs.professionalQuality.title,
      description: t.whyUs.professionalQuality.description,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: t.whyUs.personalApproach.title,
      description: t.whyUs.personalApproach.description,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      icon: Shield,
      title: t.whyUs.reliablePartner.title,
      description: t.whyUs.reliablePartner.description,
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Zap,
      title: t.whyUs.aiAccelerated.title,
      description: t.whyUs.aiAccelerated.description,
      gradient: "from-yellow-600 to-amber-600"
    },
    {
      icon: CheckCircle,
      title: t.whyUs.transparentPricing.title,
      description: t.whyUs.transparentPricing.description,
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-green-400/30 transition-all duration-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-green-600/10 rounded-lg flex items-center justify-center border border-green-600/20">
                  <feature.icon className="text-green-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}