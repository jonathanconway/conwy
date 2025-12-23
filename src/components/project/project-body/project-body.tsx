import { Project as Project_ } from "@/framework/client";

import { Fragment } from "../../fragments";

interface ProjectBodyProps {
  readonly project: Project_;
}

export function ProjectBody(props: ProjectBodyProps) {
  return <Fragment>{props.project.content}</Fragment>;
}
