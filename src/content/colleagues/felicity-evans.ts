import { Colleague, SocialLinkTypes } from "@/framework/client";

export const felicityEvanColleague: Colleague = {
  type: "colleague",
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
