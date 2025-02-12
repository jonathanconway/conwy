import { Colleague } from "./colleague";
import { ColleagueRelationshipType } from "./colleague-relationship-type";

export interface ColleagueRelationship {
  readonly colleague: Colleague;
  readonly relationshipType: ColleagueRelationshipType;
}
