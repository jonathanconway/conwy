import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Big W",
  blurbShort:
    "Implemented cost and time saving features on Pronto app, used by in-store and delivery teams.",
  startDate: "2026-02-01",
  endDate: "2026-08-18",
  jobTitle: "Full Stack Engineer",
  mainImage: {
    src: "/images/works/bigw/main.png",
  },
  feedbacks: [],
  images: [
    {
      src: "bigw-01.png",
      title: "Team member devices",
    },
  ],
  slug: "bigw",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "storybook",
        },
        {
          itemName: "material-ui",
        },
        {
          itemName: "jest",
        },
        {
          itemName: "react-testing-library",
        },
      ],
    },
    {
      categoryName: "typescript",
      items: [
        {
          itemName: "openapi-typescript-codegen",
        },
      ],
    },
    {
      categoryName: ".net",
      items: [
        {
          itemName: "c#",
        },
        {
          itemName: "temporal",
        },
        {
          itemName: "swashbuckle",
        },
        {
          itemName: "polly",
        },
        {
          itemName: "saunter",
        },
      ],
    },
    {
      categoryName: "azure",
      items: [
        { itemName: "devops" },
        { itemName: "functions" },
        { itemName: "monitor" },
      ],
    },
    {
      categoryName: "monitoring",
      items: [
        {
          itemName: "sentry",
        },
        {
          itemName: "dynatrace",
        },
      ],
    },
    {
      categoryName: "ai",
      items: [
        {
          itemName: "claude-code",
        },
        {
          itemName: "github-copilot",
        },
        {
          itemName: "google-antigravity",
        },
      ],
    },
    {
      categoryName: "architecture",
      items: [
        {
          itemName: "micro-front-ends",
        },
        {
          itemName: "micro-services",
        },
        {
          itemName: "event-based",
        },
        {
          itemName: "durable-workflows",
        },
      ],
    },
  ],
  projects: [
    { title: "Pronto improvements" },
    { title: "Fulfilment optimisations" },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.bigw.com.au",
      title: "BigW Website",
    },
  ],
  colleagueRelationships: [],
};
