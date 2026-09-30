import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const larsMagnusColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Lars Magnus",
  meta: {
    slug: "lars-magnus",
    links: [
      {
        type: SocialLinkTypes.Website,
        url: "http://larsmagnus.co/",
      },
    ],
  },
};
