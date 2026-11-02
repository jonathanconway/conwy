import { Work } from "@/framework";

import { EngagementPageImageCascade } from "../../engagement";

export interface WorkPageImageCascadeProps {
  readonly work: Work;
}

export function WorkPageImageCascade(props: WorkPageImageCascadeProps) {
  return <EngagementPageImageCascade engagement={props.work} />;
}
