import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage, type Language } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    console.log('Switching language to:', newLanguage);
    switchLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="text-green-400" size={16} />
      <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 font-mono ${
            language === 'en' 
              ? 'bg-green-400 text-black shadow-sm' 
              : 'text-gray-300 hover:text-green-400 hover:bg-slate-700'
          }`}
        >
          EN
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => handleLanguageChange('nl')}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 font-mono ${
            language === 'nl' 
              ? 'bg-green-400 text-black shadow-sm' 
              : 'text-gray-300 hover:text-green-400 hover:bg-slate-700'
          }`}
        >
          NL
        </Button>
      </div>
    </div>
  );
}