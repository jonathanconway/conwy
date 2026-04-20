"use client";

import { Props } from "@/framework/client";

import { HeadingLevels, SectionHeading } from "../../heading";
import {
  MdxDivCustomChecklistHeading,
  useMdxDivCustomChecklistContext,
} from "../mdx-div";

import "./mdx-h2.css";

export type MdxH2Props = Props<typeof SectionHeading>;

export function MdxH2(props: MdxH2Props) {
  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  if (mdxDivCustomChecklistContext) {
    return (
      <MdxDivCustomChecklistHeading level={HeadingLevels.Level3} {...props} />
    );
  }

  return <SectionHeading {...props} />;
}
