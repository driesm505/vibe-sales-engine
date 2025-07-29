import { Card, CardContent } from "@/components/ui/card";
import { Star, Github, Terminal, Code } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Sarah.tech",
      title: "CTO @ FinanceFlow",
      avatar: "ST",
      rating: 5,
      techStack: "Next.js + PostgreSQL",
      deployTime: "From 5 days",
      quote: "Production-ready MVP with enterprise architecture. Their TypeScript setup saved us months of refactoring later.",
      metrics: "50K+ users, 99.9% uptime"
    },
    {
      name: "dev_mike", 
      title: "Lead Engineer @ CloudScale",
      avatar: "DM",
      rating: 5,
      techStack: "React + Node.js + Docker",
      deployTime: "1 week",
      quote: "Clean code, proper CI/CD, and excellent documentation. The codebase was ready for our engineering team immediately.",
      metrics: "Zero deployment issues"
    },
    {
      name: "emma_builds",
      title: "Founder @ DataDriven",
      avatar: "EB",
      rating: 5,
      techStack: "Full-stack TypeScript",
      deployTime: "From 3 days",
      quote: "Lightning-fast development without compromising quality. The automated testing suite gave us confidence from day one.",
      metrics: "95+ Lighthouse score"
    }
  ];

  const techBadges = [
    { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
    { name: "Docker", icon: <Terminal className="w-4 h-4" /> },
    { name: "GitHub", icon: <Github className="w-4 h-4" /> },
    { name: "CI/CD", icon: <Code className="w-4 h-4" /> }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-green-400">{'>'}</span> {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-300">{t.testimonials.subtitle}</p>
          <div className="mt-4 text-sm font-mono text-green-400">
            {'>'} git log --oneline --reviews
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/90 border border-slate-700 rounded-2xl backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <CardContent className="p-8 relative overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-mono font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white font-mono">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="text-green-400 font-mono text-sm">{testimonial.deployTime}</div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-xs text-green-400 mb-2 font-mono">Stack:</div>
                  <div className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full font-mono border border-slate-600 inline-block">
                    {testimonial.techStack}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-current" size={16} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Metrics */}
                <div className="bg-black/50 rounded-lg p-3 border border-slate-600">
                  <div className="text-xs text-green-400 mb-1 font-mono">{'>'} metrics</div>
                  <div className="text-xs text-gray-300 font-mono">{testimonial.metrics}</div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8 font-mono">// {t.testimonials.trusted}</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {techBadges.map((badge, index) => (
              <div key={index} className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-slate-600/50 transition-colors">
                {badge.icon}
                <span className="font-mono text-gray-300 text-sm">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
