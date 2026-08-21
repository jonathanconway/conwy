import { ArticleMeta, PostTags } from "@/framework/client";

import {
  betterPullRequestsIllustrationComposite,
  pullRequestIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Better pull requests",
  blurb: "Some best practices I've learned about effective pull requests.",
  shortBlurb: "Some best practices I've learned about effective pull requests.",
  createdDate: "2026-08-22",
  slug: "better-pull-requests",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: betterPullRequestsIllustrationComposite,
  smallImage: pullRequestIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: true,
};
