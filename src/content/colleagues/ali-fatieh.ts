import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework";

export const aliFathiehColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Ali Fathieh",
  meta: {
    slug: "ali-fatieh",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/alifalif",
      },
    ],
  },
};
