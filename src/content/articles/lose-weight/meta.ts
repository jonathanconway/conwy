import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework";

export const meta: ArticleMeta = {
  title: "How to lose weight (without getting lucky)",
  blurb: "My routine for getting in shape while having fun!",
  shortBlurb: "My routine for getting in shape while having fun!",
  date: "2025-01-03",
  slug: "lose-weight",
  type: "article",
  tags: [PostTags.Life],
  mainImage: {
    src: "/images/articles/lose-weight/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.coursera.org/learn/food-and-health",
      title: "Food and health on Coursera",
    },
  ],
  discussionLinks: [],
  isPinned: true,
};
