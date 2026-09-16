import { SocialLinkTypes } from "../social-link";

import { Micro } from "./micro";

export function createMicroMock(): Micro {
  return {
    type: "micro",
    content: (
      <>
        Observing the state of front end applications running in production can
        boost troubleshooting / debugging.
      </>
    ),
    meta: {
      createdDate: "2023-09-02",
      slug: "front-end-observability",
      tags: ["software-development"],
      type: "micro",
      socialLinks: [
        {
          type: SocialLinkTypes.LinkedIn,
          url: "https://linkedin.com/in/jonathanconway",
        },
        {
          type: SocialLinkTypes.GitHub,
          url: "https://linkedin.com/in/jonathanconway",
        },
      ],
    },
  };
}
