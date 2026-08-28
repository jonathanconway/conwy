import { MdxContainer, PageLayout, ProjectsList } from "@/components";
import { projectsFragment, site } from "@/content";
import * as projects from "@/content/projects";
import { getProjectMetas } from "@/framework/client";

export default function Projects() {
  const projectMetas = getProjectMetas(projects);

  return (
    <PageLayout
      selectedNavPath="/projects"
      main={
        <>
          <MdxContainer>{projectsFragment.content}</MdxContainer>

          <ProjectsList projectMetas={projectMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - projects`,
};
