import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading } from "../../heading";

import "./mdx-h4.css";

export type MdxH4Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH4(props: MdxH4Props) {
  return <Heading level={5} {...props} />;
}
