import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const jinderColleague: Colleague = {
  type: ContentTypes.Colleague,
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
