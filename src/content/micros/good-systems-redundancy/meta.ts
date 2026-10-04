import { MicroMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: MicroMeta = {
  createdDate: "2023-12-02",
  slug: "good-systems-redundancy",
  shortBlurb: "Good systems can be highly redundant",
  tags: [PostTags.SoftwareDevelopment],
  socialLinks: [
    {
      type: SocialLinkTypes.Twitter,
      url: "https://x.com/conw_y/status/1738084282684612952?s=20",
    },
    {
      type: SocialLinkTypes.Mastodon,
      url: "https://mastodon.social/@conwy/112125972399043834",
    },
  ],
  isPinned: true,
  discussionLinks: [],
};
