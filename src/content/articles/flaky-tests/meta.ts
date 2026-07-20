import { ArticleMeta, PostTags } from "@/framework/client";

import { flakyTestsIllustration } from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Dealing with flaky tests",
  blurb:
    "Some tips for reproducing and solving or mitigating non-deterministic broken tests.",
  createdDate: "2026-03-01",
  slug: "flaky-tests",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: flakyTestsIllustration,
  isPinned: true,
  socialLinks: [],
  discussionLinks: [],
};
