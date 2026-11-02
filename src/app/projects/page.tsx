import { MdxContainer, NavItems, Page, ProjectsList } from "@/components";
import { projectsFragment, site } from "@/content";
import * as projectsMap from "@/content/projects";

import { projectsRoute } from "../routes";

const projects = Object.values(projectsMap);

export default function ProjectsPage() {
  return (
    <Page selectedNavItem={NavItems.Projects} title={projectsRoute.title}>
      <MdxContainer>{projectsFragment.content}</MdxContainer>

      <ProjectsList projects={projects} />
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - projects`,
};
