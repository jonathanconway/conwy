import { Project } from "@/framework";

import { EngagementPageTechs } from "../../engagement";

interface ProjectTechsProps {
  readonly project: Project;
}

export function ProjectTechs(props: ProjectTechsProps) {
  const { project } = props;
  return <EngagementPageTechs engagement={project} />;
}
