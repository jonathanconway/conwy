"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading, HeadingLevels } from "../../heading";
import {
  MdxDivCustomChecklistHeading,
  useMdxDivCustomChecklistContext,
} from "../mdx-div";

import "./mdx-h4.css";

export type MdxH4Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH4(props: MdxH4Props) {
  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  if (mdxDivCustomChecklistContext) {
    return (
      <MdxDivCustomChecklistHeading level={HeadingLevels.Level5} {...props} />
    );
  }

  return <Heading level={HeadingLevels.Level5} {...props} />;
}
