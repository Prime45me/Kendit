import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const isVercelPreview = Boolean(
  process.env.VERCEL_URL?.includes(".vercel.app") || process.env.VERCEL_ENV === "preview"
);

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kenditscreativestudios.com"),
  title: {
    default: "Kendits Creative Studios",
    template: "%s | Kendits Creative Studios",
  },
  description: "Official website for Kendits Creative Studios.",
  robots: isVercelPreview
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
  openGraph: {
    title: "Kendits Creative Studios",
    description: "Official website for Kendits Creative Studios.",
    url: "https://www.kenditscreativestudios.com",
    siteName: "Kendits Creative Studios",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
