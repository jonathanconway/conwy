import { Project as Project_ } from "@/framework/client";

import { MdxContainer } from "../../mdx";

interface ProjectBodyProps {
  readonly project: Project_;
}

export function ProjectBody(props: ProjectBodyProps) {
  return <MdxContainer>{props.project.content}</MdxContainer>;
}
