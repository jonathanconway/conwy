---
to: src/content/pages/<%= name %>/index.ts
---

import { Page } from "@/framework/client";

import content from "./content.mdx";
import { meta } from "./meta";

export const <%= h.nameCamel() %> = {
  meta,
  content,
} as Page;
