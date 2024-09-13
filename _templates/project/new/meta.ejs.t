---
to: src/content/projects/<%= name %>/meta.ts
---

import { ProjectMeta, SocialLinkTypes } from "@/framework";

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
};
