import { SocialLinkTypes } from "../social-link";

import { Colleague } from "./colleague";

export const COLLEAGUE_MOCK_1: Colleague = {
  slug: "first-colleague",
  fullName: "First Colleague",
  links: [
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://linkedin.com/in/first-colleague",
    },
  ],
};

export const COLLEAGUE_MOCK_2: Colleague = {
  slug: "second-colleague",
  fullName: "Second Colleague",
  links: [
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://linkedin.com/in/second-colleague",
    },
  ],
};
