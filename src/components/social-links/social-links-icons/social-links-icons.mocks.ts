import { SocialLinkTypes } from "@/framework/client";

import { SocialLinksIconsProps } from "./social-links-icons";

export function createSocialLinksPropsMock(): SocialLinksIconsProps {
  return {
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
