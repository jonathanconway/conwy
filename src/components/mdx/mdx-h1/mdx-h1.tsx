import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading, HeadingLevels } from "../../heading";

export type MdxH1Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH1(props: MdxH1Props) {
  return <Heading level={HeadingLevels.Level2} {...props} />;
}
