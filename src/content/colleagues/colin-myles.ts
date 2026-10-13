import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework";

export const colinColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Colin Myles",
  meta: {
    slug: "colin",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/colin-myles-1b28392",
      },
    ],
  },
};
