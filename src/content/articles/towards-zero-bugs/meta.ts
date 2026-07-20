import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  bugIllustrationStatic,
  towardsZeroBugsIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Towards zero bugs",
  blurb: "I am on a personal and professional mission to write bug-free code.",
  createdDate: "2019-12-01",
  slug: "towards-zero-bugs",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: towardsZeroBugsIllustrationComposite,
  smallImage: bugIllustrationStatic,
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/towards-zero-bugs-1bop",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/towards-zero-bugs-1bop#comments",
      commentCount: 25,
      likeCount: 207,
    },
  ],
  isPinned: true,
};
