import React from "react";
import { Navbar, NavbarProps } from "./Navbar";
import { Footer } from "./Footer";
import { BackgroundAtmosphere, BackgroundAtmosphereProps } from "./ui/BackgroundAtmosphere";
import { cn } from "@/lib/utils";

export interface PageShellProps {
  children: React.ReactNode;
  navbarProps?: NavbarProps;
  atmosphereVariant?: BackgroundAtmosphereProps["variant"];
  className?: string;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  noPaddingTop?: boolean;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  navbarProps,
  atmosphereVariant = "subtle",
  className,
  hideNavbar = false,
  hideFooter = false,
  noPaddingTop = false,
}) => {
  return (
    <BackgroundAtmosphere variant={atmosphereVariant} className={cn("min-h-screen flex flex-col justify-between", className)}>
      {!hideNavbar && <Navbar {...navbarProps} />}
      <main className={cn("flex-1 w-full", !noPaddingTop && "pt-20")}>{children}</main>
      {!hideFooter && <Footer />}
    </BackgroundAtmosphere>
  );
};
