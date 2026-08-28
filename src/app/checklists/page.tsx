import { Suspense } from "react";

import {
  ChecklistsList,
  ChecklistsTagFilters,
  MdxContainer,
  PageLayout,
} from "@/components";
import { checklistsFragment, site } from "@/content";
import * as checklists from "@/content/checklists";

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
