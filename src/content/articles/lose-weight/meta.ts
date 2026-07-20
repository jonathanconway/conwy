import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  gymDynamicPremiumIllustrationStatic,
  loseWeightIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "How to lose weight (without getting lucky)",
  blurb: "My routine for getting in shape while having fun!",
  shortBlurb: "My routine for getting in shape while having fun!",
  createdDate: "2025-01-03",
  slug: "lose-weight",
  type: "article",
  tags: [PostTags.Life],
  mainImage: loseWeightIllustrationComposite,
  smallImage: gymDynamicPremiumIllustrationStatic,
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
