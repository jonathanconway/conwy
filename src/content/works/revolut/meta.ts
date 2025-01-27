import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Revolut",
  blurbShort:
    "Owned Business Backoffice, onboarding >10k businesses monthly during fast growth.",
  startDate: "2020-02-20",
  endDate: "2024-02-20",
  jobTitle: "Senior Frontend Engineer",
  mainImage: {
    src: "/images/works/revolut/main.png",
  },
  feedbacks: [
    {
      quote:
        "“Great teammate, always there to help. Asks the right questions, dives deep to understand business needs.”",
      author: "Product Owner",
    },
    {
      quote:
        "“Provides methodical, well-tested and well-communicated solutions. Communicates effectively with team members and stakeholders.“",
      author: "Functional Manager",
    },
    {
      quote:
        "“FYI - till now we had only positive feedbacks from analysts regarding history of notes! Never happened before 💪 great job!“",
      author: "KYB Analyst",
    },
  ],
  images: [
    {
      src: "revolut-1.png",
      title: "Revolut Business - Product page",
    },
    {
      src: "revolut-2.png",
      title: "Revolut Business - Onboarding - Shareholders editor",
    },
    {
      src: "revolut-3.webp",
      title: "Revolut Business - Accounts view",
    },
  ],
  slug: "revolut",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "react-query",
        },
        {
          itemName: "styled-system",
        },
        {
          itemName: "redux",
        },
      ],
    },
    {
      categoryName: "typescript",
      items: [
        {
          itemName: "ramda",
        },
        {
          itemName: "zod",
        },
        {
          itemName: "msw",
        },
      ],
    },
    {
      categoryName: "java",
      items: [
        {
          itemName: "jooq",
        },
        {
          itemName: "spark",
        },
        {
          itemName: "jetty",
        },
        {
          itemName: "newrelic",
        },
        {
          itemName: "jupiter",
        },
        {
          itemName: "mockito",
        },
        {
          itemName: "spock",
        },
        {
          itemName: "groovy",
        },
        {
          itemName: "junit",
        },
      ],
    },
    {
      categoryName: "sql",
      items: [],
    },
    {
      categoryName: "architecture",
      items: [
        {
          itemName: "ddd",
        },
        {
          itemName: "bdd",
        },
        {
          itemName: "event-driven",
        },
        {
          itemName: "micro-services",
        },
        {
          itemName: "monolith",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Agent aggregated chat",
    },
    {
      title: "Region-sensitive messaging",
    },
    {
      title: "Contextual history",
    },
    {
      title: "Termination cross-check",
    },
    {
      title: "Shared devices listing",
    },
    {
      title: "Decoupling checks from Backend",
    },
    {
      title: "Ticket routing for junior escalation",
    },
    {
      title: "Hierarchical shareholder editor",
    },
    {
      title: "Document folder management",
    },
    {
      title: "Region-specific features",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.revolut.com/business/",
      title: "Revolut Business website",
    },
  ],
};
