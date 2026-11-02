import { Work } from "@/framework";

import { EngagementPageHeaderNav } from "../../../../engagement";

interface WorkPageHeaderNavProps {
  readonly work: Work;
  readonly works: readonly Work[];
}
// todo: clean up this and similar if unused
export function WorkPageHeaderNav(props: WorkPageHeaderNavProps) {
  const { work, works } = props;
  return <EngagementPageHeaderNav engagement={work} engagements={works} />;
}
