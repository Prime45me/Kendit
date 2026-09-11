import React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundAtmosphereProps {
  variant?: "none" | "subtle" | "strong";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BackgroundAtmosphere — Kendits V2 Luminous Atmosphere
 *
 * Implements the core visual rule:
 * DARK ENVIRONMENT (#050505) + LUMINOUS LIGHT SOURCES (Teal/Cyan + Purple/Magenta)
 *
 * Light sources live in the darkness as soft ambient blooms rather than flat colored surfaces.
 */
export const BackgroundAtmosphere: React.FC<BackgroundAtmosphereProps> = ({
  variant = "subtle",
  className,
  children,
}) => {
  if (variant === "none") {
    return <div className={cn("relative w-full bg-canvas", className)}>{children}</div>;
  }

  const isStrong = variant === "strong";

  return (
    <div className={cn("relative w-full bg-canvas text-text-primary overflow-hidden", className)}>
      {/* ── Atmospheric Light Living Inside Darkness ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* 1. Primary Luminous Light Source — Teal / Cyan Bloom (Top-Right / Header) */}
        <div
          className={cn(
            "absolute -top-32 -right-32 rounded-full blur-[150px] transition-opacity duration-1000",
            isStrong
              ? "w-[60vw] h-[60vw] opacity-100"
              : "w-[45vw] h-[45vw] opacity-80"
          )}
          style={{
            background:
              "radial-gradient(circle, rgba(0, 238, 220, 0.24) 0%, rgba(14, 66, 74, 0.10) 45%, transparent 70%)",
          }}
        />

        {/* 2. Secondary Luminous Light Source — Purple / Magenta Bloom (Mid-Left / Spatial Depth) */}
        <div
          className={cn(
            "absolute top-[35%] -left-36 rounded-full blur-[170px] transition-opacity duration-1000",
            isStrong
              ? "w-[55vw] h-[55vw] opacity-90"
              : "w-[40vw] h-[40vw] opacity-70"
          )}
          style={{
            background:
              "radial-gradient(circle, rgba(125, 21, 137, 0.22) 0%, rgba(58, 16, 84, 0.09) 50%, transparent 70%)",
          }}
        />

        {/* 3. Deep Navy Atmospheric Ambient Grounding Field (Prevents flat muddy black) */}
        <div
          className="absolute top-[65%] right-[10%] w-[45vw] h-[35vw] rounded-full blur-[180px] opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(7, 10, 20, 0.8) 0%, rgba(11, 17, 30, 0.4) 60%, transparent 80%)",
          }}
        />

        {/* 4. Subtle Bottom Luminous Bloom — Cyan / Sky (Grounds the footer/closing section) */}
        <div
          className={cn(
            "absolute -bottom-48 left-[25%] rounded-full blur-[160px] transition-opacity duration-1000",
            isStrong ? "w-[50vw] h-[50vw] opacity-80" : "w-[35vw] h-[35vw] opacity-60"
          )}
          style={{
            background:
              "radial-gradient(circle, rgba(0, 238, 220, 0.16) 0%, rgba(125, 21, 137, 0.12) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
