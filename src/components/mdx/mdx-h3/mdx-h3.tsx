"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ChecklistHeading, useChecklistContext } from "../../checklist";
import { Heading, HeadingLevels } from "../../heading";

import "./mdx-h3.css";

export type MdxH3Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH3(props: MdxH3Props) {
  const checklistContext = useChecklistContext();
  if (checklistContext) {
    return <ChecklistHeading level={HeadingLevels.Level4} {...props} />;
  }

  return <Heading level={HeadingLevels.Level4} {...props} />;
}
