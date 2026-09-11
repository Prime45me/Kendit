import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { SignatureHero } from "@/components/v2/hero/SignatureHero";
import { StudioStatement } from "@/components/v2/home/StudioStatement";
import { TheGoodStuff } from "@/components/v2/sections/TheGoodStuff";
import { ClientsProof } from "@/components/v2/home/ClientsProof";
import { ServicesTeaser } from "@/components/v2/home/ServicesTeaser";
import { StudioTeaser } from "@/components/v2/home/StudioTeaser";
import { HomeCTA } from "@/components/v2/home/HomeCTA";

export const metadata: Metadata = {
  title: "Kendits Creative Studios | Cinematic Visual Production & Direction",
  description:
    "A cinematic creative studio directing commercial films, live performances, music videos, and visual identities that define brand presence.",
};

export default function Home() {
  return (
    <PageShell atmosphereVariant="subtle" noPaddingTop>
      {/* 1. Signature Homepage Hero: KENDITS Mask -> Continuous Video Reveal -> Fullscreen Immersion */}
      <SignatureHero
        videoSrc="/trialvideo.mp4"
        posterSrc="/cinematic_lens.png"
      />

      {/* 2. Studio Statement & Manifesto: Defining Presence & Perception */}
      <StudioStatement />

      {/* 3. Selected Work Preview: The Good Stuff (4 Phase 4 Productions) */}
      <TheGoodStuff />

      {/* 4. Proof & Credibility: Restrained Verified Client Collaborations */}
      <ClientsProof />

      {/* 5. Capabilities Teaser: What We Create -> /services */}
      <ServicesTeaser />

      {/* 6. The Studio Teaser: Who We Are & Craft Philosophy -> /studio */}
      <StudioTeaser />

      {/* 7. Closing Invitation: Let's Create -> /contact */}
      <HomeCTA />
    </PageShell>
  );
}
