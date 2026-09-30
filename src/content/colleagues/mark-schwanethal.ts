import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const markSchwanethalColleague: Colleague = {
  type: ContentTypes.Colleague,
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
