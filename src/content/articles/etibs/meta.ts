import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  cubeDynamicPremiumIllustrationStatic,
  etibsIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "eTIBs",
  blurb:
    "An under-discussed means of inflation protection available to Australians.",
  createdDate: "2026-07-26",
  slug: "etibs",
  type: "article",
  tags: [PostTags.Finance],
  mainImage: etibsIllustrationComposite,
  smallImage: cubeDynamicPremiumIllustrationStatic,
  socialLinks: [],
  discussionLinks: [
    {
      type: SocialLinkTypes.RationalReminder,
      url: "https://community.rationalreminder.ca/t/non-us-equivalent-of-i-bonds-and-tips/18776",
      title: "Non-US equivalent of I Bonds and TIPS?",
      likeCount: 42,
      commentCount: 10,
    },
  ],
  isPinned: true,
};
