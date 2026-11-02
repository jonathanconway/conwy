import { Project } from "@/framework";

import { EngagementPageHeaderNav } from "../../../../engagement";

interface ProjectPageHeaderNavProps {
  readonly project: Project;
  readonly projects: readonly Project[];
}

export function ProjectPageHeaderNav(props: ProjectPageHeaderNavProps) {
  const { project, projects } = props;
  return (
    <EngagementPageHeaderNav engagement={project} engagements={projects} />
  );
}
