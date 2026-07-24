import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import { diagrammingReactIllustrationComposite } from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Diagramming React code",
  blurb: "Using UML to model React structures",
  createdDate: "2024-10-14",
  slug: "diagramming-react",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: diagrammingReactIllustrationComposite,
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/diagramming-react-code-48m7",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/diagramming-react-code-48m7",
      likeCount: 5,
      commentCount: 6,
    },
  ],
  isPinned: true,
};
