---
to: src/content/articles/<%= name %>/meta.ts
---

import { ArticleMeta } from "@/framework";

export const meta: ArticleMeta = {
  title: "<%= h.nameSentence() %>",
  blurb: "",
  shortBlurb: "",
  date: "2023-07-02",
  slug: "<%= name %>",
  type: "article",
  tags: [""],
  socialLinks: [],
};
