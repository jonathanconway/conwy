import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Uses of mock data",
  blurb: "Mock data can boost developer productivity and enjoyment",
  date: "2021-09-28",
  slug: "mock-data",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/mock-data/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/the-many-uses-of-mock-data-4fi2",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/the-many-uses-of-mock-data-4fi2#comments",
      likeCount: 8,
      commentCount: 1,
    },
  ],
};
