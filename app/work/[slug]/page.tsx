import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { CaseStudyPage } from "@/components/v2/work/CaseStudyPage";
import { getProjectBySlug, portfolioProjects } from "@/data/projects";

// Next.js 15+: params is a Promise in App Router
type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all known projects at build time
export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

// Project-specific metadata — verified data only, nothing fabricated
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const description = project.overview ?? project.shortDescription;

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} | Kendits Creative Studios`,
      description,
      url: `https://www.kenditscreativestudios.com/work/${project.slug}`,
      images: [
        {
          url: `https://www.kenditscreativestudios.com${project.thumbnail}`,
          alt: `${project.title} — ${project.category} by Kendits Creative Studios`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Unknown slug — return 404
  if (!project) {
    notFound();
  }

  // TypeScript narrows correctly after notFound() since it throws
  // but we assert here for clarity with the client component prop
  return (
    <PageShell atmosphereVariant="subtle">
      <CaseStudyPage project={project} />
    </PageShell>
  );
}
