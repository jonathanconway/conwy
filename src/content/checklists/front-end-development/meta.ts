import { ChecklistMeta } from "@/framework/client";

import checklistMetaGenerated from "../../../../.generated/content/checklists/front-end-development/checklist-meta.json";

export const meta: ChecklistMeta = {
  title: "Front end development",
  slug: "front-end-development",
  blurb:
    "Covers common front end development concerns. Includes front end frameworks and languages, and non-functional requirements such as accessibility and security.",
  // items: [],
  // tagGroups: [],
  // itemsByHeadingText: [],
  items: checklistMetaGenerated.items,
  tagGroups: checklistMetaGenerated.tagGroups,
  itemsByHeadingText: checklistMetaGenerated.itemsByHeadingText,
};
