import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "TAL",
  blurbShort:
    "Added new features and fixes to insurance software used by sales and customer service.",
  startDate: "2011-08-01",
  endDate: "2011-11-30",
  jobTitle: ".NET Developer",
  mainImage: {
    src: "/images/works/amaysim/main.png",
  },
  feedbacks: [],
  images: [],
  slug: "tal",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: ".NET",
      items: [
        {
          itemName: "VB.NET",
        },
        {
          itemName: "WinForms",
        },
        {
          itemName: "WCF",
        },
        {
          itemName: "Wix",
        },
      ],
    },
    {
      categoryName: "VB 6.0",
      items: [],
    },
    {
      categoryName: "SQL Server",
      items: [
        {
          itemName: "T-SQL",
        },
      ],
    },
  ],
  projects: [
    {
      title: "EthIL installer",
    },
    {
      title: "InsuranceLine-TAL rename",
    },
    {
      title: "FP4",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.tal.com.au",
      title: "TAL website",
    },
  ],
};
