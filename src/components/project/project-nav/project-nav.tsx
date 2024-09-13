import * as projects from "@/content/projects";
import { ProjectMeta, getProjectMetas } from "@/framework/client";

import { ItemNav } from "../../item";

interface ProjectNavProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectNav(props: ProjectNavProps) {
  const projectMetas = getProjectMetas(projects);
  return (
    <ItemNav
      itemMeta={props.projectMeta}
      itemMetas={projectMetas}
      titleKey="title"
    />
  );
}
