import { DateTime } from "luxon";

import { ContentTypes } from "../content-type";

import { Checklist } from "./checklist";
import { ChecklistTags } from "./checklist-tags";

export function createChecklistMock(): Checklist {
  return {
    type: ContentTypes.Checklist,
    startnotes: <></>,
    content: <></>,
    endnotes: <></>,
    meta: {
      slug: "front-end-observability",
      title: "Front end observability",
      blurb: "",
      updatedDate: DateTime.now().toFormat("yyyy-MM-dd"),
      tagGroupTitles: {},
      tagTitles: {},
      checklistTags: [ChecklistTags.SoftwareDevelopment],
    },
  };
}

export function createChecklistMocks(): readonly Checklist[] {
  return [createChecklistMock()];
}
