import { groupBy, orderBy } from "lodash";

import { Study } from "@/framework/client";

export function getStudiesList(studies: readonly Study[]) {
  const studiesOrdered = orderBy(studies, (study) => study.date, "desc");
  const studiesBySection = groupBy(studiesOrdered, (study) => study.status);
  const studiesBySectionEntries = Object.entries(studiesBySection);
  const sectionKeys = Object.keys(studiesBySection);

  return {
    sectionKeys,
    studiesBySectionEntries,
  };
}
