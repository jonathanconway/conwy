import { ArticleMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "What I learned studying Calculus",
  blurb: "Reflections on studying a subject outside my usual comfort zone.",
  shortBlurb:
    "Reflections on studying a subject outside my usual comfort zone.",
  date: "2024-09-10",
  slug: "studying-calculus",
  type: "article",
  tags: ["learning"],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.coursera.org/learn/introduction-to-calculus",
      title: "Link to course on Coursera",
    },
  ],
};
