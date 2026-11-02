import { createColleagueRelationshipsMock } from "@/framework";

import { EngagementPageColleaguesProps } from "./engagement-page-colleagues.types";

export function createEngagementPageColleaguesPropsMock(): EngagementPageColleaguesProps {
  return {
    colleagueRelationships: createColleagueRelationshipsMock(),
  };
}
