import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "What I learned studying Calculus",
  blurb: "Reflections on studying a subject outside my usual comfort zone.",
  shortBlurb:
    "Reflections on studying a subject outside my usual comfort zone.",
  date: "2024-09-10",
  slug: "studying-calculus",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/studying-calculus/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.coursera.org/learn/introduction-to-calculus",
      title: "Calculus on Coursera",
    },
  ],
  discussionLinks: [],
  isPinned: true,
};
