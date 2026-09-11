import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { StudioHero } from "@/components/v2/studio/StudioHero";
import { BrandStory } from "@/components/v2/studio/BrandStory";
import { StudioPhilosophy } from "@/components/v2/studio/StudioPhilosophy";
import { StudioValues } from "@/components/v2/studio/StudioValues";
import { CreativeApproach } from "@/components/v2/studio/CreativeApproach";
import { BehindTheWork } from "@/components/v2/studio/BehindTheWork";
import { StudioCTA } from "@/components/v2/studio/StudioCTA";

export const metadata: Metadata = {
  title: "Studio | Kendits Creative Studios",
  description:
    "Who we are. A premium media production and visual direction studio building cinematic narratives that define presence and shape emotion.",
};

export default function StudioPage() {
  return (
    <PageShell atmosphereVariant="strong">
      {/* 1. WHO WE ARE */}
      <StudioHero />

      {/* 2. OUR STORY */}
      <BrandStory />

      {/* 3. HOW WE THINK */}
      <StudioPhilosophy />

      {/* 4. WHAT WE BELIEVE */}
      <StudioValues />

      {/* 5. HOW WE WORK */}
      <CreativeApproach />

      {/* 6. BEHIND THE WORK */}
      <BehindTheWork />

      {/* 7. LET'S CREATE */}
      <StudioCTA />
    </PageShell>
  );
}
