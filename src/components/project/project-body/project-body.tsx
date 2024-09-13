import { Project as Project_ } from "@/framework/client";

import { Fragment } from "../../fragments";

interface ProjectBodyProps {
  readonly project: Project_;
}

export function ProjectBody({
  project: { content: Content },
}: ProjectBodyProps) {
  return (
    <Fragment>
      <Content />
    </Fragment>
  );
}
