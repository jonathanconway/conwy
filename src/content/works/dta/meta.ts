import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "DTA",
  blurbShort:
    "Delivered designs, prototypes and components, across Web and Mobile, for the Australian Government.",
  startDate: "2016-07-01",
  endDate: "2017-05-01",
  jobTitle: "Senior Front End Engineer",
  mainImage: "thumbnail.png",
  feedbacks: [
    {
      quote:
        "“Jonathan was friendly and easy to work with. In addition to rapidly delivering prototypes, he communicated well and provided valuable input into ideation sessions.”",
      author: "Product Owner",
      date: "May 2017",
    },
    {
      quote:
        "“Jonathan ... was a passionate advocate of user-centered design; such as being active in attending user research sessions and contributing to the design process in ideation sessions.”",
      author: "Technical Architect",
      date: "March 2017",
    },
  ],
  images: [
    {
      src: "dta-1.jpg",
      alt: "Accessibility article",
      notes: [
        {
          text: "Accessibility – going beyond the guidelines. Article written in collaboration with DTA content experts and published on the DTA website.",
        },
      ],
    },
    {
      src: "dta-2.png",
      alt: "Business identity - Delegation",
      notes: [
        {
          text: "Business Identity - Delegation flow. Hand-drawn low-fidelity wireframes.",
        },
      ],
    },
    {
      src: "dta-3.png",
      alt: "Business identity - Add team member",
      notes: [
        {
          text: "Business Identity - Add team member flow. Interactive mobile prototype built in React.",
        },
      ],
    },
    {
      src: "dta-5.png",
      alt: "Business identity - Manage team members",
      notes: [
        {
          text: "Business Identity - Manage team members. Interactive mobile prototype built in React.",
        },
      ],
    },
    {
      src: "dta-screencast.gif",
      alt: "Researcher tools",
      notes: [
        {
          text: "Researcher tools for controlling prototypes during usability testing sessions. Built in React.",
        },
      ],
    },
    {
      src: "dta-4.png",
      alt: "Business identity - Technical architecture",
      notes: [
        {
          text: "Technical architecture for Business identity.",
        },
      ],
    },
  ],
  slug: "dta",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "react",
      items: [],
    },
    {
      categoryName: "react-native",
      items: [],
    },
    {
      categoryName: "angular-2",
      items: [],
    },
    {
      categoryName: "vue",
      items: [],
    },
    {
      categoryName: "golang",
      items: [],
    },
    {
      categoryName: "postgres",
      items: [],
    },
    {
      categoryName: "docker",
      items: [],
    },
    {
      categoryName: "aws",
      items: [
        {
          itemName: "s3",
        },
        {
          itemName: "ecs",
        },
      ],
    },
  ],
  projects: [
    {
      title: "GovPass prototypes",
    },
    {
      title: "Business Identity prototypes",
    },
    {
      title: "Exchange prototypes",
    },
    {
      title: "Researcher tools",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "https://conwy-dta-prototype.netlify.app",
      title: "Prototypes",
    },
    {
      type: SocialLinkTypes.Github,
      url: "https://github.com/jonathanconway/dta-reproduction",
      title: "Prototypes (Source)",
    },
    {
      type: SocialLinkTypes.Website,
      url: "http://dta.gov.au",
      title: "DTA website",
    },
    {
      type: SocialLinkTypes.Website,
      url: "https://web.archive.org/web/20180313174506/https://www.dta.gov.au/blog/Accessibility-going-beyond-the-guidelines/",
      title: "Accessibility article",
    },
  ],
};
