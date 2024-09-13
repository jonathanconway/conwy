import * as works from "@/content/works";
import { WorkMeta, getWorkMetas } from "@/framework/client";

import { ItemNav } from "../../item";

interface WorkNavProps {
  readonly workMeta: WorkMeta;
}

export function WorkNav(props: WorkNavProps) {
  const workMetas = getWorkMetas(works);
  return (
    <ItemNav
      itemMeta={props.workMeta}
      itemMetas={workMetas}
      titleKey="client"
    />
  );
}
