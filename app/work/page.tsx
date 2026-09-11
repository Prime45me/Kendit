import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { WorkArchive } from "@/components/v2/work/WorkArchive";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected productions from Kendits Creative Studios — live performance, short film, music video, and event recap work.",
  openGraph: {
    title: "Work | Kendits Creative Studios",
    description:
      "Selected productions from Kendits Creative Studios — live performance, short film, music video, and event recap work.",
    url: "https://www.kenditscreativestudios.com/work",
  },
};

export default function WorkPage() {
  return (
    <PageShell atmosphereVariant="subtle">
      <WorkArchive />
    </PageShell>
  );
}
