import { Fragment, PageLayout, ProjectsList } from "@/components";
import { site } from "@/content";
import { projectsFragment } from "@/content/fragments";
import * as projects from "@/content/projects";
import { getProjectMetas } from "@/framework/client";

export default function Projects() {
  const projectMetas = getProjectMetas(projects);

  return (
    <PageLayout
      selectedNavPath="/projects"
      main={
        <>
          <Fragment>
            <projectsFragment.content />
          </Fragment>

          <ProjectsList projectMetas={projectMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - projects`,
};
