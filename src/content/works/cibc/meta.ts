import { WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "CIBC",
  blurbShort:
    "Built platform features and applications used by traders, settlements and other teams in the bank.",
  startDate: "2018-02-01",
  endDate: "2019-08-01",
  jobTitle: "Senior Software Developer",
  mainImage: "thumbnail.png",
  feedbacks: [
    {
      quote:
        "“Just wanted to let you know, great work with the Symphony stuff.”",
      author: "Executive Director, Digital Markets Initiatives",
    },
    {
      quote:
        "“Mosaic is looking good in production, well done for getting this out on time!”",
      author: "Executive Director",
    },
    {
      quote:
        "“Thanks for all your hard work on Mosaic and your attention to detail.”",
      author: "Technical Lead",
    },
  ],
  images: [],
  slug: "cibc",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "angular",
      items: [
        {
          itemName: "cdk",
        },
        {
          itemName: "ngrx",
        },
        {
          itemName: "rx-js",
        },
      ],
    },
    {
      categoryName: "c#",
      items: [
        {
          itemName: ".net-core",
        },
        {
          itemName: "web-api",
        },
      ],
    },
    {
      categoryName: "mongodb",
      items: [],
    },
    {
      categoryName: "sql-server",
      items: [],
    },
  ],
  projects: [
    {
      title: "MifIID Structured Quotes",
    },
    {
      title: "Mosaic Core",
    },
    {
      title: "Symfony Chat Bot Prototype",
    },
    {
      title: "Security UI",
    },
    {
      title: "Structured Note Quote Blotter",
    },
    {
      title: "CRM UI",
    },
    {
      title: "Collateral API Integration",
    },
  ],
};
