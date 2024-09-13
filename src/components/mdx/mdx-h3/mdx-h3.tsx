import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading } from "../../heading";

export type MdxH3Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH3(props: MdxH3Props) {
  return <Heading level={4} {...props} />;
}
