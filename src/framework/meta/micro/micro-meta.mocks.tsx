import { ArticleMeta } from "../article/article-meta";
import { SocialLinkTypes } from "../social-link";

import { MicroMeta } from "./micro-meta";

export function createMicroMetaMock(): MicroMeta {
  return {
    title: "Front end observability",
    blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
    date: "2023-09-02",
    slug: "front-end-observability",
    tags: ["software-development"],
    type: "micro",
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
