---
to: src/content/podcasts/<%- name %>.ts
---

import { Podcast } from "@/framework";

export const <%- h.nameCamel() %>Podcast: Podcast = {
  title: "<%- h.title() %>",
  url: "<%- h.url() %>",
};
