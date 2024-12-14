import { orderBy } from "lodash";

import { Project } from "./project";
import { ProjectMeta } from "./project-meta";

export function sortProjectMetas(ProjectMetas: readonly ProjectMeta[]) {
  return orderBy(ProjectMetas, "endDate", "desc");
}

export function getProjectMetas(Projects: Record<string, Project>) {
  return sortProjectMetas(
    Object.values(Projects).map((Project) => Project.meta),
  );
}
