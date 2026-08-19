import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  fullStackIllustrationComposite,
  serverIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "We're all full stack now",
  blurb:
    "There seems to be a recent trend toward software engineers working full stack.",
  shortBlurb:
    "There seems to be a recent trend toward software engineers working full stack.",
  createdDate: "2026-08-19",
  slug: "full-stack",
  type: "article",
  tags: [PostTags.SoftwareEngineering],
  mainImage: fullStackIllustrationComposite,
  smallImage: serverIllustrationStatic,
  socialLinks: [],
  discussionLinks: [
    {
      type: SocialLinkTypes.Reddit,
      url: "https://www.reddit.com/r/dotnet/comments/1vpx99j/comment/p4iyp4f/?context=3",
    },
    {
      type: SocialLinkTypes.Whirlpool,
      url: "https://forums.whirlpool.net.au/thread/3z4yj6p2",
    },
  ],
  isPinned: true,
};
