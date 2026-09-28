import { TypeOfConst } from "../../utils/typing";

export const ColleagueRelationshipTypes = {
  Coworker: "coworker",
  Mentor: "mentor",
  Supervisor: "supervisor",
  Lead: "lead",
  Manager: "manager",
} as const;

export type ColleagueRelationshipType = TypeOfConst<
  typeof ColleagueRelationshipTypes
>;
