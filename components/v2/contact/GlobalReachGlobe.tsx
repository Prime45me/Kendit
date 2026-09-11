"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Container } from "../ui/Container";

// Dynamically import World to prevent Three.js from entering the global bundle
const World = dynamic(() => import("@/components/v2/ui/Globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-kendits-turquoise/30 border-t-kendits-turquoise animate-spin" />
        <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
          Initializing 3D Coordinates...
        </span>
      </div>
    </div>
  ),
});

// Arcs strictly originating from Accra, Ghana (5.6037° N, 0.1870° W) to international creative hubs
const ACCRA_LAT = 5.6037;
const ACCRA_LNG = -0.187;

const reachArcs = [
  // Accra -> London, UK
  {
    order: 1,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.25,
    color: "#00f0ff",
  },
  // Accra -> New York, USA
  {
    order: 1,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.35,
    color: "#38bdf8",
  },
  // Accra -> Paris, France
  {
    order: 2,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.22,
    color: "#00f0ff",
  },
  // Accra -> Tokyo, Japan
  {
    order: 2,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.5,
    color: "#818cf8",
  },
  // Accra -> Los Angeles, USA
  {
    order: 3,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.45,
    color: "#38bdf8",
  },
  // Accra -> Toronto, Canada
  {
    order: 3,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 43.6532,
    endLng: -79.3832,
    arcAlt: 0.38,
    color: "#22d3ee",
  },
  // Accra -> Lagos, Nigeria
  {
    order: 4,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 6.5244,
    endLng: 3.3792,
    arcAlt: 0.1,
    color: "#00f0ff",
  },
  // Accra -> Johannesburg, South Africa
  {
    order: 4,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: -26.2041,
    endLng: 28.0473,
    arcAlt: 0.28,
    color: "#38bdf8",
  },
  // Accra -> Dubai, UAE
  {
    order: 5,
    startLat: ACCRA_LAT,
    startLng: ACCRA_LNG,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.32,
    color: "#818cf8",
  },
];

export const GlobalReachGlobe: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const globeConfig = {
    pointSize: 3,
    globeColor: "#050811",
    showAtmosphere: true,
    atmosphereColor: "#00f0ff",
    atmosphereAltitude: 0.15,
    emissive: "#040914",
    emissiveIntensity: 0.12,
    shininess: 0.9,
    polygonColor: "rgba(255, 255, 255, 0.75)",
    ambientLight: "#00f0ff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.8,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: ACCRA_LAT, lng: ACCRA_LNG },
    autoRotate: !prefersReducedMotion,
    autoRotateSpeed: prefersReducedMotion ? 0 : 0.6,
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/5 bg-canvas">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[40vw] rounded-full bg-kendits-turquoise/05 blur-[160px]"
      />

      <Container width="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-kendits-turquoise" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise">
              Origin & Reach
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-text-primary">
            We work <span className="text-gradient-kendits">beyond borders</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
            Headquartered in Accra, Ghana. We collaborate with international brands, directors,
            and visionary founders across continents to deliver world-class visual narratives.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="text-kendits-turquoise">Anchor:</span>
              <span>Accra, Ghana [5.6037° N, 0.1870° W]</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="text-kendits-turquoise">Engagements:</span>
              <span>UK, US, Europe, Middle East, Africa</span>
            </div>
          </div>
        </div>

        {/* 3D Globe Container — Touch and Mobile Scroll Optimized */}
        <div className="relative rounded-2xl border border-white/10 bg-canvas-elevated/20 overflow-hidden shadow-surface">
          {/* Top subtle vignette bar */}
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-canvas via-transparent to-transparent z-10 pointer-events-none" />

          {/* Interactive Canvas Canvas wrapper:
              - Uses touch-action: pan-y to prevent blocking vertical scrolling on touch devices
              - Responsive height: 360px on mobile, 480px on tablet, 560px on desktop
          */}
          <div
            className="w-full h-[360px] sm:h-[460px] md:h-[560px] relative overflow-hidden"
            style={{ touchAction: "pan-y" }}
          >
            <World data={reachArcs} globeConfig={globeConfig} />
          </div>

          {/* Bottom subtle vignette bar */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-canvas via-transparent to-transparent z-10 pointer-events-none" />

          {/* Subtle interaction tip overlay */}
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[11px] font-mono text-text-muted">
            <svg
              className="w-3.5 h-3.5 text-kendits-turquoise"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span>Interactive 3D view • Drag to rotate</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
