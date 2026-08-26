import { Suspense } from "react";

import {
  ChecklistsList,
  ChecklistsTagFilters,
  MdxContainer,
  PageLayout,
} from "@/components";
import { site } from "@/content";
import * as checklists from "@/content/checklists";
import { checklistsFragment } from "@/content/fragments";

export default function Page() {
  const items = Object.values(checklists);

  return (
    <Suspense>
      <PageLayout
        selectedNavPath="/checklists"
        main={
          <>
            <MdxContainer>{checklistsFragment.content}</MdxContainer>

            <ChecklistsTagFilters items={items} />

            <ChecklistsList items={items} />
          </>
        }
      />
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - checklists`,
};
