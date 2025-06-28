import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage, type Language } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    switchLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="text-gray-600" size={16} />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <Button
          size="sm"
          variant={language === 'en' ? 'default' : 'ghost'}
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === 'en' 
              ? 'bg-white text-primary shadow-sm' 
              : 'text-secondary hover:text-primary hover:bg-white/50'
          }`}
        >
          EN
        </Button>
        <Button
          size="sm"
          variant={language === 'nl' ? 'default' : 'ghost'}
          onClick={() => handleLanguageChange('nl')}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === 'nl' 
              ? 'bg-white text-primary shadow-sm' 
              : 'text-secondary hover:text-primary hover:bg-white/50'
          }`}
        >
          NL
        </Button>
      </div>
    </div>
  );
}