"use client";

import React, { useState } from "react";
import TermsModal from "@/components/v2/ui/TermsModal";
import { Button } from "../ui/Button";

export const ContactDirectInfo: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <div className="flex flex-col gap-6">
      {/* Studio Direct Channels Card */}
      <div className="rounded-2xl border border-white/10 bg-canvas-elevated/40 backdrop-blur-xl p-6 sm:p-8 shadow-surface">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise mb-6">
          Direct Channels
        </h3>

        <div className="space-y-6">
          {/* Email */}
          <div className="border-b border-white/5 pb-5">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
              Electronic Mail
            </p>
            <a
              href="mailto:kenditscreativestudios@gmail.com"
              className="text-base sm:text-lg font-medium text-text-primary hover:text-kendits-turquoise transition-colors break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded"
            >
              kenditscreativestudios@gmail.com
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="border-b border-white/5 pb-5">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
              Direct Production Lines
            </p>
            <div className="flex flex-col gap-1.5 mt-1">
              <a
                href="tel:+233246601022"
                className="text-base font-medium text-text-primary hover:text-kendits-turquoise transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded"
              >
                +233 (0) 24 660 1022 <span className="text-xs text-text-muted font-normal">(Primary)</span>
              </a>
              <a
                href="tel:+233505633152"
                className="text-base font-medium text-text-secondary hover:text-kendits-turquoise transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded"
              >
                +233 (0) 50 563 3152 <span className="text-xs text-text-muted font-normal">(Studio Alt)</span>
              </a>
            </div>
          </div>

          {/* Studio Headquarters */}
          <div className="border-b border-white/5 pb-5">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
              Studio Operations
            </p>
            <p className="text-base text-text-primary font-medium">
              Accra &amp; Koforidua, Ghana
            </p>
            <p className="text-xs text-text-secondary mt-0.5">
              Available for travel & worldwide remote productions.
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
              Operating Hours
            </p>
            <p className="text-sm text-text-secondary">
              Monday – Saturday: 09:00 – 19:00 GMT
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              Urgent production requests accepted 24/7.
            </p>
          </div>
        </div>

        {/* Optional Verified Booking CTA (if configured in environment) */}
        {bookingUrl && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
              Direct Schedule
            </p>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="block">
              <Button variant="primary" size="md" className="w-full">
                Book a Video Call →
              </Button>
            </a>
          </div>
        )}
      </div>

      {/* Social Presence & Compliance Card */}
      <div className="rounded-2xl border border-white/10 bg-canvas-elevated/40 backdrop-blur-xl p-6 sm:p-8 shadow-surface">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise mb-4">
          Connect Online
        </h3>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/kendits_studio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-wider text-text-secondary hover:text-white hover:border-kendits-turquoise transition-colors"
          >
            <span>Instagram</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@kendits.studio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-wider text-text-secondary hover:text-white hover:border-kendits-turquoise transition-colors"
          >
            <span>TikTok</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
          <span>Legal Framework</span>
          <button
            onClick={() => setIsTermsOpen(true)}
            className="hover:text-kendits-turquoise underline underline-offset-4 decoration-white/20 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded"
          >
            Terms & Conditions (Ghana)
          </button>
        </div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};
