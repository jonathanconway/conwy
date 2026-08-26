import { ChecklistMeta, ChecklistTags } from "@/framework/client";

import { tagGroupTitles } from "./tag-group-titles";
import { tagTitles } from "./tag-titles";

export const meta: ChecklistMeta = {
  title: "Presentations",
  slug: "presentations",
  blurb: "Things to keep in mind for an effective presentation.",
  updatedDate: "2026-07-06",
  checklistTags: [ChecklistTags.Work],
  tagTitles,
  tagGroupTitles,
};
