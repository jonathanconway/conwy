---
to: src/content/tools/<%= name %>.ts
---

import { Tool, ToolSections } from "@/framework";

export const <%= h.namePascal() %>: Tool = {
  section: ToolSections.App,
  slug: "<%= name %>",
  title: "<%= h.namePascal() %>",
  category: "",
  date: "<%= h.dateString() %>",
  operatingSystems: ["MacOS"],
  url: "",
  description: "",
  mainImage: "",
};
