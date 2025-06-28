import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Code, Database, Cloud, CheckCircle, GitBranch, Monitor, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Custom hooks for animations
function useCountAnimation(targetValue: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const increment = targetValue / (duration / 50);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [targetValue, isVisible]);
  
  return count;
}

function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return { ref, isVisible };
}

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated counts
  const mvpCount = useCountAnimation(50, isVisible);
  const webAppCount = useCountAnimation(100, isVisible);
  const landingCount = useCountAnimation(200, isVisible);
  const consultingCount = useCountAnimation(500, isVisible);

  const services = [
    {
      icon: <Terminal className="text-white text-xl" />,
      title: "MVP Development",
      price: "From €5,000",
      description: "Full-stack MVP with modern architecture. React frontend, Node.js backend, PostgreSQL database, and cloud deployment.",
      features: [
        "React + TypeScript frontend development",
        "Node.js + Express.js backend API", 
        "PostgreSQL database with Drizzle ORM",
        "Docker containerization & cloud deployment"
      ],
      bgColor: "bg-slate-800",
      buttonColor: "bg-slate-800 hover:bg-slate-700",
      techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
      completedCount: mvpCount,
      codeSnippet: "$ npx create-vibe-mvp --stack=full"
    },
    {
      icon: <Code className="text-white text-xl" />,
      title: "Web Applications",
      price: "From €2,500", 
      description: "Custom web applications with modern tech stack. SaaS platforms, admin dashboards, and complex business logic.",
      features: [
        "Next.js or React with server-side rendering",
        "RESTful APIs with authentication & authorization", 
        "Real-time features with WebSocket integration",
        "Performance optimization & SEO implementation"
      ],
      bgColor: "bg-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-600",
      techStack: ["Next.js", "GraphQL", "Redis", "AWS"],
      completedCount: webAppCount,
      codeSnippet: "$ npm create next-app --typescript"
    },
    {
      icon: <Monitor className="text-white text-xl" />,
      title: "Landing Pages",
      price: "From €1,500",
      description: "High-converting landing pages with A/B testing, analytics, and conversion optimization built-in.",
      features: [
        "Conversion-optimized React components",
        "Google Analytics & Facebook Pixel integration",
        "A/B testing framework implementation", 
        "Lighthouse performance score 90+"
      ],
      bgColor: "bg-green-700",
      buttonColor: "bg-green-700 hover:bg-green-600",
      techStack: ["React", "Vercel", "Analytics", "Testing"],
      completedCount: landingCount,
      codeSnippet: "$ npm run build && npm run analyze"
    },
    {
      icon: <Database className="text-white text-xl" />,
      title: "Technical Consulting",
      price: "From €150/hour",
      description: "Expert technical guidance for architecture, performance optimization, and best practices implementation.",
      features: [
        "System architecture design & review",
        "Database optimization & query performance",
        "Security audit & penetration testing",
        "DevOps setup with CI/CD pipelines"
      ],
      bgColor: "bg-purple-700",
      buttonColor: "bg-purple-700 hover:bg-purple-600",
      techStack: ["Architecture", "DevOps", "Security", "Performance"],
      completedCount: consultingCount,
      codeSnippet: "$ docker-compose up -d --scale app=3"
    }
  ];

  return (
    <>
      {/* Tech Services Section */}
      <section ref={ref} id="services" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
          <div className="absolute top-10 left-10 text-green-400/20 font-mono text-sm animate-float">
            {'>'} git status
          </div>
          <div className="absolute bottom-10 right-10 text-blue-400/20 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
            Building...
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(76,172,119,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(76,172,119,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
              <span className="text-green-400">{'>'}</span> Our Tech Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Modern development services powered by cutting-edge technology and AI-enhanced workflows.
            </p>
            
            
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/90 border border-slate-700 rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105 group backdrop-blur-sm">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-600">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <div className="text-green-400 font-mono text-sm">{service.price}</div>
                      </div>
                    </div>
                    
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-xs text-green-400 mb-2 font-mono">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full font-mono border border-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Code snippet */}
                  <div className="bg-black/50 rounded-lg p-4 mb-6 border border-slate-600">
                    <div className="text-xs text-green-400 mb-1 font-mono">{'>'}</div>
                    <div className="text-xs text-gray-300 font-mono">{service.codeSnippet}</div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="mr-3 text-green-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${service.buttonColor} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
                  >
                    <Terminal className="mr-2" size={16} />
                    Start Project
                  </Button>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-green-400">{'>'}</span> Ready to Build?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's turn your idea into a production-ready application with modern tech stack.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <GitBranch className="mr-2" size={16} />
                Initialize Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Value Proposition */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
              Why Choose Our Tech Approach?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern architecture, proven frameworks, and battle-tested deployment strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">Fast Development</h3>
              <p className="text-gray-300 leading-relaxed">AI-enhanced development process with modern frameworks for rapid prototyping and deployment.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">Production Ready</h3>
              <p className="text-gray-300 leading-relaxed">Enterprise-grade code with security, performance, and scalability built-in from day one.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cloud className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">Cloud Native</h3>
              <p className="text-gray-300 leading-relaxed">Built for the cloud with containerization, auto-scaling, and zero-downtime deployments.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}