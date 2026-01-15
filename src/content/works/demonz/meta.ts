import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "EPA / Demonz",
  blurbShort:
    "Worked full-stack on the CRC app for municipal waste disposal tracking for NSW EPA.",
  startDate: "2014-07-01",
  endDate: "2015-08-01",
  jobTitle: "Senior Software Developer",
  mainImage: {
    src: "/images/works/demonz/main.png",
  },
  feedbacks: [
    {
      content: "“I had a quick play; all works seamlessly and easy to use.”",
      authorTitle: "Project Sponsor",
      date: "2015-08-01",
    },
  ],
  images: [
    {
      src: "demonz-1.jpg",
      title: "Configuration - Inventory screen",
    },
    {
      src: "demonz-2.jpg",
      title: "Data Entry - Receptacles On Site Count",
    },
    {
      src: "demonz-3.jpg",
      title: "Reporting - Contractor Pricing",
    },
  ],
  slug: "demonz",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "angular-1.3",
      items: [],
    },
    {
      categoryName: "bootstrap",
      items: [],
    },
    {
      categoryName: "c#",
      items: [],
    },
    {
      categoryName: "breeze-js",
      items: [],
    },
    {
      categoryName: "Azure RP",
      items: [],
    },
  ],
  projects: [
    {
      title: "EPA CRC",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.demonzmedia.com",
      title: "Demonz Media website",
    },
  ],
};
