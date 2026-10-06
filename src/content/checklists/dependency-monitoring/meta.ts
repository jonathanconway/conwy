import { ChecklistMeta, ChecklistTags } from "@/framework/client";

import { tagGroupTitles } from "./tag-group-titles";
import { tagTitles } from "./tag-titles";

export const meta: ChecklistMeta = {
  title: "Dependency monitoring",
  slug: "dependency-monitoring",
  blurb:
    "Follow these checks when monitoring dependencies and making updates to keep your application secure with minimal disruption.",
  updatedDate: "2026-07-08",
  checklistTags: [ChecklistTags.SoftwareDevelopment],
  tagTitles,
  tagGroupTitles,
};
