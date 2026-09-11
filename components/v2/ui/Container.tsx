import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "contained" | "wide" | "full";
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  width = "contained",
  as: Component = "div",
  ...props
}) => {
  const widthClasses = {
    contained: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    wide: "max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8",
    full: "w-full px-0",
  };

  return (
    <Component
      className={cn("w-full transition-all duration-200", widthClasses[width], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
