/**
 * Kendits Creative Studios — V2 Design Tokens
 * 
 * Central token definitions representing the dark cinematic visual identity:
 * - Obsidian / near-black canvas and surface levels
 * - High-contrast off-white typographic scale
 * - Signature Kendits accent palette: Green (#10B981) -> Turquoise (#06B6D4) -> Blue (#3B82F6)
 * - Motion, radius, spacing, container, and z-index constants
 */

export const tokens = {
  colors: {
    // Canvas & Surfaces
    canvas: {
      default: "#030508", // Deepest obsidian black
      subtle: "#060A12",  // Subtle elevated backdrop
      elevated: "#0B111E",// Card and container surface
      surfaceHover: "#111A2E", // Interactive hover surface
      overlay: "rgba(3, 5, 8, 0.85)", // Glassmorphic overlay
    },
    // Borders
    border: {
      subtle: "rgba(255, 255, 255, 0.08)",
      medium: "rgba(255, 255, 255, 0.16)",
      accent: "rgba(6, 182, 212, 0.35)",
      glow: "rgba(6, 182, 212, 0.15)",
    },
    // Typography
    text: {
      primary: "#F8FAFC",   // 98% off-white for display and headings
      secondary: "#94A3B8", // Slate-400 for body and descriptions
      muted: "#64748B",     // Slate-500 for metadata, captions, timestamps
      inverse: "#030508",   // Obsidian on light badges
    },
    // Brand Accents
    accent: {
      green: "#10B981",     // Emerald green
      turquoise: "#06B6D4", // Core signature cyan/turquoise (#00F2FE vibe)
      blue: "#3B82F6",      // Radiant electric blue
      gradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%)",
      gradientText: "linear-gradient(135deg, #34D399 0%, #22D3EE 50%, #60A5FA 100%)",
      glow: "rgba(6, 182, 212, 0.25)",
    },
    // Functional States
    state: {
      focus: "#06B6D4",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },
  },

  typography: {
    fontFamily: {
      sans: "var(--font-manrope), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: "var(--font-manrope), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    scale: {
      display: {
        fontSize: "clamp(3.5rem, 10vw, 9rem)",
        lineHeight: "0.92",
        letterSpacing: "-0.04em",
        fontWeight: "800",
        textTransform: "uppercase" as const,
      },
      h1: {
        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
        lineHeight: "1.05",
        letterSpacing: "-0.03em",
        fontWeight: "800",
      },
      h2: {
        fontSize: "clamp(2rem, 3.5vw, 3rem)",
        lineHeight: "1.15",
        letterSpacing: "-0.025em",
        fontWeight: "700",
      },
      h3: {
        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
        lineHeight: "1.25",
        letterSpacing: "-0.02em",
        fontWeight: "600",
      },
      h4: {
        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
        lineHeight: "1.35",
        letterSpacing: "-0.015em",
        fontWeight: "600",
      },
      bodyLarge: {
        fontSize: "clamp(1.125rem, 1.25vw, 1.25rem)",
        lineHeight: "1.6",
        letterSpacing: "-0.01em",
        fontWeight: "400",
      },
      body: {
        fontSize: "1rem",
        lineHeight: "1.65",
        letterSpacing: "0",
        fontWeight: "400",
      },
      bodySmall: {
        fontSize: "0.875rem",
        lineHeight: "1.5",
        letterSpacing: "0",
        fontWeight: "400",
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: "1.4",
        letterSpacing: "0.02em",
        fontWeight: "500",
      },
      eyebrow: {
        fontSize: "0.75rem",
        lineHeight: "1",
        letterSpacing: "0.15em",
        fontWeight: "700",
        textTransform: "uppercase" as const,
      },
      navigation: {
        fontSize: "0.875rem",
        lineHeight: "1",
        letterSpacing: "0.08em",
        fontWeight: "600",
        textTransform: "uppercase" as const,
      },
      button: {
        fontSize: "0.875rem",
        lineHeight: "1",
        letterSpacing: "0.06em",
        fontWeight: "600",
        textTransform: "uppercase" as const,
      },
    },
  },

  spacing: {
    section: {
      mobile: "4.5rem",   // py-18 (72px)
      tablet: "6.5rem",   // py-26 (104px)
      desktop: "8.5rem",  // py-34 (136px)
      hero: "11rem",      // py-44 (176px)
    },
    gap: {
      xs: "0.5rem",   // 8px
      sm: "1rem",     // 16px
      md: "1.5rem",   // 24px
      lg: "2rem",     // 32px
      xl: "3rem",     // 48px
      "2xl": "4rem",  // 64px
    },
  },

  containers: {
    contained: "max-w-7xl",    // 1280px default content container
    wide: "max-w-[90rem]",     // 1440px media / portfolio container
    full: "w-full",            // 100% full bleed for cinema / hero
    padding: "px-4 sm:px-6 lg:px-8",
  },

  radius: {
    none: "0px",
    sm: "0.25rem",  // 4px
    md: "0.5rem",   // 8px
    lg: "0.75rem",  // 12px
    xl: "1rem",     // 16px
    "2xl": "1.5rem",// 24px
    pill: "9999px",
  },

  shadows: {
    glow: "0 0 40px -10px rgba(6, 182, 212, 0.3)",
    glowIntense: "0 0 60px -5px rgba(6, 182, 212, 0.45)",
    surface: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
  },

  zIndex: {
    canvas: 0,
    atmosphere: 1,
    content: 10,
    stickyNav: 40,
    drawer: 50,
    modal: 60,
    cursor: 70,
  },

  motion: {
    duration: {
      instant: 0.1,
      fast: 0.2,
      normal: 0.4,
      slow: 0.7,
      cinematic: 1.2,
    },
    ease: {
      default: [0.22, 1, 0.36, 1] as const,     // Premium studio cubic bezier
      out: [0, 0, 0.2, 1] as const,
      inOut: [0.4, 0, 0.2, 1] as const,
      snappy: [0.16, 1, 0.3, 1] as const,
    },
  },
} as const;

export type Tokens = typeof tokens;
