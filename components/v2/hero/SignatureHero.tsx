"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register GSAP plugins safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SignatureHeroProps {
  videoSrc?: string;
  mobileVideoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export const SignatureHero: React.FC<SignatureHeroProps> = ({
  videoSrc = "/trialvideo.mp4",
  mobileVideoSrc = "/lets%20see-converted.mp4",
  posterSrc = "/webp/cinematic_lens.webp",
  className,
}) => {
  const isIOS =
    typeof window !== "undefined" &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);
  const darkOverlayRef = useRef<SVGRectElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const payoffContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 1920,
    height: 1080,
  });

  // Track viewport dimensions for 1:1 responsive SVG mask coordinates (prevents mobile letter clipping)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setDimensions((previous) => {
        const width = window.innerWidth;
        const height = isIOS && width === previous.width ? previous.height : window.innerHeight;

        if (previous.width === width && previous.height === height) {
          return previous;
        }

        return { width, height };
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isIOS]);

  // Prevent transient iOS browser-chrome changes from invalidating the pinned hero.
  useEffect(() => {
    if (typeof window === "undefined" || !isIOS) return;

    ScrollTrigger.config({
      ignoreMobileResize: true,
    });
  }, [isIOS]);

  // Check user preference for reduced motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Ensure video starts playing immediately on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Toggle user audio control
  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  // Compute dynamic font size so KENDITS fills roughly 84% of viewport width on desktop, 88% on mobile
  const isMobile = dimensions.width < 768;
  const targetWidth = dimensions.width * (isMobile ? 0.88 : 0.82);
  // In Inter 900, "KENDITS" width is approximately 4.2 * fontSize
  const rawFontSize = Math.round(targetWidth / 4.2);
  const fontSize = Math.max(isMobile ? 46 : 96, Math.min(rawFontSize, 280));

  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;

  // GSAP ScrollTrigger timeline
  useEffect(() => {
    if (typeof window === "undefined" || isReducedMotion || dimensions.width === 0) return;

    const ctx = gsap.context(() => {
      // Create master ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTargetRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial State: Fade out introductory studio cues and scroll indicators early
      tl.to(
        headerContentRef.current,
        {
          opacity: 0,
          y: -24,
          duration: 0.22,
          ease: "power2.out",
        },
        0
      );

      // Keep the opening scroll instruction visible long enough to guide mobile visitors.
      tl.to(
        scrollCueRef.current,
        {
          opacity: 0,
          y: -12,
          duration: 0.16,
          ease: "power2.out",
        },
        0.28
      );

      // 2. Expand Mask: Scale up the KENDITS text cutout exponentially to reveal video
      tl.to(
        maskGroupRef.current,
        {
          scale: isIOS ? 16 : isMobile ? 20 : 22,
          transformOrigin: `${cx}px ${cy}px`,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // 3. Fullscreen Transition: Fade out dark overlay mask as text scale engulfs screen
      tl.to(
        darkOverlayRef.current,
        {
          opacity: 0,
          duration: 0.28,
          ease: "power1.inOut",
        },
        0.34
      );

      // 4. Payoff Reveal: Fade in cinematic showreel payoff overlay as video becomes 100% fullscreen
      tl.fromTo(
        payoffContentRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.32,
          ease: "power2.out",
        },
        0.72
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isReducedMotion, dimensions.width, cx, cy, isMobile]);

  return (
    <section
      ref={containerRef}
      aria-label="Kendits Signature Cinematic Hero"
      className={cn("relative w-full bg-canvas select-none overflow-hidden", className)}
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinTargetRef}
        className="relative w-full h-[100svh] min-h-[100svh] overflow-hidden flex items-center justify-center bg-canvas"
      >
        {/* Layer 1: The Continuous Video Element (Playing from moment zero) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-0">
          {!hasVideoError ? (
            <>
              <img
                src={posterSrc}
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  isVideoLoaded ? "opacity-0" : "opacity-100"
                )}
              />
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onCanPlay={() => setIsVideoLoaded(true)}
                onError={() => setHasVideoError(true)}
                className={cn(
                  "relative w-full h-full object-cover transition-opacity duration-500",
                  isVideoLoaded ? "opacity-100" : "opacity-0"
                )}
                aria-label="Kendits Creative Studios official showreel footage"
              >
                <source src={mobileVideoSrc} media="(max-width: 767px)" />
                <source src={videoSrc} />
              </video>
            </>
          ) : (
            /* Poster fallback if video fails to load */
            <img
              src={posterSrc}
              alt="Kendits Studios Cinematic Visual"
              className="w-full h-full object-cover opacity-70"
            />
          )}

          {/* Subtle cinematic vignette — preserves rich footage color while framing edges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(5,5,5,0.65)_100%)]"
          />

          {/* Atmospheric Ambient Light Blooms living inside darkness */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 w-[45vw] h-[45vw] rounded-full blur-[100px] opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(0, 238, 220, 0.22) 0%, rgba(14, 66, 74, 0.08) 50%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-32 w-[45vw] h-[45vw] rounded-full blur-[100px] opacity-35"
            style={{
              background: "radial-gradient(circle, rgba(125, 21, 137, 0.20) 0%, rgba(58, 16, 84, 0.06) 50%, transparent 70%)",
            }}
          />
        </div>

        {/* Layer 2: The Precise SVG Cutout Vector Mask */}
        {!isReducedMotion ? (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <mask id="kendits-hero-mask">
                {/* 1. White rect covers entire screen (overlay is opaque) */}
                <rect width={dimensions.width} height={dimensions.height} fill="white" />
                {/* 2. Black KENDITS text cuts a hole through overlay (video shows through) */}
                <g ref={maskGroupRef} style={{ transformOrigin: `${cx}px ${cy}px` }}>
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="black"
                    fontFamily="var(--font-manrope), system-ui, sans-serif"
                    fontWeight="800"
                    fontSize={fontSize}
                    letterSpacing="-0.04em"
                  >
                    KENDITS
                  </text>
                </g>
              </mask>
            </defs>

            {/* Dark Obsidian Canvas Masked Layer */}
            <rect
              ref={darkOverlayRef}
              width={dimensions.width}
              height={dimensions.height}
              fill="#050505"
              mask="url(#kendits-hero-mask)"
            />
          </svg>
        ) : (
          /* Reduced Motion: Static Clean Wordmark Overlay */
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-canvas/75 backdrop-blur-xs">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter uppercase text-text-primary">
              KENDITS<span className="text-kendits-turquoise">.</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-white/50">
              Film & Visual Direction • Accra, Ghana
            </p>
          </div>
        )}

        {/* Layer 3: Initial Foreground Subtitles & Cinematic Framing Elements */}
        <div
          ref={headerContentRef}
          className="absolute inset-0 z-20 flex flex-col justify-between py-8 md:py-12 px-5 sm:px-8 lg:px-16 pointer-events-none"
        >
          {/* Top Eyebrow Bar */}
          <div className="pt-20 sm:pt-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-kendits-turquoise animate-pulse" />
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/70">
                Kendits Creative Studios
              </p>
            </div>
            <p className="hidden sm:block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              Film & Visual Direction • Worldwide
            </p>
          </div>

          {/* Bottom Controls & Scroll Cue */}
          <div className="pb-4 sm:pb-8 flex items-end justify-between">
            {/* Audio Toggle (Pointer events enabled for button) */}
            <div className="pointer-events-auto">
              <button
                onClick={toggleAudio}
                type="button"
                aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
                className="group/audio flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-[11px] font-mono tracking-widest text-white/70 hover:text-white hover:border-kendits-turquoise/50 transition-all duration-300"
              >
                {/* Audio visualizer bars */}
                <span className="flex items-end gap-0.5 h-3.5 w-3" aria-hidden="true">
                  <span
                    className={cn(
                      "w-0.5 bg-kendits-turquoise transition-all duration-300",
                      isMuted ? "h-1 opacity-40" : "h-3 animate-pulse"
                    )}
                  />
                  <span
                    className={cn(
                      "w-0.5 bg-kendits-turquoise transition-all duration-300",
                      isMuted ? "h-1.5 opacity-40" : "h-2 animate-pulse [animation-delay:150ms]"
                    )}
                  />
                  <span
                    className={cn(
                      "w-0.5 bg-kendits-turquoise transition-all duration-300",
                      isMuted ? "h-1 opacity-40" : "h-3.5 animate-pulse [animation-delay:300ms]"
                    )}
                  />
                </span>
                <span className="uppercase text-[10px] tracking-[0.18em]">
                  {isMuted ? "Sound Off" : "Sound On"}
                </span>
              </button>
            </div>

            {/* Right Meta Marker */}
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                Showreel 2026 // 24FPS
              </p>
            </div>
          </div>
        </div>

        {/* Independent scroll cue remains visible while the intro framing fades. */}
        <div
          ref={scrollCueRef}
          className="absolute bottom-5 sm:bottom-9 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2.5 pointer-events-none"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/55 whitespace-nowrap">
            <span className="sm:hidden">Scroll Down</span>
            <span className="hidden sm:inline">Scroll to Reveal</span>
          </span>
          <div className="flex flex-col items-center gap-1 animate-bounce" aria-hidden="true">
            <div className="w-[1px] h-5 bg-gradient-to-b from-kendits-turquoise via-kendits-turquoise/60 to-transparent" />
            <span className="block w-2 h-2 border-r border-b border-kendits-turquoise rotate-45 -translate-y-1" />
          </div>
        </div>

        {/* Layer 4: Fullscreen Payoff Overlay (Fades in at end of mask expansion) */}
        <div
          ref={payoffContentRef}
          className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-12 md:p-20 pointer-events-none opacity-0 bg-gradient-to-t from-canvas via-canvas/50 to-transparent"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-kendits-turquoise animate-ping" />
              <span className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.25em] text-kendits-turquoise">
                01 — Official Studio Showreel
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-none">
              Motion &amp; <span className="text-gradient-kendits">Light.</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-white/75 font-light max-w-xl leading-relaxed">
              We craft cinematic visuals that define brand presence and elevate perception.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
