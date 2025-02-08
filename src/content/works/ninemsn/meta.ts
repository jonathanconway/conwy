import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "ninemsn",
  blurbShort: "Developed MSN New Zealand site and OptusZoo components",
  startDate: "2007-06-01",
  endDate: "2008-06-01",
  jobTitle: "Front End Developer",
  mainImage: {
    src: "/images/works/ninemsn/main.png",
  },
  feedbacks: [
    {
      content:
        "“Jonathan is proactive, efficient and approachable. He was always on top of tasks and delivered the highest quality work and solutions. It was a pleasure working with Jonathan - I recommend Jonathan without hesitation.”",
      authorTitle: "Program Manager",
      date: "2009-05-07",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
    {
      content:
        "“Worked with Jonathan a few years ago at Ninemsn, while he was on the NZ project. A smart developer who has a wide range of skills in both user experience & .Net development. Someone who delivers great work and willing to share all his knowledge with his team members. Looking forward to work with you again in the near future.”",
      authorTitle: "Senior Developer",
      date: "2011-06-14",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
  ],
  images: [
    {
      src: "ninemsn-01.jpg",
      title: "NineMSN NZ Olympics page",
      notes: [
        {
          text: "Pixel-perfect and Internet Explorer 6.0 compatible",
        },
      ],
    },
  ],
  slug: "ninemsn",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "HTML",
      items: [],
    },
    {
      categoryName: "CSS",
      items: [],
    },
    {
      categoryName: "Javascript",
      items: [],
    },
    {
      categoryName: ".NET",
      items: [
        {
          itemName: "ASP.NET",
        },
        {
          itemName: "VB.NET",
        },
      ],
    },
    {
      categoryName: "SQL Server",
      items: [
        {
          itemName: "T-SQL",
        },
      ],
    },
  ],
  projects: [
    {
      title: "MSN New Zealand",
    },
    {
      title: "OptusZOO",
    },
    {
      title: "Media Inventory System",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://ninemsn.com.au",
      title: "NineMSN website",
    },
  ],
};
