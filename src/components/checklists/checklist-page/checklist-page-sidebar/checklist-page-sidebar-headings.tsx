"use client";

import { ChecklistMeta } from "@/framework/client";

import { ContentPageSidebarHeadings } from "../../../content-page";

export interface ChecklistPageSidebarHeadingsProps {
  readonly checklistMeta: ChecklistMeta;
}

export function ChecklistPageSidebarHeadings(
  props: ChecklistPageSidebarHeadingsProps,
) {
  const checklistSections =
    props.checklistMeta.extensions?.itemsByHeadingText.subBranches.map(
      (subBranch) => subBranch.branch,
    ) ?? [];
  const checklistPageHeadings = ["Top", ...checklistSections, "Resources"];
  return <ContentPageSidebarHeadings headings={checklistPageHeadings} />;
}
