"use client";

import { getTreeSubBranchDescendantsCount } from "@/framework/client";

import { ContentPageSidebarHeadings } from "../../../content-page";
import { useChecklistContext } from "../../checklist-context";

export function ChecklistPageSidebarHeadings() {
  const checklistContext = useChecklistContext();
  const checklistSections =
    checklistContext?.checklistMeta.extensions?.itemsByHeadingText.subBranches
      .filter((subBranch) => getTreeSubBranchDescendantsCount(subBranch) > 0)
      .map((subBranch) => subBranch.branch) ?? [];
  const checklistPageHeadings = [...checklistSections, "Resources"];

  return <ContentPageSidebarHeadings headings={checklistPageHeadings} />;
}
