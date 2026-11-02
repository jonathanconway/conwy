import { Work } from "@/framework";

import { EngagementPageHeader } from "../../../engagement";

interface WorkPageHeaderProps {
  readonly work: Work;
  readonly works: readonly Work[];
}

export function WorkPageHeader(props: WorkPageHeaderProps) {
  const { work, works } = props;

  return (
    <EngagementPageHeader
      engagement={work}
      engagements={works}
      subtitleSlot={work.meta.jobTitle}
    />
  );
}
