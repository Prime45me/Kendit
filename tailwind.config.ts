import type { Config } from "tailwindcss";


const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // V2 Obsidian Canvas & Surfaces (#050505, #0B0D0F, #1A1C1E)
        canvas: {
          DEFAULT: "#050505",
          subtle: "#0B0D0F",
          elevated: "#1A1C1E",
          hover: "#22252A",
          navy: "#070A14",
          "blue-black": "#04060A",
          charcoal: "#121418",
        },
        surface: {
          DEFAULT: "#0B0D0F",
          elevated: "#1A1C1E",
          hover: "#22252A",
        },
        // V2 Signature Luminous Accents (Treated as Light Sources)
        "kendits-cyan": {
          DEFAULT: "#00EEDC",
          deep: "#0E424A",
          glow: "rgba(0, 238, 220, 0.25)",
        },
        "kendits-purple": {
          DEFAULT: "#7D1589",
          deep: "#3A1054",
          glow: "rgba(125, 21, 137, 0.25)",
        },
        "kendits-turquoise": "#00EEDC",
        "kendits-green": "#10B981",
        "kendits-blue": "#3B82F6",
        // Pure White Typography Contrast
        "text-primary": "#FFFFFF",
        "text-secondary": "rgba(255, 255, 255, 0.70)",
        "text-muted": "rgba(255, 255, 255, 0.45)",
        // Legacy template colors (preserved for backward compatibility)
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "0 0 40px -10px rgba(0, 238, 220, 0.35)",
        "glow-cyan-intense": "0 0 60px -5px rgba(0, 238, 220, 0.5)",
        "glow-purple": "0 0 40px -10px rgba(125, 21, 137, 0.35)",
        "glow-green": "0 0 40px -10px rgba(16, 185, 129, 0.35)",
      },
      backgroundImage: {
        "kendits-gradient": "linear-gradient(135deg, #00EEDC 0%, #38BDF8 50%, #A855F7 100%)",
        "kendits-gradient-subtle": "linear-gradient(135deg, rgba(0, 238, 220, 0.15) 0%, rgba(56, 189, 248, 0.15) 50%, rgba(168, 85, 247, 0.15) 100%)",
        "kendits-radial-cyan": "radial-gradient(circle, rgba(0, 238, 220, 0.15) 0%, transparent 70%)",
        "kendits-radial-purple": "radial-gradient(circle, rgba(125, 21, 137, 0.15) 0%, transparent 70%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
