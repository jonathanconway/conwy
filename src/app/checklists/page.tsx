import { Suspense } from "react";

import { ChecklistsPage } from "@/components";
import { site } from "@/content";
import * as checklistsMap from "@/content/checklists";

import { checklistsRoute } from "../routes";

export default function Page() {
  const checklists = Object.values(checklistsMap);

  return (
    <Suspense>
      <ChecklistsPage checklists={checklists} />
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - ${checklistsRoute.title.toLowerCase()}`,
};
