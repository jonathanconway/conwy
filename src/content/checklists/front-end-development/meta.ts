import { ChecklistMeta } from "@/framework/client";

import { tagGroupTitles } from "./tag-group-titles";
import { tagTitles } from "./tag-titles";

export const meta: ChecklistMeta = {
  title: "Front end development",
  slug: "front-end-development",
  blurb:
    "Covers common front end development concerns. Includes front end frameworks and languages, and non-functional requirements such as accessibility and security.",
  updatedDate: "2026-05-13",
  tagTitles,
  tagGroupTitles,
};
