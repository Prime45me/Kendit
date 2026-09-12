"use client";

import React, { useEffect } from "react";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuVariants, menuItemVariants } from "@/lib/motion";
import { Button } from "./ui/Button";

export interface NavItem {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  ctaHref?: string;
  ctaText?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  ctaHref = "/contact",
  ctaText = "Start a Project",
}) => {
  // Lock body scroll cleanly and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-canvas/95 backdrop-blur-2xl px-6 py-8 sm:px-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header Bar inside Drawer */}
          <div className="flex items-center justify-between w-full pb-6 border-b border-white/10">
            <NextLink
              href="/"
              onClick={onClose}
              className="text-xl font-black tracking-tighter uppercase text-text-primary"
            >
              KENDITS<span className="text-kendits-turquoise">.</span>
            </NextLink>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2.5 rounded-full border border-white/15 bg-white/[0.05] text-text-primary hover:text-kendits-turquoise hover:border-kendits-turquoise transition-colors focus-visible:ring-2 focus-visible:ring-kendits-turquoise focus-visible:outline-none"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-10">
            <ul className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.li key={item.label} variants={menuItemVariants}>
                  <NextLink
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-kendits-turquoise opacity-0 group-hover:opacity-100 transition-opacity">
                      0{idx + 1} →
                    </span>
                  </NextLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom Action & Contact Info */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
            <NextLink href={ctaHref} onClick={onClose}>
              <Button variant="gradient" size="lg" className="w-full">
                {ctaText}
              </Button>
            </NextLink>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-text-muted">
              <p>Accra &amp; Koforidua, Ghana • Worldwide Production</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/kendits_studio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-kendits-turquoise transition-colors"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href="https://www.tiktok.com/@kendits.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-kendits-turquoise transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
