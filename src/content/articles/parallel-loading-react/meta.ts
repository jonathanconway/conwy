import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  parallelLoadingReactIllustrationComposite,
  road2LaneIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Parallel loading in React",
  blurb: "How to load parallel requests in one component.",
  createdDate: "2021-04-17",
  slug: "parallel-loading-react",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: parallelLoadingReactIllustrationComposite,
  smallImage: road2LaneIllustrationStatic,
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/parallel-loading-in-react-cci",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/parallel-loading-in-react-cci#comments",
      likeCount: 7,
    },
  ],
};
