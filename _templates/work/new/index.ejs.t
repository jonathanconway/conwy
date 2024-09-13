---
to: src/content/works/<%= name %>/index.ts
---

import { Work } from "@/framework";

import content from "./blurb-long.mdx";
import { meta } from "./meta";

export const <%= h.nameCamel() %> = {
  meta,
  content,
} as Work;
