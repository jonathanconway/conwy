import { Metadata } from "next";

import { ProjectPage as ProjectPage_ } from "@/components";
import { site } from "@/content";
import * as projectsMap from "@/content/projects";
import { ContentTypes, NextPageProps } from "@/framework";
import { findImportedContent } from "@/framework/server";

export default async function ProjectsProjectPage(props: NextPageProps) {
  const params = await props.params;

  const projects = Object.values(projectsMap);

  const project = findImportedContent(
    projectsMap,
    ContentTypes.Project,
    params.slug,
  );

  return <ProjectPage_ projects={projects} project={project} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(projectsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const project = findImportedContent(
    projectsMap,
    ContentTypes.Project,
    params.slug,
  );
  const projectTitle = project.meta.title.toLowerCase();

  const title = `${site.title} - project - ${projectTitle}`;

  return {
    title,
  };
}
