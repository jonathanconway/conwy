import { ChecklistContext } from "..";

import { checklistsRoute, createChecklistsChecklistRoute } from "@/app/routes";

import { ChecklistContainer } from "../../checklist";
import { MainAsideLayout } from "../../layouts";
import { MdxContainer } from "../../mdx";
import { Page } from "../../page";
import { Stack } from "../../stack";

import { ChecklistPageSubHeader } from "./checklist-page-header";
import { ChecklistPageProps } from "./checklist-page-props";
import { ChecklistPageSidebar } from "./checklist-page-sidebar";

export function ChecklistPage(props: ChecklistPageProps) {
  const checklistRoute = createChecklistsChecklistRoute(props.checklist);

  return (
    <Page
      breadcrumbSegments={[checklistsRoute, { title: checklistRoute.title }]}
      title={checklistRoute.title}
      subHeaderSlot={<ChecklistPageSubHeader checklist={props.checklist} />}
    >
      <ChecklistContext checklistMeta={props.checklist.meta}>
        <MainAsideLayout
          mainSlot={
            <Stack gap={1}>
              <MdxContainer>{props.checklist.startnotes}</MdxContainer>

              <ChecklistContainer checklistMeta={props.checklist.meta}>
                <MdxContainer>{props.checklist.content}</MdxContainer>
              </ChecklistContainer>
            </Stack>
          }
          asideSlot={<ChecklistPageSidebar />}
        />
      </ChecklistContext>

      <MainAsideLayout
        mainSlot={<MdxContainer>{props.checklist.endnotes}</MdxContainer>}
      />
    </Page>
  );
}
