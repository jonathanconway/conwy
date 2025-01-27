import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "amaysim",
  blurbShort: "Built Serverless foundations for MyDevices + Devices API.",
  startDate: "2020-02-20",
  endDate: "2024-02-20",
  jobTitle: "Senior Software Developer",
  mainImage: {
    src: "/images/works/amaysim/main.png",
  },
  feedbacks: [],
  images: [
    {
      src: "amaysim-01.jpg",
      title: "MyDevices portal",
    },
  ],
  slug: "amaysim",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "aws",
      items: [
        {
          itemName: "lambda",
        },
        {
          itemName: "s3",
        },
        {
          itemName: "iam",
        },
        {
          itemName: "cloudformation",
        },
      ],
    },
    {
      categoryName: "react",
      items: [],
    },

    {
      categoryName: "nodejs",
      items: [],
    },
  ],
  projects: [
    {
      title: "MyDevices",
    },
    {
      title: "Devices API",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.amaysim.com.au",
      title: "Amaysim website",
    },
  ],
};
