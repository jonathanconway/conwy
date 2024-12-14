---
to: src/content/pages/<%- name %>/meta.ts
---

import { PageMeta } from "@/framework/client";

export const meta: PageMeta = {
  title: "<%- h.nameSentence() %>",
  slug: "<%- name %>",
  type: "page",
};