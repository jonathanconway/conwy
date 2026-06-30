"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ChecklistHeading, useChecklistContext } from "../../checklist";
import { Heading, HeadingLevels } from "../../heading";

import "./mdx-h4.css";

export type MdxH4Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH4(props: MdxH4Props) {
  const checklistContext = useChecklistContext();
  if (checklistContext) {
    return <ChecklistHeading level={HeadingLevels.Level5} {...props} />;
  }

  return <Heading level={HeadingLevels.Level5} {...props} />;
}
