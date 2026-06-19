import { ChecklistContext } from "..";

import { ChecklistContainer } from "@/components/checklist/checklist-container";

import { MainAsideLayout } from "../../layouts";
import { MdxContainer } from "../../mdx";
import { Stack } from "../../stack";

import { ChecklistPageHeader } from "./checklist-page-header";
import { ChecklistPageProps } from "./checklist-page-props";
import { ChecklistPageSidebar } from "./checklist-page-sidebar";

export function ChecklistPage(props: ChecklistPageProps) {
  return (
    <ChecklistContext checklistMeta={props.checklist.meta}>
      <MainAsideLayout
        main={
          <Stack gap={2}>
            <ChecklistPageHeader checklist={props.checklist} />

            <MdxContainer>
              <ChecklistContainer checklistMeta={props.checklist.meta}>
                {props.checklist.content}
              </ChecklistContainer>
            </MdxContainer>

            <MdxContainer>{props.checklist.endnotes}</MdxContainer>
          </Stack>
        }
        aside={<ChecklistPageSidebar />}
      />
    </ChecklistContext>
  );
}
