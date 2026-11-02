import { Work as Work_ } from "@/framework";

import { EngagementPageBody } from "../../engagement";
import { Section } from "../../section";

export interface WorkPageSummaryProps {
  readonly work: Work_;
}

export function WorkPageSummary(props: WorkPageSummaryProps) {
  return (
    <Section label="Duties + Achievements">
      <EngagementPageBody engagement={props.work} />
    </Section>
  );
}
