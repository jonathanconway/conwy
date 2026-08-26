import { ChecklistMeta, ChecklistTags } from "@/framework/client";

import { tagGroupTitles } from "./tag-group-titles";
import { tagTitles } from "./tag-titles";

export const meta: ChecklistMeta = {
  title: "Front end development",
  slug: "front-end-development",
  blurb:
    "Includes front end frameworks and languages, and non-functional requirements.",
  updatedDate: "2026-07-01",
  checklistTags: [ChecklistTags.SoftwareDevelopment],
  tagTitles,
  tagGroupTitles,
};
