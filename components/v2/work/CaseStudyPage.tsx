"use client";

import React from "react";
import { KenditsProject, getAdjacentProjects } from "@/data/projects";
import {
  ProjectHero,
  ProjectMeta,
  ProjectOverview,
  ProjectVideo,
  ProjectExternalLink,
  ProjectApproachBlock,
  ProjectGallery,
  ProjectCredits,
  NextProject,
} from "./CaseStudyComponents";

interface CaseStudyPageProps {
  project: KenditsProject;
}

/**
 * CaseStudyPage — /work/[slug]
 *
 * Assembles the case study from available verified data.
 * Every section renders conditionally — nothing is forced.
 *
 * Flow (adapt based on content):
 *   ProjectHero
 *   ProjectMeta
 *   ProjectOverview  (overview + services)
 *   ProjectVideo | ProjectExternalLink  (media — full video preferred)
 *   ProjectApproachBlock  (challenge / approach / result)
 *   ProjectGallery  (only if gallery images exist)
 *   ProjectCredits  (only if credits are set)
 *   NextProject  (prev/next navigation)
 */
export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ project }) => {
  const { prev, next } = getAdjacentProjects(project.slug);
  const hasFullVideo = !!project.fullVideo;
  const hasGallery = (project.gallery?.length ?? 0) > 0;
  const hasApproachContent =
    project.challenge || project.approach || project.result;

  return (
    <article aria-label={`${project.title} case study`}>

      {/* 1. Hero — large cinematic header with thumbnail/heroImage */}
      <ProjectHero project={project} />

      {/* 2. Meta strip — client, category, year, role */}
      <ProjectMeta project={project} />

      {/* 3. Overview — context paragraph + services tags */}
      {(project.overview || (project.services?.length ?? 0) > 0) && (
        <ProjectOverview project={project} />
      )}

      {/* 4. Media — full local video if available, external link fallback */}
      <div className="py-8 lg:py-16">
        {hasFullVideo ? (
          <ProjectVideo
            src={project.fullVideo!}
            poster={project.heroImage ?? project.thumbnail}
            title={project.title}
          />
        ) : (
          <ProjectExternalLink
            href={project.externalLink}
            title={project.title}
            thumbnail={project.thumbnail}
          />
        )}
      </div>

      {/* 5. Challenge / Approach / Result — only when content exists */}
      {hasApproachContent && <ProjectApproachBlock project={project} />}

      {/* 6. Gallery — only when verified images are available */}
      {hasGallery && (
        <ProjectGallery images={project.gallery!} title={project.title} />
      )}

      {/* 7. Credits */}
      {project.credits && <ProjectCredits credits={project.credits} />}

      {/* 8. Navigation — prev / next / back to Work */}
      <NextProject prev={prev} next={next} />
    </article>
  );
};
