import { Colleague, SocialLinkTypes } from "@/framework/client";

export const andyVuColleague: Colleague = {
  type: "colleague",
  fullName: "Andy Vu",
  meta: {
    slug: "andy-vu",
    links: [
      {
        type: SocialLinkTypes.Website,
        url: "https://andyvulab.com",
      },
    ],
  },
};
