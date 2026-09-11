"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-9 px-4 text-xs tracking-wider gap-2",
      md: "h-11 px-6 text-sm tracking-wider gap-2.5",
      lg: "h-13 px-8 text-sm md:text-base tracking-wider gap-3 font-semibold",
    };

    const variantClasses = {
      // Kendits Signature: Dark glass with interactive green-turquoise-blue gradient border & hover glow
      primary: `
        relative bg-canvas-elevated text-text-primary border border-white/15 
        hover:border-kendits-turquoise/60 hover:shadow-glow-cyan hover:bg-canvas-hover
        active:scale-[0.98]
      `,
      // Secondary: Understated obsidian card surface
      secondary: `
        bg-white/[0.05] text-text-primary border border-white/10
        hover:bg-white/[0.1] hover:border-white/20
        active:scale-[0.98]
      `,
      // Outline: High-contrast wireframe
      outline: `
        bg-transparent text-text-primary border border-white/20
        hover:border-kendits-turquoise hover:text-kendits-turquoise
        active:scale-[0.98]
      `,
      // Ghost: Minimalist text button with hover highlight
      ghost: `
        bg-transparent text-text-secondary
        hover:text-text-primary hover:bg-white/[0.06]
        active:scale-[0.98]
      `,
      // Gradient: Full-spectrum primary action CTA
      gradient: `
        bg-kendits-gradient text-canvas font-bold border-none
        hover:opacity-95 hover:shadow-glow-cyan-intense
        active:scale-[0.98]
      `,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-full uppercase font-medium select-none",
          "transition-all duration-200 ease-out cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
          "disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
