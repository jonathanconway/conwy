import { ArticleMeta, PostTags } from "@/framework/client";

import {
  tailwindFrontColor,
  tailwindThoughtsIllustration,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Thoughts on Tailwind",
  blurb: "Tailwind is good in the right hands but no maintainability panacea.",
  shortBlurb:
    "Tailwind is good in the right hands but no maintainability panacea.",
  createdDate: "2026-07-14",
  slug: "tailwind-thoughts",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: tailwindThoughtsIllustration,
  smallImage: tailwindFrontColor,
  socialLinks: [],
  discussionLinks: [],
};
