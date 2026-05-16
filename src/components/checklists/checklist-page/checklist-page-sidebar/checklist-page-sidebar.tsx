import { ChecklistMeta } from "@/framework/client";

import { ContentSidebarContainer } from "../../../content-page";

import { ChecklistPageSidebarHeadings } from "./checklist-page-sidebar-headings";

interface ChecklistPageSidebarProps {
  readonly checklistMeta: ChecklistMeta;
}

export function ChecklistPageSidebar(props: ChecklistPageSidebarProps) {
  return (
    <ContentSidebarContainer>
      <ChecklistPageSidebarHeadings checklistMeta={props.checklistMeta} />
    </ContentSidebarContainer>
  );
}
