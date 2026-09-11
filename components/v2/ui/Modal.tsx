"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalOverlayVariants, modalDialogVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = "lg",
  className,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Keyboard Escape listener and focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    // Save previous active element to restore focus on close
    const previousActiveElement = document.activeElement as HTMLElement | null;

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll cleanly
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousActiveElement && typeof previousActiveElement.focus === "function") {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose]);

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-3xl",
    "2xl": "max-w-5xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby={title ? "modal-title" : undefined}>
          {/* Backdrop */}
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-canvas/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Window */}
          <motion.div
            ref={dialogRef}
            variants={modalDialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "relative w-full z-10 overflow-hidden rounded-2xl md:rounded-3xl border border-white/15",
              "bg-canvas-elevated p-6 sm:p-8 md:p-10 shadow-surface",
              maxWidthClasses[maxWidth],
              className
            )}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal dialog"
              className="absolute top-5 right-5 p-2 text-text-secondary hover:text-text-primary rounded-full hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-kendits-turquoise focus-visible:outline-none"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            {(title || description) && (
              <div className="mb-6 pr-8">
                {title && (
                  <h3 id="modal-title" className="text-xl md:text-2xl font-bold tracking-tight text-text-primary">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="mt-2 text-sm text-text-secondary">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Body */}
            <div className="max-h-[75vh] overflow-y-auto pr-1 text-text-secondary leading-relaxed">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
