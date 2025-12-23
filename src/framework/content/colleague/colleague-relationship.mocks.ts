import { ColleagueRelationship } from "./colleague-relationship";
import { ColleagueRelationshipTypes } from "./colleague-relationship-type";
import { createColleagueMock1, createColleagueMock2 } from "./colleague.mocks";

export function createColleagueRelationshipsMock(): readonly ColleagueRelationship[] {
  return [
    {
      colleague: createColleagueMock1(),
      relationshipType: ColleagueRelationshipTypes.Coworker,
    },
    {
      colleague: createColleagueMock2(),
      relationshipType: ColleagueRelationshipTypes.Manager,
    },
  ];
}
