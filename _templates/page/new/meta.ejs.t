---
to: src/content/pages/<%- name %>/meta.ts
---

import { PageMeta } from "@/framework";

export const meta: PageMeta = {
  title: "<%- h.nameSentence() %>",
  slug: "<%- name %>",
  type: "page",
};