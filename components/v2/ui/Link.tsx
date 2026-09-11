import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  showArrow?: boolean;
  arrowPosition?: "right" | "topRight";
  variant?: "default" | "editorial" | "muted" | "accent";
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  showArrow = true,
  arrowPosition = "right",
  variant = "editorial",
  target,
  rel,
  ...props
}) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const resolvedTarget = target || (isExternal ? "_blank" : undefined);
  const resolvedRel = rel || (isExternal ? "noreferrer noopener" : undefined);

  const variantClasses = {
    default: "text-text-primary hover:text-kendits-turquoise",
    editorial: "text-text-primary font-medium tracking-wider uppercase text-sm group hover:text-kendits-turquoise",
    muted: "text-text-secondary hover:text-text-primary text-sm group",
    accent: "text-kendits-turquoise font-semibold tracking-wider uppercase text-sm group hover:text-white",
  };

  const arrowIcon = arrowPosition === "right" ? (
    <svg
      className="inline-block w-4 h-4 ml-1.5 transition-transform duration-200 ease-out group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ) : (
    <svg
      className="inline-block w-3.5 h-3.5 ml-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );

  const content = (
    <>
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-kendits-turquoise transition-all duration-200 group-hover:w-full" />
      </span>
      {showArrow && arrowIcon}
    </>
  );

  return (
    <NextLink
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      className={cn(
        "inline-flex items-center transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {content}
    </NextLink>
  );
};
