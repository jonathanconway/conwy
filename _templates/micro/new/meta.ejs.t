---
to: src/content/micros/<%- h.contentName() %>/meta.ts
---

import { MicroMeta, SocialLinkTypes } from "@/framework";

export const metadata: MicroMeta = {
  blurb: `<%- h.content() %>`,
  date: "<%- h.dateString() %>",
  slug: "<%- h.contentName() %>",
  tags: [],
  type: "micro",
  socialLinks: [
    {
      type: SocialLinkTypes.Mastodon,
      url: "{{ url }}",
    },
  ],
};