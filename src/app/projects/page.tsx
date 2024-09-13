import { Fragment, PageLayout, ProjectsList } from "@/components";
import { site } from "@/content";
import { Projects as Projects_ } from "@/content/fragments";
import * as projects from "@/content/projects";
import { getProjectMetas } from "@/framework";

export default function Projects() {
  const projectMetas = getProjectMetas(projects);

  return (
    <PageLayout
      selectedNavPath="/projects"
      main={
        <>
          <Fragment>
            <Projects_ />
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
