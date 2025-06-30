import { Code, Github, Terminal, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-vibe-green rounded-lg flex items-center justify-center">
                <Code className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold">
                Vibe<span className="text-vibe-green">Coding</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Enterprise-grade development solutions for innovative businesses. From MVP to scale, we deliver production-ready applications that drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 border border-slate-700">
                <Github className="text-white" size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 border border-slate-700">
                <Terminal className="text-white" size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 border border-slate-700">
                <ExternalLink className="text-white" size={16} />
              </a>
            </div>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-mono text-green-400">./stack</h4>
            <ul className="space-y-2 text-gray-300 font-mono text-sm">
              <li><a href="#services" className="hover:text-green-400 transition-colors">├── MVP Prototypes</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">├── Production Apps</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">├── Scale Platforms</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">└── DevOps Consulting</a></li>
            </ul>
          </div>

          {/* Docs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-mono text-green-400">./docs</h4>
            <ul className="space-y-2 text-gray-300 font-mono text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">├── Architecture</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">├── Deployment</a></li>
              <li><a href="#testimonials" className="hover:text-vibe-green transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-vibe-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Vibe Coding Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-vibe-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-vibe-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
