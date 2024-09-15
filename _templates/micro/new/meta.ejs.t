---
to: src/content/micros/<%= name %>/meta.ts
---

import { MicroMeta, SocialLinkTypes } from "@/framework/client";

export const metadata: MicroMeta = {
  blurb: `{{ blurb }}`,
  date: "{{ date: yyyy-mm-dd }}",
  slug: "<%= name %>",
  tags: ["{{ tag }}"],
  type: "micro",
  socialLinks: [
    {
      type: SocialLinkTypes.Mastodon,
      url: "{{ url }}",
    },
  ],
};