import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Coles",
  blurbShort:
    "Led Frontend build of 1site for Coles Plus Account and related sign-up incentivisation features.",
  startDate: "2023-09-20",
  endDate: "2023-11-08",
  jobTitle: "Senior Frontend Engineer",
  mainImage: {
    src: "/images/works/coles/main.png",
  },
  feedbacks: [
    {
      content:
        "“My team speak very highly about your code. Apparently your Coles Plus code is very slick.”",
      authorTitle: "Senior Software Engineer",
      date: "2022-06-01",
    },
    {
      content:
        "“I wanted to say a huge thank you. You have been an integral part of the team since joining. We could not have re-launched Coles Plus without you.”",
      authorTitle: "Group Product Manager",
      date: "2023-08-01",
    },
    {
      content:
        "“Congratulations ... This is a great demonstration of understanding our customer pain points and building a solution [that] rewards them for their loyalty to Coles and just in time for Christmas. Well done team!”",
      authorTitle: "General Manager",
      date: "2022-12-01",
    },
    {
      content:
        "“I wanted to thank you for the contribution you made to the 1Site project, and you should be super proud of all your achievements.”",
      authorTitle: "Development Manager",
      date: "2023-07-01",
    },
  ],
  slug: "coles",
  tags: [],
  type: "work",
  images: [
    { src: "coles-1.png", title: "Delivery scheduling sidebar" },
    { src: "coles-2.png", title: "Payment screen - Payment details entry" },
    { src: "coles-3.png", title: "Payment screen - Confirmation" },
  ],
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "rtk-query",
        },
        {
          itemName: "styled-components",
        },
        {
          itemName: "mock-service-worker",
        },
        {
          itemName: "nx",
        },
      ],
    },
    {
      categoryName: "nextjs",
      items: [],
    },
    {
      categoryName: "azure",
      items: [
        {
          itemName: "devops",
        },
        {
          itemName: "app-insights",
        },
      ],
    },
    {
      categoryName: "aem",
      items: [],
    },
    {
      categoryName: "launch-darkly",
      items: [],
    },
    {
      categoryName: "chromatic",
      items: [],
    },
    {
      categoryName: "mastercard-payments-gateway",
      items: [],
    },
  ],
  projects: [
    {
      title: "Coles Plus account",
    },
    {
      title: "Edit Payment",
    },
    {
      title: "Trolley Messaging",
    },
    {
      title: "Early Access Windows",
    },
    {
      title: "Single Click Sign Up",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://coles.com.au",
      title: "Coles website",
    },
  ],
};
