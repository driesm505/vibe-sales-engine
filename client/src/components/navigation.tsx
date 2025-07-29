import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code } from "lucide-react";
import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-vibe-green rounded-lg flex items-center justify-center">
              <Code className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-white">
              Vibe<span className="text-vibe-green">Coding</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
            >
              {t.nav.whyUs}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibe-green transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
            >
              {t.nav.services}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-conversion-orange transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
            >
              {t.nav.process}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-trust-blue transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
            >
              {t.nav.pricing}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
            >
              {t.nav.faq}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <LanguageSwitcher />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-vibe-green hover:bg-vibe-green/90 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              {t.nav.getStarted}
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="mb-4">
                  <LanguageSwitcher />
                </div>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-secondary hover:text-vibe-green transition-all duration-300 font-medium relative group"
                >
                  {t.nav.services}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-conversion-orange transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('why-us')}
                  className="text-left text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
                >
                  {t.nav.whyUs}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibe-green transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-left text-gray-300 hover:text-vibe-green transition-all duration-300 font-medium relative group"
                >
                  {t.nav.process}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-trust-blue transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-left text-secondary hover:text-vibe-green transition-all duration-300 font-medium relative group"
                >
                  {t.nav.pricing}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-left text-secondary hover:text-vibe-green transition-all duration-300 font-medium relative group"
                >
                  {t.nav.faq}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-conversion-orange hover:bg-conversion-orange/90 text-white w-full mt-4"
                >
                  {t.nav.getStarted}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
