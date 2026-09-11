/**
 * Kendits Creative Studios — V2 Motion System
 * 
 * Reusable motion constants, cubic beziers, and Framer Motion animation variants.
 * Strictly respects `prefers-reduced-motion` to maintain accessibility compliance.
 */

import { Variants } from "framer-motion";
import { tokens } from "./tokens";

export const motionTokens = tokens.motion;

// Default Studio Transition
export const transitionDefault = {
  duration: motionTokens.duration.normal,
  ease: motionTokens.ease.default,
};

// Cinematic Timeline Transition
export const transitionCinematic = {
  duration: motionTokens.duration.cinematic,
  ease: motionTokens.ease.default,
};

// UI Micro-interaction Transition
export const transitionFast = {
  duration: motionTokens.duration.fast,
  ease: motionTokens.ease.snappy,
};

/**
 * Standard Fade In Variant
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionDefault,
  },
};

/**
 * Fade Up Scroll Reveal Variant
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionDefault,
  },
};

/**
 * Stagger Container for list items and grid cards
 */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Mobile Navigation Drawer Variants
 */
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.35,
      ease: motionTokens.ease.inOut,
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.45,
      ease: motionTokens.ease.default,
    },
  },
};

/**
 * Mobile Nav Menu Item Stagger
 */
export const menuItemVariants: Variants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: motionTokens.ease.default,
    },
  },
};

/**
 * Accessible Modal Overlay & Container Variants
 */
export const modalOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalDialogVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: motionTokens.ease.default,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 12,
    transition: {
      duration: 0.2,
      ease: motionTokens.ease.out,
    },
  },
};
