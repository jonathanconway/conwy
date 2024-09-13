import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading } from "../../heading";

export type MdxH1Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH1(props: MdxH1Props) {
  return <Heading level={2} {...props} />;
}
