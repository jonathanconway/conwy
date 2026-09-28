import * as projectsMap from "@/content/projects";
import { ProjectMeta, getProjectMetas } from "@/framework/client";

import { ItemNav } from "../../item";

interface ProjectNavProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectNav(props: ProjectNavProps) {
  const projectMetas = getProjectMetas(projectsMap);
  return (
    <ItemNav
      itemMeta={props.projectMeta}
      itemMetas={projectMetas}
      titleKey="title"
    />
  );
}
