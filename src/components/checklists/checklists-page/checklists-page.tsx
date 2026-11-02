import { checklistsRoute } from "@/app/routes";
import { checklistsFragment } from "@/content";
import { Checklist } from "@/framework";

import { Stack } from "../..//stack";
import { MdxContainer } from "../../mdx";
import { Page } from "../../page";
import { ResponsiveMdHalf } from "../../responsive";
import { ChecklistsList } from "../checklists-list";
import { ChecklistsTagFilters } from "../checklists-tag-filters";

interface ChecklistsPageProps {
  readonly checklists: readonly Checklist[];
}

export function ChecklistsPage(props: ChecklistsPageProps) {
  const { checklists } = props;
  return (
    <Page title={checklistsRoute.title}>
      <ResponsiveMdHalf>
        <Stack>
          <MdxContainer>{checklistsFragment.content}</MdxContainer>

          <ChecklistsTagFilters />
        </Stack>
      </ResponsiveMdHalf>

      <ChecklistsList items={checklists} />
    </Page>
  );
}
