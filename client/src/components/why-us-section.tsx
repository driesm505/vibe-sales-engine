import { CheckCircle, Clock, Users, Shield, Code2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export default function WhyUsSection() {
  const { t, language } = useLanguage();
  console.log('WhyUsSection - Current language:', language, 'Translations:', t);
  
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
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-green-400">{'>'}</span> {t.whyUs.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
            {'// '}{t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900/70 border border-slate-700 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4 text-white text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
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