import { groupBy, orderBy } from "lodash";

import * as studies from "@/content/studies";

export function getStudiesList() {
  const studiesItems = Object.values(studies);
  const studiesOrdered = orderBy(studiesItems, (study) => study.date, "desc");
  const studiesBySection = groupBy(studiesOrdered, (study) => study.status);
  const studiesBySectionEntries = Object.entries(studiesBySection);
  const sectionKeys = Object.keys(studiesBySection);

  return {
    sectionKeys,
    studiesBySectionEntries,
  };
}
