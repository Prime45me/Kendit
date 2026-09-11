"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { KenditsService } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceRowProps {
  service: KenditsService;
  isOpen: boolean;
  onToggle: () => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ service, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  const controlId = `service-content-${service.index}`;
  const headerId = `service-header-${service.index}`;

  return (
    <div className="group border-b border-white/10 last:border-b-0">
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={controlId}
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between py-6 md:py-8 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise",
          isOpen ? "text-white" : "text-text-secondary hover:text-white"
        )}
      >
        <div className="flex items-baseline gap-6 md:gap-12">
          <span className="text-xs md:text-sm font-mono tracking-widest text-kendits-turquoise/80">
            {service.index}
          </span>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-light uppercase tracking-[0.08em]">
            {service.title}
          </h3>
        </div>
        
        {/* Directional Indicator */}
        <div 
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-500",
            isOpen ? "bg-white/10 rotate-90" : "bg-transparent group-hover:bg-white/5"
          )}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            className="transition-colors duration-300"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={controlId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="pb-8 md:pb-12 pt-4 flex flex-col md:flex-row gap-8 lg:gap-16">
              
              {/* Media Section (Mounted only when open due to AnimatePresence conditional rendering) */}
              <div className="w-full md:w-1/2 aspect-video bg-[#0a0a0a] overflow-hidden">
                {service.media.type === "video" ? (
                  <video
                    ref={videoRef}
                    src={service.media.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                  />
                ) : (
                  <img
                    src={service.media.src}
                    alt={service.media.alt || ""}
                    className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-lg md:text-xl font-light text-white leading-relaxed mb-8">
                  {service.outcome}
                </p>
                
                <div className="mb-10">
                  <h4 className="text-xs font-mono tracking-widest text-text-secondary uppercase mb-4">
                    Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-text-primary">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-kendits-turquoise/50 mt-2 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.workHref && (
                  <div>
                    <Link
                      href={service.workHref}
                      className="group/cta inline-flex items-center gap-3 text-sm font-mono tracking-[0.15em] uppercase text-kendits-turquoise hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise rounded-sm"
                    >
                      {service.workLabel}
                      <span className="relative overflow-hidden flex w-4 h-4">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover/cta:translate-x-full group-hover/cta:-translate-y-full">
                          ↗
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full translate-y-full group-hover/cta:translate-x-0 group-hover/cta:translate-y-0">
                          ↗
                        </span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
