import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Parallel loading in React",
  blurb: "How to load parallel requests in one component.",
  date: "2021-04-17",
  slug: "parallel-loading-react",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/parallel-loading-react/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/parallel-loading-in-react-cci",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/parallel-loading-in-react-cci#comments",
      likeCount: 7,
    },
  ],
};
