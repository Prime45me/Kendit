import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "split";
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}) => {
  if (align === "split") {
    return (
      <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16", className)}>
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow-tag mb-3">{eyebrow}</p>}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base md:text-lg text-text-secondary font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    );
  }

  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        isCenter && "mx-auto text-center items-center flex flex-col",
        className
      )}
    >
      {eyebrow && <p className="eyebrow-tag mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg text-text-secondary font-light leading-relaxed",
            isCenter && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
