"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading, HeadingLevels } from "../../heading";
import {
  MdxDivCustomChecklistHeading,
  useMdxDivCustomChecklistContext,
} from "../mdx-div";

import "./mdx-h3.css";

export type MdxH3Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH3(props: MdxH3Props) {
  // const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  // if (mdxDivCustomChecklistContext) {
  //   return (
  //     <MdxDivCustomChecklistHeading level={HeadingLevels.Level4} {...props} />
  //   );
  // }

  return (
    <>
      h4
      <Heading level={HeadingLevels.Level4} {...props} />
    </>
  );
}
