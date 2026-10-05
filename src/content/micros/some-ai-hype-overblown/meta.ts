import { MicroMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: MicroMeta = {
  createdDate: "2026-10-06",
  slug: "some-ai-hype-overblown",
  shortBlurb: "Some AI hype may be overblown",
  tags: [PostTags.AI],
  socialLinks: [],
  discussionLinks: [
    {
      type: SocialLinkTypes.LinkedInPost,
      url: "https://www.linkedin.com/posts/jonathanconway_some-ai-hype-may-be-overblown-after-all-share-7512800011194200064-i1B_",
      likeCount: 8,
    },
  ],
  isPinned: true,
};
