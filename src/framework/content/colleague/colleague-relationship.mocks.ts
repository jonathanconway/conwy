import { ColleagueRelationship } from "./colleague-relationship";
import { ColleagueRelationshipTypes } from "./colleague-relationship-type";
import { COLLEAGUE_MOCK_1, COLLEAGUE_MOCK_2 } from "./colleague.mocks";

export const COLLEAGUE_RELATIONSHIPS_MOCKS: readonly ColleagueRelationship[] = [
  {
    colleague: COLLEAGUE_MOCK_1,
    relationshipType: ColleagueRelationshipTypes.Coworker,
  },
  {
    colleague: COLLEAGUE_MOCK_2,
    relationshipType: ColleagueRelationshipTypes.Manager,
  },
];
