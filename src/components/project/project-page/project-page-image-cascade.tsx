import { Project } from "@/framework";

import { EngagementPageImageCascade } from "../../engagement";

export interface ProjectPageImageCascadeProps {
  readonly project: Project;
}

export function ProjectPageImageCascade(props: ProjectPageImageCascadeProps) {
  const { project } = props;

  return <EngagementPageImageCascade engagement={project} />;
}
