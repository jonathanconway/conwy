"use client";

import { Props } from "@/framework/client";

import { ChecklistHeading, useChecklistContext } from "../../checklist";
import { HeadingLevels, SectionHeading } from "../../heading";

import "./mdx-h2.css";

export type MdxH2Props = Props<typeof SectionHeading>;

export function MdxH2(props: MdxH2Props) {
  const checklistContext = useChecklistContext();
  if (checklistContext) {
    return <ChecklistHeading level={HeadingLevels.Level3} {...props} />;
  }

  return <SectionHeading {...props} />;
}
