import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Visualising execution flows",
  blurb:
    "Execution flowcharts can be a useful tool for visualising and understanding how our code behaves at runtime.",
  shortBlurb: "Execution flowcharts for visualising runtime behaviour",
  date: "2023-08-01",
  slug: "visualising-execution-flows",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/visualising-execution-flows/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/visualising-execution-flows-59e7",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/visualising-execution-flows-59e7#comments",
      likeCount: 18,
    },
  ],
};
