import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "COIN Software",
  blurbShort:
    "Built a Mortgage tool and work on superannuation software used by financial advisors.",
  startDate: "2010-02-01",
  endDate: "2010-05-01",
  jobTitle: ".NET Analyst Programmer",
  mainImage: {
    src: "/images/works/coin/main.png",
  },
  feedbacks: [
    {
      content:
        "“Jonathan was really easy to bounce ideas off and had a very strong understanding of UI principals and requirements; and I'd happily do another contract working with him.”",
      authorTitle: "Senior Software Developer",
      date: "2010-05-10",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
    {
      content:
        "“Jonathan is a highly skilled web developer. He gives attention to detail and is a good communicator. He has delivered his tasks under tight deadlines and look forward to working with him again.”",
      authorTitle: "Program Manager",
      date: "2010-05-01",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
  ],
  images: [],
  slug: "coin",
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
          itemName: "ASP.NET",
        },
        {
          itemName: "Dynamic Data",
        },
        {
          itemName: "Entity Framework",
        },
        {
          itemName: "NUnit",
        },
        {
          itemName: "NUnit",
        },
      ],
    },
    {
      categoryName: "SQL Server",
      items: [],
    },
  ],
  projects: [
    {
      title: "Mortgage Data Capture - Build",
    },
    {
      title: "SuperComparator - Refactoring and Fixes",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://web.archive.org/web/20091122101921/http://coinsoftware.com.au/coin-modules.html",
      title: "'Tools' factsheet",
    },
  ],
};
