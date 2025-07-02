import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useLanguage } from "@/lib/i18n";

interface VideoModalProps {
  trigger?: React.ReactNode;
  videoId?: string;
}

export default function VideoModal({ trigger, videoId = "dQw4w9WgXcQ" }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const defaultTrigger = (
    <Button 
      variant="outline"
      size="lg"
      className="border-2 border-vibe-green text-vibe-green hover:bg-vibe-green hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 bg-slate-800/50 backdrop-blur-sm shadow-lg shadow-vibe-green/20 hover:shadow-vibe-green/40"
    >
      <Play className="mr-2" size={20} />
      {t.hero.watchDemo}
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-black border-none">
        <VisuallyHidden>
          <DialogTitle>MVP Development Demo Video</DialogTitle>
          <DialogDescription>Watch how we build MVPs for entrepreneurs in just 7 days</DialogDescription>
        </VisuallyHidden>
        <div className="relative aspect-video">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="text-white" size={20} />
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="MVP Development Demo Video"
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}