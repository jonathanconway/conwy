import { orderBy } from "lodash";

import { ProjectMeta } from "./project-meta";

export function sortProjectMetas(ProjectMetas: readonly ProjectMeta[]) {
  return orderBy(ProjectMetas, ["date", "endDate"], "desc");
}
