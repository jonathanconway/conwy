import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  typescriptEnumPatternsIllustrationComposite,
  typescriptIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Enum patterns for Typescript",
  blurb: "My favourite patterns for enumerations in Typescript",
  createdDate: "2026-03-15",
  updatedDate: "2026-03-15",
  slug: "typescript-enum-patterns",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  isPinned: true,
  mainImage: typescriptEnumPatternsIllustrationComposite,
  smallImage: typescriptIllustrationStatic,
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "https://gist.github.com/jonathanconway/a192942e3a4cb640a5cd4d2d321df917",
    },
  ],
  discussionLinks: [],
};
