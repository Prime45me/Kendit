import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/v2/PageShell";
import { Container } from "@/components/v2/ui/Container";
import { ServicesList } from "@/components/v2/services/ServicesList";

export const metadata: Metadata = {
  title: "Services | Kendits Creative Studios",
  description:
    "What we create. Cinematic visual storytelling, brand identities, and dynamic post-production.",
};

export default function ServicesPage() {
  return (
    <PageShell atmosphereVariant="subtle">
      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <Container width="contained">
          {/* Services Intro */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tighter text-white mb-6">
              Our Capabilities
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl leading-relaxed">
              We translate brand vision into cinematic reality. From complete campaign direction to high-end post-production, our capabilities are built to deliver uncompromising quality across platforms.
            </p>
          </div>

          {/* Editorial Service List */}
          <ServicesList />

          {/* Project CTA (Link to future Contact phase) */}
          <div className="mt-32 border-t border-white/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-white mb-3">
                Have a project in mind?
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Let's discuss how we can bring your vision to life.
              </p>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 px-8 py-4 text-sm font-mono tracking-[0.15em] uppercase text-white transition-all duration-500 hover:border-kendits-turquoise hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
            >
              <span
                className="absolute inset-0 -z-10 translate-y-[101%] bg-kendits-turquoise transition-transform duration-500 ease-[0.32,0.72,0,1] group-hover:translate-y-0"
                aria-hidden="true"
              />
              Start a Conversation
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
