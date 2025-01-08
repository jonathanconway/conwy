import { MicroMeta, PostTags } from "@/framework/client";

export const meta: MicroMeta = {
  blurb: `Good systems tend to have a lot of redundancy (“fall-backs”), and thus, have some inefficiency. Designers often seem to understand this better than engineers.`,
  date: "2023-12-02",
  slug: "good-systems-redundancy",
  tags: [PostTags.SoftwareDevelopment],
  type: "micro",
  socialLinks: [
    {
      type: "twitter",
      url: "https://x.com/conw_y/status/1738084282684612952?s=20",
    },
    {
      type: "mastodon",
      url: "https://mastodon.social/@conwy/112125972399043834",
    },
  ],
  isPinned: true,
};
