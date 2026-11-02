import { ChecklistContext } from "..";

import { checklistsRoute, createChecklistsChecklistRoute } from "@/app/routes";

import { ChecklistContainer } from "../../checklist";
import { MdxContainer } from "../../mdx";
import { PageMainAsideLayout } from "../../page/page-main-aside/page-main-aside-layout";
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
        <PageMainAsideLayout
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

      <PageMainAsideLayout
        mainSlot={<MdxContainer>{props.checklist.endnotes}</MdxContainer>}
      />
    </Page>
  );
}
