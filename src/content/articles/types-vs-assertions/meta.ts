import {
  typesVsAssertionsIllustrationComposite,
  typescriptIllustrationStatic,
} from "@/content/illustrations";
import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Types vs assertions",
  blurb:
    "Types are build-time guarantees, assertions are run-time guarantees. Both are beneficial.",
  createdDate: "2026-07-24",
  slug: "types-vs-assertions",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: typesVsAssertionsIllustrationComposite,
  smallImage: typescriptIllustrationStatic,
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/types-vs-assertions-45d4",
    },
    {
      type: SocialLinkTypes.Github,
      url: "https://gist.github.com/jonathanconway/d2578f0b37d72a5c14b6f03de51d671a",
      title: "Gist: assert.ts",
    },
  ],
  discussionLinks: [
    {
      likeCount: 4,
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/types-vs-assertions-45d4",
    },
  ],
};
