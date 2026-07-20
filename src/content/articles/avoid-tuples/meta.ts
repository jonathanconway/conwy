import { ArticleMeta, PostTags } from "@/framework/client";

import {
  avoidTuplesIllustrationComposite,
  cubeDynamicClayIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Avoid anonymous tuples",
  blurb:
    "How I avoid anonymous tuples and use objects with named fields instead.",
  createdDate: "2026-07-04",
  slug: "avoid-tuples",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: avoidTuplesIllustrationComposite,
  smallImage: cubeDynamicClayIllustrationStatic,
  isPinned: false,
  socialLinks: [],
  discussionLinks: [],
};
