import { MainAsideLayout } from "../../layouts";
import { MdxContainer, MdxDivCustomChecklist } from "../../mdx";
import { Stack } from "../../stack";

import { ChecklistPageHeader } from "./checklist-page-header";
import { ChecklistPageProps } from "./checklist-page-props";
import { ChecklistPageSidebar } from "./checklist-page-sidebar";

export function ChecklistPage(props: ChecklistPageProps) {
  return (
    <MainAsideLayout
      main={
        <Stack gap={2}>
          <ChecklistPageHeader checklist={props.checklist} />

          <MdxContainer>
            <MdxDivCustomChecklist checklist={props.checklist}>
              {props.checklist.content}
            </MdxDivCustomChecklist>
          </MdxContainer>

          <MdxContainer>{props.checklist.endnotes}</MdxContainer>
        </Stack>
      }
      aside={<ChecklistPageSidebar checklistMeta={props.checklist.meta} />}
    />
  );
}
