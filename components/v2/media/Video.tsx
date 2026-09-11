"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src?: string;
  mobileSrc?: string;
  desktopSrc?: string;
  poster?: string;
  altText?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16" | "21/9" | "auto";
  showSoundToggle?: boolean;
  priority?: boolean;
  autoplay?: boolean;
  className?: string;
}

export const Video: React.FC<VideoProps> = ({
  src,
  mobileSrc,
  desktopSrc,
  poster,
  altText = "Kendits Creative Studios video footage",
  aspectRatio = "16/9",
  showSoundToggle = false,
  priority = false,
  autoPlay = true,
  autoplay,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  className,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const shouldAutoPlay = autoplay !== undefined ? autoplay : autoPlay;

  // Toggle sound safely
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
    "21/9": "aspect-[21/9]",
    auto: "aspect-auto",
  };

  const primarySrc = desktopSrc || src;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-canvas-elevated border border-white/10",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {primarySrc && !hasError ? (
        <video
          ref={videoRef}
          poster={poster}
          autoPlay={shouldAutoPlay}
          loop={loop}
          muted={isMuted}
          playsInline={playsInline}
          controls={controls}
          preload={priority ? "auto" : "metadata"}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          aria-label={altText}
          {...props}
        >
          {desktopSrc && <source src={desktopSrc} media="(min-width: 768px)" />}
          {mobileSrc && <source src={mobileSrc} media="(max-width: 767px)" />}
          {src && <source src={src} />}
          Your browser does not support the video tag.
        </video>
      ) : (
        /* Video Placeholder Fallback when footage is missing (Identified in Phase 1 Audit) */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-canvas-elevated to-canvas">
          {poster && (
            <img
              src={poster}
              alt={altText}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          )}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border border-kendits-turquoise/40 bg-kendits-turquoise/10 flex items-center justify-center text-kendits-turquoise mb-3 shadow-glow-cyan">
              <svg className="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-kendits-turquoise">
              Kendits Cinematic Reel
            </p>
            <p className="text-xs text-text-muted mt-1 max-w-xs">
              {hasError ? "Video source unavailable" : "Media abstraction ready for master showreel"}
            </p>
          </div>
        </div>
      )}

      {/* Sound Toggle Overlay */}
      {showSoundToggle && primarySrc && !hasError && (
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-canvas/70 backdrop-blur-md text-text-primary border border-white/20 hover:bg-canvas hover:border-kendits-turquoise transition-all focus-visible:ring-2 focus-visible:ring-kendits-turquoise focus-visible:outline-none"
        >
          {isMuted ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};
