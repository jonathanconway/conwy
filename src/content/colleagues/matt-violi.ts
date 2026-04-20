import { Colleague, SocialLinkTypes } from "@/framework/client";

export const mattVioliColleague: Colleague = {
  type: "colleague",
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
