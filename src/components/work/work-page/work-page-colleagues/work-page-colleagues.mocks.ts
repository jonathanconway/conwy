import { createColleagueRelationshipsMock } from "@/framework";

import { WorkPageColleaguesProps } from "./work-page-colleagues.types";

export function createWorkPageColleaguesPropsMock(): WorkPageColleaguesProps {
  return {
    colleagueRelationships: createColleagueRelationshipsMock(),
  };
}
