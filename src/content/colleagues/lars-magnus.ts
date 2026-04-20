import { Colleague, SocialLinkTypes } from "@/framework/client";

export const larsMagnusColleague: Colleague = {
  type: "colleague",
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
