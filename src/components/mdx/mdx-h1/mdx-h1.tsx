import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading, HeadingLevels } from "../../heading";
import {
  MdxDivCustomChecklistHeading,
  useMdxDivCustomChecklistContext,
} from "../mdx-div";

export type MdxH1Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH1(props: MdxH1Props) {
  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  if (mdxDivCustomChecklistContext) {
    return <MdxDivCustomChecklistHeading {...props} />;
  }

  return <Heading level={HeadingLevels.Level2} {...props} />;
}
