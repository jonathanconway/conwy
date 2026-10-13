import { WorkMeta } from "@/framework";

import { ItemTechs } from "../../item";

interface WorkTechsProps {
  readonly workMeta: WorkMeta;
}

export function WorkTechs(props: WorkTechsProps) {
  return <ItemTechs itemMeta={props.workMeta} />;
}
