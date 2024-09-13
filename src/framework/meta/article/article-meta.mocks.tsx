import { SocialLinkTypes } from "../social-link";

import { ArticleMeta } from "./article-meta";

export function createArticleMetaMock(): ArticleMeta {
  return {
    title: "Front end observability",
    blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
    date: "2023-09-02",
    slug: "front-end-observability",
    tags: ["software-development"],
    type: "article",
    socialLinks: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://linkedin.com/in/jonathanconway",
      },
      {
        type: SocialLinkTypes.Github,
        url: "https://linkedin.com/in/jonathanconway",
      },
    ],
  };
}

export function createArticleMetaMock2(): ArticleMeta {
  return {
    title: "Streamlining code reviews",
    blurb:
      "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
    date: "2023-08-06",
    slug: "streamlining-code-reviews",
    type: "article",
    tags: ["software-development", "design"],
    socialLinks: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/pulse/streamlining-code-reviews-jonathan-conway",
      },
    ],
  };
}
