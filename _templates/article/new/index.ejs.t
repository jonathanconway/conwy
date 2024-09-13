---
to: src/content/articles/<%= name %>/index.ts
---

import { Article } from "@/framework";

import content from "./content.mdx";
import { meta } from "./meta";

export const <%= h.namePascal() %> = {
  meta,
  content,
} as Article;
