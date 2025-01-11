import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Refugee Connect",
  blurbShort:
    "Prototyped an app to help refugees connect with local people and institutions",
  startDate: "2016-06-01",
  endDate: "2016-12-01",
  jobTitle: "Interaction Designer",
  mainImage: {
    src: "/images/works/refugee-connect/main.png",
  },
  feedbacks: [
    {
      quote:
        "The Refugee Connect proposal was judged the winner, out of 20+ others, by a panel of aid agencies, incl. Amnesty International.",
    },
  ],
  images: [
    {
      src: "refugee-connect-1.png",
      alt: "Desktop prototype",
      notes: [],
    },
    {
      src: "refugee-connect-2.png",
      alt: "Mobile prototype",
      notes: [],
    },
  ],
  slug: "refugee-connect",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "angular-1.3",
      items: [],
    },
    {
      categoryName: "javascript",
      items: [],
    },
    {
      categoryName: "photoshop",
      items: [],
    },
  ],
  projects: [],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://refugee-connect.surge.sh",
      title: "Online prototype",
    },
  ],
};
