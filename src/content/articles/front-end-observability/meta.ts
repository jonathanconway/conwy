import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Front end observability",
  blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
  shortBlurb:
    "Observing the state of front end applications running in production",
  date: "2023-07-02",
  slug: "front-end-observability",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "https://github.com/jonathanconway/observability-example-react",
    },
  ],
  discussionLinks: [],
  isPinned: true,
};
