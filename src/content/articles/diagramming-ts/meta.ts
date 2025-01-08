import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Diagramming Typescript",
  blurb: "Using UML to model Typescript structures",
  date: "2022-01-02",
  slug: "diagramming-ts",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/diagramming-typescript-2ehj",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/diagramming-typescript-2ehj#comments",
      likeCount: 7,
    },
  ],
};
