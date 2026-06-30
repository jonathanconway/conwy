import { ChecklistContext } from "..";

import { ChecklistContainer } from "../../checklist";
import { MainAsideLayout } from "../../layouts";
import { MdxContainer } from "../../mdx";
import { Stack } from "../../stack";

import { ChecklistPageHeader } from "./checklist-page-header";
import { ChecklistPageProps } from "./checklist-page-props";
import { ChecklistPageSidebar } from "./checklist-page-sidebar";

export function ChecklistPage(props: ChecklistPageProps) {
  return (
    <>
      <ChecklistContext checklistMeta={props.checklist.meta}>
        <MainAsideLayout
          main={
            <Stack gap={2}>
              <ChecklistPageHeader checklist={props.checklist} />

              <MdxContainer>{props.checklist.startnotes}</MdxContainer>

              <ChecklistContainer checklistMeta={props.checklist.meta}>
                <MdxContainer>{props.checklist.content}</MdxContainer>
              </ChecklistContainer>
            </Stack>
          }
          aside={<ChecklistPageSidebar />}
        />
      </ChecklistContext>

      <MainAsideLayout
        main={<MdxContainer>{props.checklist.endnotes}</MdxContainer>}
      />
    </>
  );
}
