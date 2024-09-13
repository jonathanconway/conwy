import { WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Villa Plus",
  blurbShort:
    "Built new Resort Villas reservation UI and optimised performance.",
  startDate: "2020-02-20",
  endDate: "2024-02-20",
  jobTitle: "Technical Lead",
  mainImage: "thumbnail.png",
  feedbacks: [],
  images: [
    {
      imageUrl: "villa-plus-1.png",
      notes: [],
    },
    {
      imageUrl: "villa-plus-2.jpg",
      notes: [], //Collaborative Kan-ban-style planning on whiteboard
    },
    {
      imageUrl: "villa-plus-screencast.gif",
      notes: [],
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
};
