import { Colleague, SocialLinkTypes } from "@/framework/client";

export const markSchwanethalColleague: Colleague = {
  type: "colleague",
  fullName: "Mark Schwanethal",
  meta: {
    slug: "mark-schwanethal",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://au.linkedin.com/in/markschwanethal",
      },
    ],
  },
};
