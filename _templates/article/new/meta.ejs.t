---
to: src/content/articles/<%- name %>/meta.ts
---

import { ArticleMeta, PostTags } from "@/framework";

export const meta: ArticleMeta = {
  title: "<%- h.nameSentence() %>",
  blurb: "",
  shortBlurb: "",
  date: "<%- h.dateString() %>",
  slug: "<%- name %>",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  socialLinks: [],
  discussionLinks: [],
};
