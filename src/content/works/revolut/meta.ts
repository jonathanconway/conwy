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
      content:
        "“Great teammate, always there to help. Asks the right questions, dives deep to understand business needs.”",
      authorTitle: "Product Owner",
      date: "2023-07-05",
    },
    {
      content:
        "“Provides methodical, well-tested and well-communicated solutions. Communicates effectively with team members and stakeholders.“",
      authorTitle: "Functional Manager",
      date: "2023-04-11",
    },
    {
      content:
        "“FYI - till now we had only positive feedbacks from analysts regarding history of notes! Never happened before 💪 great job!“",
      authorTitle: "KYB Analyst",
      date: "2020-06-01",
    },
    {
      content:
        "“Really liked Jon's feedback history story - not a massive new feature, but a simple design and delivers big value for our agents and for our customers. Should give good boost to KPI.“",
      authorTitle: "Head of Product, Business",
      date: "2020-05-07",
    },
    {
      content: "“Jonathan is a master of the Backoffice!“",
      authorTitle: "Senior Product Owner, Business",
      date: "2022-07-22",
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
          itemName: "intellij-idea",
        },
        {
          itemName: "junit",
        },
      ],
    },
    {
      categoryName: "sql",
      items: [
        {
          itemName: "postgres",
        },
      ],
    },
    {
      categoryName: "cloud",
      items: [
        {
          itemName: "gcp",
        },
      ],
    },
    {
      categoryName: "monitoring",
      items: [
        {
          itemName: "sentry",
        },
      ],
    },
    {
      categoryName: "architecture",
      items: [
        {
          itemName: "domain-driven-design",
        },
        {
          itemName: "behavior-driven-design",
        },
        {
          itemName: "event-driven",
        },
        {
          itemName: "micro-services",
        },
        {
          itemName: "micro-frontend",
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
      title: "Employee portal integration with Revelio",
    },
    {
      title: "Streaming analytics ETL integration",
    },
    {
      title:
        "Business registration Backoffice integration - Dunn & Bradstreet, Companies House",
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
