import { DateTime } from "luxon";

import { Checklist } from "./checklist";

export function createChecklistMock(): Checklist {
  return {
    type: "checklist",
    content: <></>,
    endnotes: <></>,
    meta: {
      slug: "front-end-observability",
      title: "Front end observability",
      blurb: "",
      updatedDate: DateTime.now().toFormat("yyyy-MM-dd"),
    },
  };
}
