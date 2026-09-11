import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { Container } from "@/components/v2/ui/Container";
import { ContactHero } from "@/components/v2/contact/ContactHero";
import { ContactForm } from "@/components/v2/contact/ContactForm";
import { ContactDirectInfo } from "@/components/v2/contact/ContactDirectInfo";
import { GlobalReachGlobe } from "@/components/v2/contact/GlobalReachGlobe";

export const metadata: Metadata = {
  title: "Contact | Kendits Creative Studios",
  description:
    "Initiate collaboration with Kendits Creative Studios. High-end media production, brand direction, and cinematic visual storytelling based in Accra, Ghana and working worldwide.",
  openGraph: {
    title: "Contact | Kendits Creative Studios",
    description:
      "Start a conversation with Kendits Creative Studios. Premium media production and visual direction.",
    url: "https://www.kenditscreativestudios.com/contact",
    siteName: "Kendits Creative Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Kendits Creative Studios",
    description:
      "Start a conversation with Kendits Creative Studios. Premium media production and visual direction.",
  },
};

export default function ContactPage() {
  return (
    <PageShell atmosphereVariant="subtle">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Form & Direct Studio Channels Section */}
      <section className="py-16 md:py-24 relative">
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Project Enquiry Form (7 columns on desktop) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Information & Studio Channels (5 columns on desktop) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ContactDirectInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Global Reach Section featuring the isolated 3D Globe */}
      <GlobalReachGlobe />
    </PageShell>
  );
}
