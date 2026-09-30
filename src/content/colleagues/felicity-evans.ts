import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const felicityEvanColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Felicity Evans",
  meta: {
    slug: "felicity-evans",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/felicityevans",
      },
    ],
  },
};
