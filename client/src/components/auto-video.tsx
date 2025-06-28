import { useRef, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AutoVideoProps {
  src?: string;
  poster?: string;
  className?: string;
}

export default function AutoVideo({ 
  src = "/demo-video.mp4", 
  poster = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  className = ""
}: AutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties for autoplay
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      // Attempt to play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Auto-play was prevented:", error);
            setIsPlaying(false);
          });
      }

      // Add event listeners
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-xl"
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        {/* Fallback to poster image */}
        <img 
          src={poster}
          alt="MVP Development Process Preview"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <Button
            onClick={togglePlay}
            size="lg"
            className="bg-white/90 hover:bg-white text-trust-blue rounded-full w-16 h-16 shadow-xl"
          >
            {isPlaying ? (
              <div className="w-4 h-4 bg-current rounded-sm"></div>
            ) : (
              <Play className="ml-1" size={24} />
            )}
          </Button>
          
          <Button
            onClick={toggleMute}
            size="sm"
            className="bg-white/90 hover:bg-white text-trust-blue rounded-full w-12 h-12 shadow-xl"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </Button>
        </div>
      </div>

      {/* Live Badge */}
      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse flex items-center">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
        LIVE DEMO
      </div>

      {/* Status Indicators */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">
          {isPlaying ? 'Playing' : 'Paused'}
        </div>
        {isMuted && (
          <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">
            Muted
          </div>
        )}
      </div>
    </div>
  );
}