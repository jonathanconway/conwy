import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Object const enum pattern for Typescript",
  blurb: "My favourite pattern for enumerations in Typescript",
  date: "2025-01-09",
  slug: "typescript-object-const-enum-pattern",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/typescript-object-const-enum-pattern/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "https://gist.github.com/jonathanconway/a192942e3a4cb640a5cd4d2d321df917"
    }
  ],
  discussionLinks: [],
};
