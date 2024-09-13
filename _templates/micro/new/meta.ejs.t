---
to: src/content/micros/<%= name %>/meta.ts
---

import { MicroMeta } from "@/framework";

export const metadata: MicroMeta = {
  blurb: `{{ blurb }}`,
  date: "{{ date: yyyy-mm-dd }}",
  slug: "<%= name %>",
  tags: ["{{ tag }}"],
  type: "micro",
  socialLinks: [
    {
      type: "{{ platform; e.g. twitter }}",
      url: "{{ url }}",
    },
  ],
};