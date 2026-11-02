import { Work } from "@/framework";

import { EngagementPageTechs } from "../engagement";

interface WorkPageTechsProps {
  readonly work: Work;
}

export function WorkPageTechs(props: WorkPageTechsProps) {
  return <EngagementPageTechs engagement={props.work} />;
}
