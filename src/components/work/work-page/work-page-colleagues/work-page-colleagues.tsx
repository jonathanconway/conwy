import { EngagementPageColleagues } from "../../../engagement";

import { WorkPageColleaguesProps } from "./work-page-colleagues.types";

export function WorkPageColleagues(props: WorkPageColleaguesProps) {
  return (
    <EngagementPageColleagues
      colleagueRelationships={props.colleagueRelationships}
    />
  );
}
