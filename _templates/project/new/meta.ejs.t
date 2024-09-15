---
to: src/content/projects/<%= name %>/meta.ts
---

import { ProjectMeta } from "@/framework/client";

export const <%= name %>: ProjectMeta = {
  title: "<%= name %>",
  blurb: "",
  date: "2000-01-01",
  slug: "<%= name %>",
  tags: [],
  type: "project",
  subType: "library",
  socialLinks: [],
  mainImage: "main.svg",
  redirectUrl: "<%= name %>",
  images: [],
  platforms: [],
  techs: [],
};
