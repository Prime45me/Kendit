"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { Container } from "./ui/Container";
import TermsModal from "./ui/TermsModal";

export const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/kendits_studio" },
    { label: "TikTok", href: "https://www.tiktok.com/@kendits.studio" },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.07] bg-canvas-subtle py-6 sm:py-8">
      <Container width="wide">
        <div className="border border-white/10 bg-white/[0.01] p-5 sm:p-8 lg:p-10">
        {/* Opening invitation */}
        <div className="grid gap-7 pb-8 sm:pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
          <div className="max-w-3xl">
            <p className="eyebrow-tag mb-4 inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-kendits-turquoise" />
              Have a project in mind?
            </p>
            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.94] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Let&apos;s build something
              <span className="mt-2 block text-gradient-kendits">unforgettable.</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/55 md:text-lg">
              Bring us the idea. We&apos;ll help shape it into a film, identity or visual story people remember.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 border-l border-kendits-turquoise/30 pl-5 lg:mb-1 lg:pl-7">
            <NextLink
              href="/contact"
              className="group inline-flex h-12 items-center gap-4 border border-white/25 bg-transparent px-5 text-xs font-bold uppercase tracking-[0.16em] text-text-primary transition-colors hover:border-kendits-turquoise hover:text-kendits-turquoise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
            >
              <span>Start a Project</span>
              <span aria-hidden="true" className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </NextLink>
            <div className="mt-2 w-full max-w-sm border border-white/15 bg-white/[0.02] p-4 sm:p-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Let&apos;s talk about it</p>
              <div className="space-y-3">
                <a
                  href="tel:+233246601022"
                  className="group/contact flex items-center gap-3 text-sm font-semibold text-text-primary transition-colors hover:text-kendits-turquoise sm:text-base"
                >
                  <svg className="h-4 w-4 shrink-0 text-kendits-turquoise" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  <span>+233 24 660 1022</span>
                  <span aria-hidden="true" className="ml-auto text-white/30 transition-transform group-hover/contact:translate-x-1">↗</span>
                </a>
                <a
                  href="mailto:opokuacheampongkenneth360@gmail.com"
                  className="group/contact flex items-center gap-3 text-xs text-text-secondary transition-colors hover:text-kendits-turquoise"
                >
                  <svg className="h-4 w-4 shrink-0 text-kendits-turquoise" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <span className="break-all">opokuacheampongkenneth360@gmail.com</span>
                  <span aria-hidden="true" className="ml-auto shrink-0 text-white/30 transition-transform group-hover/contact:translate-x-1">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" aria-hidden="true" />

        {/* Editorial information */}
        <div className="grid grid-cols-1 gap-8 py-7 text-sm sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-8">
          <div className="lg:col-span-6">
            <p className="text-xl font-black uppercase tracking-[-0.04em] text-text-primary">
              KENDITS<span className="text-gradient-kendits">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Creative studio for film, visual direction, branding and visual storytelling.
            </p>
            <p className="mt-5 text-xs font-mono uppercase tracking-[0.2em] text-white/40">Accra, Ghana</p>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-text-primary">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NextLink
                    href={link.href}
                    className="group inline-flex w-fit items-center text-text-secondary transition-colors hover:text-kendits-turquoise"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true" className="ml-0 w-0 overflow-hidden text-kendits-turquoise transition-all duration-200 group-hover:ml-2 group-hover:w-3">→</span>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-text-primary">
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 text-text-secondary transition-colors hover:text-kendits-turquoise"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Closing wordmark */}
        <div className="border-t border-white/10 pt-5 sm:pt-6">
          <p className="select-none text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.8] tracking-[-0.07em] text-white/[0.16]">
            KENDITS<span className="text-kendits-turquoise/60">.</span>
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.14em] text-text-muted sm:flex-row sm:items-center">
          <p>Kendits Creative Studios</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© {new Date().getFullYear()}</span>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-text-primary transition-colors cursor-pointer underline underline-offset-4 decoration-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        </div>
      </Container>

      {/* Ghanaian Law Terms Modal (Reused from Phase 1 Audit) */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
};
