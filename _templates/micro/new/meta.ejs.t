---
to: src/content/micros/<%= h.contentName() %>/meta.ts
---

import { MicroMeta, SocialLinkTypes } from "@/framework/client";

export const metadata: MicroMeta = {
  blurb: `<%= h.content() %>`,
  date: "<%= h.dateString() %>",
  slug: "<%= h.contentName() %>",
  tags: [],
  type: "micro",
  socialLinks: [
    {
      type: SocialLinkTypes.Mastodon,
      url: "{{ url }}",
    },
  ],
};