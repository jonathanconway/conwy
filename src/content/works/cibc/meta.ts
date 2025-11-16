import { colinColleague, jinderColleague } from "@/content/colleagues";
import {
  ColleagueRelationshipTypes,
  SocialLinkTypes,
  WorkMeta,
} from "@/framework/client";

export const meta: WorkMeta = {
  client: "CIBC",
  blurbShort:
    "Built platform features and applications used by traders, settlements and other teams in the bank.",
  startDate: "2018-02-01",
  endDate: "2019-08-01",
  jobTitle: "Senior Software Developer",
  mainImage: {
    src: "/images/works/cibc/main.png",
  },
  feedbacks: [
    {
      content: "“That demo went really well, well done!”",
      authorTitle: "Executive Director, Digital Markets Initiatives",
      date: "2018-05-31",
    },
    {
      content:
        "“Just wanted to let you know, great work with the Symphony stuff.”",
      authorTitle: "Executive Director, Digital Markets Initiatives",
      date: "2018-03-01",
    },
    {
      content:
        "“Mosaic is looking good in production, well done for getting this out on time!”",
      authorTitle: "Executive Director",
      date: "2018-03-26",
    },
    {
      content:
        "“Thanks for all your hard work on Nexus, and your attention to detail.”",
      authorTitle: "Technical Lead",
      date: "2019-06-26",
    },
    {
      content:
        "“Thanks for all your work on the Security UI. You did a great job working through the detailed and endless specifications!”",
      authorTitle: "Senior Developer",
      date: "2019-06-26",
    },
  ],
  images: [],
  slug: "cibc",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "angular",
      items: [
        {
          itemName: "cdk",
        },
        {
          itemName: "ngrx",
        },
        {
          itemName: "rx-js",
        },
      ],
    },
    {
      categoryName: "c#",
      items: [
        {
          itemName: ".net-core",
        },
        {
          itemName: "web-api",
        },
      ],
    },
    {
      categoryName: "mongodb",
      items: [],
    },
    {
      categoryName: "sql-server",
      items: [],
    },
  ],
  projects: [
    {
      title: "MifIID Structured Quotes",
    },
    {
      title: "Mosaic Core",
    },
    {
      title: "Symfony Chat Bot Prototype",
    },
    {
      title: "Security UI",
    },
    {
      title: "Structured Note Quote Blotter",
    },
    {
      title: "CRM UI",
    },
    {
      title: "Collateral API Integration",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.cibc.co.uk",
      title: "CIBC website",
    },
  ],
  colleagueRelationships: [
    {
      colleague: jinderColleague,
      relationshipType: ColleagueRelationshipTypes.Mentor,
    },
    {
      colleague: colinColleague,
      relationshipType: ColleagueRelationshipTypes.Manager,
    },
  ],
};
