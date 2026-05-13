import { ChecklistMeta } from "@/framework/client";

import { ArticleSidebarContainer } from "../../../article/article-sidebar/article-sidebar-container";

import { ChecklistPageSidebarHeadings } from "./checklist-page-sidebar-headings";

interface ChecklistPageSidebarProps {
  readonly checklistMeta: ChecklistMeta;
}

export function ChecklistPageSidebar(props: ChecklistPageSidebarProps) {
  return (
    <ArticleSidebarContainer>
      <ChecklistPageSidebarHeadings checklistMeta={props.checklistMeta} />
    </ArticleSidebarContainer>
  );
}
