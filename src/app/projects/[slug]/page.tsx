import { Metadata } from "next";

import { PageLayout } from "@/components";
import { Project } from "@/components/project";
import { site } from "@/content";
import * as projects from "@/content/projects";
import { Project as Project_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const project = importContentBySlug<Project_>(
    projects,
    "project",
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
  const allProjectMetas = Object.values(projects).map((item) => item.meta);
  return allProjectMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const project = importContentBySlug<Project_>(
    projects,
    "project",
    params.slug,
  );

  const projectTitle = project.meta.title;
  const title = `${site.title} - project - ${projectTitle.toLowerCase()}`;

  return {
    title,
  };
}
