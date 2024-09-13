import { orderBy } from "lodash";

import { Work } from "./work";
import { WorkMeta } from "./work-meta";

export function sortWorkMetas(workMetas: readonly WorkMeta[]) {
  return orderBy(workMetas, "endDate", "desc");
}

export function getWorkMetas(works: Record<string, Work>) {
  return sortWorkMetas(Object.values(works).map((work) => work.meta));
}
