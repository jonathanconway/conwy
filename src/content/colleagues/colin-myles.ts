import { Colleague, SocialLinkTypes } from "@/framework/client";

export const colinColleague: Colleague = {
  type: "colleague",
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
