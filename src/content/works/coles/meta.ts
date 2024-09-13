import { WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Coles",
  blurbShort:
    "Led Frontend build of 1site for Coles Plus Account and related sign-up incentivisation features.",
  startDate: "2023-09-20",
  endDate: "2023-11-08",
  jobTitle: "Senior Frontend Engineer",
  mainImage: "thumbnail.png",
  feedbacks: [
    {
      quote:
        "“My team speak very highly about your code. Apparently your Coles Plus code is very slick.”",
      author: "Senior Software Engineer",
      date: "July 2022",
    },
    {
      quote:
        "“I wanted to say a huge thank you. You have been an integral part of the team since joining. We could not have re-launched Coles Plus without you.”",
      author: "Group Product Manager",
      date: "August 2023",
    },
    {
      quote:
        "“Congratulations ... This is a great demonstration of understanding our customer pain points and building a solution [that] rewards them for their loyalty to Coles and just in time for Christmas. Well done team!”",
      author: "General Manager",
      date: "December 2022",
    },
    {
      quote:
        "“I wanted to thank you for the contribution you made to the 1Site project, and you should be super proud of all your achievements.”",
      author: "Development Manager",
      date: "July 2023",
    },
  ],
  slug: "coles",
  tags: [],
  type: "work",
  images: [
    { imageUrl: "coles-1.png", notes: [] },
    { imageUrl: "coles-2.png", notes: [] },
    { imageUrl: "coles-3.png", notes: [] },
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
};
