import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const andyVuColleague: Colleague = {
  type: ContentTypes.Colleague,
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
