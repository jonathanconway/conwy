import { ArticleMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Streamlining code reviews",
  blurb:
    "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
  date: "2023-08-06",
  slug: "code-reviews",
  type: "article",
  tags: ["software-development"],
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/streamlining-code-reviews-4016",
    },
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/pulse/streamlining-code-reviews-jonathan-conway",
    },
  ],
  discussionLink: {
    type: SocialLinkTypes.Twitter,
    url: "https://x.com/conw_y/status/1688050838932209664",
    commentCount: 1,
  },
};
