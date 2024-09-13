---
to: src/content/works/<%= name %>/meta.ts
---

import { WorkMeta } from "@/framework";

export const meta: WorkMeta = {
  client: "<%= h.nameSentence() %>",
  blurbShort: "",
  startDate: "2020-02-20",
  endDate: "2024-02-20",
  jobTitle: "",
  mainImage: "thumbnail.png",
  feedbacks: [],
  images: [],
  slug: "<%= name %>",
  tags: [],
  type: "work",
  techs: [],
  projects: [],
};
