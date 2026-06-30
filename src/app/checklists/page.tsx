import { Suspense } from "react";

import { ChecklistsList, MdxContainer, PageLayout } from "@/components";
import { site } from "@/content";
import * as checklists from "@/content/checklists";
import { checklistsFragment } from "@/content/fragments";

export default function Page() {
  return (
    <Suspense>
      <PageLayout
        selectedNavPath="/checklists"
        main={
          <>
            <MdxContainer>{checklistsFragment.content}</MdxContainer>

            <ChecklistsList items={Object.values(checklists)} />
          </>
        }
      />
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - checklists`,
};
