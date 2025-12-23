import { SocialLinkTypes } from "../social-link";

import { Colleague } from "./colleague";

export function createColleagueMock1(): Colleague {
  return {
    type: "colleague",
    fullName: "First Colleague",
    meta: {
      slug: "first-colleague",
      links: [
        {
          type: SocialLinkTypes.LinkedIn,
          url: "https://linkedin.com/in/first-colleague",
        },
      ],
    },
  };
}

export function createColleagueMock2(): Colleague {
  return {
    type: "colleague",
    fullName: "Second Colleague",
    meta: {
      slug: "second-colleague",
      links: [
        {
          type: SocialLinkTypes.LinkedIn,
          url: "https://linkedin.com/in/second-colleague",
        },
      ],
    },
  };
}
