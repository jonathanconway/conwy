import { ChecklistMeta } from "@/framework/client";

import { tagGroupTitles } from "./tag-group-titles";
import { tagTitles } from "./tag-titles";

export const meta: ChecklistMeta = {
  title: "Dependency updates",
  slug: "dependency-updates",
  blurb:
    "Follow these checks when making updates to keep your application secure with minimal disruption.",
  updatedDate: "2026-07-08",
  tagTitles,
  tagGroupTitles,
};
