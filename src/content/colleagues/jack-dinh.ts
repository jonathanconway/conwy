import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const jackDinhColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Jack Dinh",
  meta: {
    slug: "jack-dinh",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/jdinhify/",
      },
      {
        type: SocialLinkTypes.Website,
        url: "https://jdinh.life/",
      },
    ],
  },
};
