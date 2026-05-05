import { Checklist } from "./checklist";

export function createChecklistMock(): Checklist {
  return {
    type: "checklist",
    content: <></>,
    meta: {
      slug: "front-end-observability",
      title: "Front end observability",
      blurb: "",
    },
  };
}
