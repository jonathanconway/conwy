import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Fiserv",
  blurbShort:
    "Worked full-stack on Westpac Online Banking: payments, statements, accounts.",
  startDate: "2012-05-01",
  endDate: "2014-03-01",
  mainImage: {
    src: "/images/works/fiserv/main.png",
  },
  jobTitle: "Senior Software Developer",
  feedbacks: [
    {
      content:
        "“Jonathan was the type of developer I wish I could replicate! Hard working, dedicated, talented in all aspects of development, always a team player willing to help out and always dependable.”",
      authorTitle: "Program Director",
      date: "2014-05-04",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
    {
      content:
        "“Jonathan has an excellent web development skill, the passion to go along with it, and the dedication to finish the job no matter what. It has been a pleasure working with Jon during my tenure at Fiserv within the Westpac project.”",
      authorTitle: "Technical Lead",
      date: "2014-05-02",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
  ],
  images: [
    {
      src: "fiserv-01.jpeg",
      alt: "Staff award 1",
    },
    {
      src: "fiserv-02.jpeg",
      alt: "Staff award 2",
    },
    {
      src: "fiserv-03.gif",
      alt: "Accounts web interface",
    },
    {
      src: "fiserv-05.png",
      alt: "Make a payment web interface",
    },
    {
      src: "fiserv-04.gif",
      alt: "DSynchronize tool",
      notes: [
        {
          text: "Introduced this tool to the team, enabling them to keep in sync two versions of the product (which both needed to be simultaneously installed in development environments for the solution to function, for architectural reasons). This immediately boosted developer productivity, and continued to be used long after I left.",
        },
      ],
    },
  ],
  slug: "fiserv",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: ".NET",
      items: [
        {
          itemName: "C#",
        },
        {
          itemName: "NUnit",
        },
        {
          itemName: "WCF",
        },
        {
          itemName: "FluentValidation",
        },
        {
          itemName: "CQRS",
        },
      ],
    },
    {
      categoryName: "SQL Server",
      items: [],
    },
    {
      categoryName: "Javascript",
      items: [
        {
          itemName: "Knockout",
        },
        {
          itemName: "QUnit",
        },
      ],
    },
    {
      categoryName: "PowerShell",
      items: [],
    },
    {
      categoryName: "Teamcity",
      items: [],
    },
    {
      categoryName: "Java",
      items: [
        {
          itemName: "Spring",
        },
      ],
    },
    {
      categoryName: "Selenium",
      items: [],
    },
  ],
  projects: [
    {
      title: "Make a Payment",
    },
    {
      title: "Make a Transfer",
    },
    {
      title: "Payments back-end",
    },
    {
      title: "Accounts",
    },
    {
      title: "Payments",
    },
    {
      title: "Component library",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://fiserv.com/",
      title: "Fiserv website",
    },
  ],
};
