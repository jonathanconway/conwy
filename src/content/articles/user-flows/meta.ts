import { ArticleMeta, PostTags } from "@/framework/client";

import {
  routeIllustrationStatic,
  userFlowsIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "User flows",
  blurb: "Current techniques for collaboratively designing user flows.",
  createdDate: "2025-01-18",
  slug: "user-flows",
  type: "article",
  tags: [PostTags.Design],
  socialLinks: [],
  discussionLinks: [],
  mainImage: userFlowsIllustrationComposite,
  smallImage: routeIllustrationStatic,
  isPinned: true,
};
