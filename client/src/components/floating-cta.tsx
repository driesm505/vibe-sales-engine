import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function FloatingCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-24 lg:bottom-6 right-6 z-50">
        {!isExpanded ? (
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-16 h-16 rounded-full bg-conversion-orange hover:bg-conversion-orange/90 shadow-2xl animate-bounce-subtle"
          >
            <MessageCircle className="text-white" size={24} />
          </Button>
        ) : (
          <Card className="bg-white shadow-2xl border-2 border-conversion-orange rounded-2xl w-80">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{t.floating.ready}</h3>
                  <p className="text-gray-600 text-sm">{t.floating.mvp7days}</p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-conversion-orange hover:bg-conversion-orange/90 text-white"
                >
                  <Rocket className="mr-2" size={16} />
                  {t.floating.shareIdea}
                </Button>
                
                <a
                  href="https://meetings-eu1.hubspot.com/moons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
                  >
                    <MessageCircle className="mr-2" size={16} />
                    {t.floating.bookCall}
                  </Button>
                </a>
              </div>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <span>✓ {t.floating.consultation}</span>
                  <span>✓ {t.floating.response}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Sticky Bottom Banner (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm text-gray-900">{t.floating.mobile.ready}</div>
            <div className="text-xs text-gray-600">{t.floating.mobile.pricing}</div>
          </div>
          <Button
            onClick={scrollToContact}
            className="bg-conversion-orange hover:bg-conversion-orange/90 text-white px-6 py-2 text-sm"
          >
            {t.floating.mobile.getStarted}
          </Button>
        </div>
      </div>
    </>
  );
}