import { ArticleMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Testing Steps",
  blurb: "A simpler way to write acceptance tests",
  date: "2022-02-14",
  slug: "testing-steps",
  type: "article",
  tags: ["software-development"],
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "https://github.com/jonathanconway/testing-steps",
      title: "Github: testing-steps",
    },
    {
      type: SocialLinkTypes.Website,
      url: "https://testmatic-docs.surge.sh",
      title: "Testmatic website",
    },
  ],
};
