import { Metadata } from "next";

import { PageLayout, Project } from "@/components";
import { site } from "@/content";
import * as projects from "@/content/projects";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const project = findImportedContent(
    projects,
    ContentTypes.Project,
    params.slug,
  );

  return (
    <PageLayout
      selectedNavPath="/project"
      main={<Project project={project} />}
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(projects).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const project = findImportedContent(
    projects,
    ContentTypes.Project,
    params.slug,
  );

  const projectTitle = project.meta.title;
  const title = `${site.title} - project - ${projectTitle.toLowerCase()}`;

  return {
    title,
  };
}
