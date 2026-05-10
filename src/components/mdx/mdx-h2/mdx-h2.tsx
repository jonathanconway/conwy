"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { HeadingLevels, SectionHeading } from "../../heading";
import {
  MdxDivCustomChecklistHeading,
  useMdxDivCustomChecklistContext,
} from "../mdx-div";

import "./mdx-h2.css";

export type MdxH2Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH2(props: MdxH2Props) {
  // const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  // if (mdxDivCustomChecklistContext) {
  //   return (
  //     <MdxDivCustomChecklistHeading level={HeadingLevels.Level3} {...props} />
  //   );
  // }

  return (
    <>
      h3
      <SectionHeading {...props} />
    </>
  );
}
