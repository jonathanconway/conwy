import { ProjectMeta } from "@/framework/client";

import { ItemTechs } from "../../item";

interface ProjectTechsProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectTechs(props: ProjectTechsProps) {
  return <ItemTechs itemMeta={props.projectMeta} />;
}
