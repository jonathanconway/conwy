import { Colleague, ContentTypes, SocialLinkTypes } from "@/framework";

export const changezShaikhColleague: Colleague = {
  type: ContentTypes.Colleague,
  fullName: "Changez Shaikh",
  meta: {
    slug: "changez-shaikh",
    links: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://www.linkedin.com/in/changezshaikh",
      },
    ],
  },
};
