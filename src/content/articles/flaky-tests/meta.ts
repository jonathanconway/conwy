import { ArticleMeta, PostTags } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Dealing with flaky tests",
  blurb:
    "Some tips for reproducing and solving or mitigating non-deterministic broken tests.",
  date: "2026-03-01",
  slug: "flaky-tests",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/flaky-tests/main.png",
  },
  isPinned: true,
  socialLinks: [],
  discussionLinks: [],
};
