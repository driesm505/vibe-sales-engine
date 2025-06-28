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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Code className="text-white text-lg" size={20} />
            </div>
            <span className="text-2xl font-bold font-poppins text-white">
              <span className="text-green-400">{'<'}</span>Vibe<span className="text-green-400">{'/>'}</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-secondary hover:text-vibe-green transition-colors font-medium"
            >
              {t.nav.services}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-secondary hover:text-vibe-green transition-colors font-medium"
            >
              {t.nav.testimonials}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-secondary hover:text-vibe-green transition-colors font-medium"
            >
              {t.nav.pricing}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-secondary hover:text-vibe-green transition-colors font-medium"
            >
              {t.nav.faq}
            </button>
            <LanguageSwitcher />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-conversion-orange hover:bg-conversion-orange/90 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  className="text-left text-secondary hover:text-vibe-green transition-colors font-medium"
                >
                  {t.nav.services}
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-secondary hover:text-vibe-green transition-colors font-medium"
                >
                  {t.nav.testimonials}
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-left text-secondary hover:text-vibe-green transition-colors font-medium"
                >
                  {t.nav.pricing}
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-left text-secondary hover:text-vibe-green transition-colors font-medium"
                >
                  {t.nav.faq}
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
