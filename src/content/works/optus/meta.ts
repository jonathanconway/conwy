import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Optus",
  blurbShort:
    "Built SubHub Agent frontend and parts of SubHub and Credit Offer backend.",
  startDate: "2023-09-20",
  endDate: "2024-03-22",
  jobTitle: "Senior Backend Engineer",
  mainImage: {
    src: "/images/works/optus/main.png",
  },
  feedbacks: [
    {
      quote:
        "Positive feedback from Lead and Senior Developers on my\n full-stack work and problem-solving at late hours.",
    },
  ],
  slug: "optus",
  tags: [],
  type: "work",
  images: [
    {
      src: "optus-1.svg",
      title: "Agent SubHub - Main screen",
      notes: [
        {
          text: "In addition to building the whole front-end, implemented back-end calculation logic for the savings and total.",
          hotspot: {
            x: "2%",
            y: "27%",
          },
        },
        {
          text: "Implemented subscription add/remove logic on the back-end",
          hotspot: {
            x: "30%",
            y: "31%",
          },
        },
      ],
    },
    { src: "optus-2.svg", title: "SubHub - Subscription eligibility popup" },
    { src: "optus-3.png", title: "Credit Offer - Solution design" },
  ],
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "swr",
        },
        {
          itemName: "jotai",
        },
        {
          itemName: "tailwind",
        },
      ],
    },
    {
      categoryName: "aws",
      items: [
        {
          itemName: "lambda",
        },
        {
          itemName: "cognito",
        },
        {
          itemName: "dynamo-db",
        },
        {
          itemName: "sns",
        },
      ],
    },
    {
      categoryName: "nextjs",
      items: [],
    },
  ],
  projects: [
    {
      title: "SubHub Google integration",
    },
    {
      title: "Agent SubHub",
    },
    {
      title: "Credit offer notification",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://subhub.optus.com.au",
      title: "Optus SubHub website",
    },
  ],
};
