import { SocialLinkTypes } from "../social-link";

import { Micro } from "./micro";

export function createMicroMock(): Micro {
  return {
    type: "micro",
    meta: {
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
    },
  };
}
