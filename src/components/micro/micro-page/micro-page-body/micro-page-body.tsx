import { Micro } from "@/framework";

import { MdxContainer } from "../../../mdx";

interface MicroPageBodyProps {
  readonly micro: Micro;
}

export function MicroPageBody(props: MicroPageBodyProps) {
  return <MdxContainer>{props.micro.content}</MdxContainer>;
}
