import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework/client";

export const mattVioliColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Matt Violi",
  meta: {
    slug: "matt-violi",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/matthew-violi",
      },
    ],
  },
};
