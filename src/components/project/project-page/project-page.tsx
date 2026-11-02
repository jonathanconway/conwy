import { projectsRoute } from "@/app/routes";
import { Project } from "@/framework";

import { EngagementPageLayout } from "../../engagement";
import { NavItems } from "../../header";
import { Page } from "../../page";
import { ProjectTechs } from "../project-techs";

import { ProjectPageHeader } from "./project-page-header";
import { ProjectPageImageCascade } from "./project-page-image-cascade";
import { ProjectPageLinks } from "./project-page-links";
import { ProjectPagePlatforms } from "./project-page-platforms";
import { ProjectPageSummary } from "./project-page-summary";

interface ProjectPageProps {
  readonly project: Project;
  readonly projects: readonly Project[];
}

export function ProjectPage(props: ProjectPageProps) {
  const { project, projects } = props;

  return (
    <Page
      selectedNavItem={NavItems.Projects}
      title={<ProjectPageHeader projects={projects} project={project} />}
      breadcrumbSegments={[projectsRoute, { title: projectsRoute.title }]}
    >
      <EngagementPageLayout
        summarySlot={<ProjectPageSummary project={project} />}
        asideFirstLeftSlot={<ProjectTechs project={project} />}
        asideFirstRightSlot={
          <>
            <ProjectPageLinks project={project} />

            <ProjectPagePlatforms project={project} />
          </>
        }
        asideImagesSlot={<ProjectPageImageCascade project={project} />}
      />
    </Page>
  );
}
