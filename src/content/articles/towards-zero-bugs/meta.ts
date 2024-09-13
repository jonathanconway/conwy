import { ArticleMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Towards zero bugs",
  blurb: "I am on a personal and professional mission to write bug-free code.",
  date: "2019-12-01",
  slug: "towards-zero-bugs",
  type: "article",
  tags: ["software-development"],
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/towards-zero-bugs-1bop",
    },
  ],
  discussionLink: {
    type: SocialLinkTypes.Dev,
    url: "https://dev.to/conw_y/towards-zero-bugs-1bop#comments",
    commentCount: 23,
  },
};
