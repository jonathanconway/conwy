import { orderBy } from "lodash";

import { Work } from "./work";

export function sortWorks(works: readonly Work[]) {
  return orderBy(works, "meta.endDate", "desc");
}
