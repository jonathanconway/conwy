import { Project as Project_ } from "@/framework/client";

import { MdxWrapper } from "../../mdx";

interface ProjectBodyProps {
  readonly project: Project_;
}

export function ProjectBody(props: ProjectBodyProps) {
  return <MdxWrapper>{props.project.content}</MdxWrapper>;
}
