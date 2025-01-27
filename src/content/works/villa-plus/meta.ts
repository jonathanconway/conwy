import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Villa Plus",
  blurbShort:
    "Built new Resort Villas reservation UI and optimised performance.",
  startDate: "2020-02-20",
  endDate: "2024-02-20",
  jobTitle: "Technical Lead",
  mainImage: {
    src: "/images/works/villa-plus/main.png",
  },
  feedbacks: [],
  images: [
    {
      src: "villa-plus-1.png",
      title: "Date range picker, built in React - Desktop web",
    },
    {
      src: "villa-plus-screencast.gif",
      title: "Date range picker, built in React - Mobile web",
    },
    {
      src: "villa-plus-2.jpg",
      title: "Collaborative Kan-ban-style planning on whiteboard",
    },
  ],
  slug: "villa-plus",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "react",
      items: [],
    },
    {
      categoryName: "typescript",
      items: [],
    },
    {
      categoryName: "c#",
      items: [
        {
          itemName: "asp.net",
        },
        {
          itemName: "mvc",
        },
      ],
    },
    {
      categoryName: "azure",
      items: [
        {
          itemName: "app-insights",
        },
        {
          itemName: "monitor",
        },
        {
          itemName: "open-telemetry",
        },
      ],
    },
    {
      categoryName: "prismic",
      items: [],
    },
  ],
  projects: [
    {
      title: "Resort villas rebuild",
    },
    {
      title: "Reservation flow optimization",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://villaplus.com",
      title: "Villa Plus website",
    },
  ],
};
