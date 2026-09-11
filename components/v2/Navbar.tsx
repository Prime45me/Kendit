"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MobileMenu, NavItem } from "./MobileMenu";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  navItems?: NavItem[];
  ctaHref?: string;
  ctaText?: string;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC<NavbarProps> = ({
  navItems = defaultNavItems,
  ctaHref = "/contact",
  ctaText = "Start a Project",
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-canvas/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-surface"
            : "bg-transparent py-5 md:py-6",
          className
        )}
      >
        <Container width="wide" className="flex items-center justify-between">
          {/* Brand Wordmark (Temporary editorial treatment until official vector SVG is supplied) */}
          <NextLink
            href="/"
            aria-label="Kendits Creative Studios Homepage"
            className="group flex items-center gap-1 text-xl md:text-2xl font-black tracking-tighter uppercase text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise rounded-sm"
          >
            <span>KENDITS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-kendits-turquoise group-hover:scale-125 transition-transform" />
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NextLink
                    href={item.href}
                    className="relative text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary hover:text-text-primary transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise rounded-sm group"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-kendits-turquoise transition-all duration-200 group-hover:w-full" />
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <NextLink href={ctaHref} className="hidden sm:inline-flex">
              <Button variant="primary" size="sm">
                {ctaText}
              </Button>
            </NextLink>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2.5 rounded-full border border-white/15 bg-white/[0.05] text-text-primary hover:border-kendits-turquoise transition-colors focus-visible:ring-2 focus-visible:ring-kendits-turquoise focus-visible:outline-none"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="9" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        ctaHref={ctaHref}
        ctaText={ctaText}
      />
    </>
  );
};
