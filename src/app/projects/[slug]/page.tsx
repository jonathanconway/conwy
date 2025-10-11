import { Metadata } from "next";

import { PageLayout } from "@/components";
import { Project } from "@/components/project";
import { site } from "@/content";
import * as projects from "@/content/projects";
import { Project as Project_ } from "@/framework/client";
import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  const projectModule = await import(`@/content/projects/${params.slug}`);
  const projectModuleItems = Object.values(projectModule);
  const project = projectModuleItems[0] as Project_;
  
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
  const projectModule = await import(`@/content/projects/${params.slug}`);
  const project = Object.values(projectModule)[0] as Project_;
  const title = project.meta.title;

  return {
    title: `${site.title} - project - ${title.toLowerCase()}`,
  };
}
