import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Towards zero bugs",
  blurb: "I am on a personal and professional mission to write bug-free code.",
  date: "2019-12-01",
  slug: "towards-zero-bugs",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/towards-zero-bugs/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/towards-zero-bugs-1bop",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/towards-zero-bugs-1bop#comments",
      commentCount: 25,
      likeCount: 207,
    },
  ],
};
