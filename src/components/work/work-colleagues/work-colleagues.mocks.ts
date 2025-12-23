import { createColleagueRelationshipsMock } from "@/framework/client";

import { WorkProjectsProps } from "./work-colleagues.types";

export const WORK_COLLEAGUE_RELATIONSHIPS_PROPS_MOCK: WorkProjectsProps = {
  colleagueRelationships: createColleagueRelationshipsMock(),
};
