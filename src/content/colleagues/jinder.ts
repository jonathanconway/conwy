import { Colleague, SocialLinkTypes } from "@/framework/client";

export const jinderColleague: Colleague = {
  type: "colleague",
  fullName: "Jinder Sidhu",
  meta: {
    slug: "jinder",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/jinder",
      },
    ],
  },
};
