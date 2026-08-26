import { ChecklistMeta, ChecklistTags } from "@/framework/client";

import { tagGroupTitles } from "./tag-group-titles";
import { tagTitles } from "./tag-titles";

export const meta: ChecklistMeta = {
  title: "Diagrams",
  slug: "diagrams",
  blurb: "Tips for neat, presentable and readable diagrams.",
  updatedDate: "2026-08-12",
  checklistTags: [ChecklistTags.Work],
  tagTitles,
  tagGroupTitles,
};
