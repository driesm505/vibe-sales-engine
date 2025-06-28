import { Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rich-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-vibe-green to-trust-blue rounded-xl flex items-center justify-center">
                <Code className="text-white text-lg" size={20} />
              </div>
              <span className="text-2xl font-bold font-poppins">Vibe Coding</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We build MVP's for entrepreneurs — powered by AI, built with best practices, and ready to scale. From idea to launch in days, not months.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-vibe-green rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="text-sm font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-vibe-green rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-vibe-green rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="text-sm font-bold">gh</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-vibe-green transition-colors">MVP Development</a></li>
              <li><a href="#services" className="hover:text-vibe-green transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-vibe-green transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="hover:text-vibe-green transition-colors">Technical Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-vibe-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-vibe-green transition-colors">Our Process</a></li>
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
