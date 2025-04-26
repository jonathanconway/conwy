import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Service NSW",
  blurbShort:
    "Led development of MyServiceNSW front-end, working with design, infrastructure and service providers.",
  startDate: "2015-03-01",
  endDate: "2016-07-01",
  jobTitle: "Front End Practice Lead",
  mainImage: {
    src: "/images/works/service-nsw/main.png",
  },
  feedbacks: [
    {
      content:
        "“I gave JC responsibility for extensive liaison with the Digital Team and we were able to get a GO from them as a result. I recommend JC for any similar role.”",
      authorTitle: "Project Manager",
      date: "2015-11-12",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
  ],
  images: [
    {
      src: "service-nsw-1.png",
      alt: "Create Account flow",
      notes: [],
    },
    {
      src: "service-nsw-2.jpg",
      alt: "Linking government services such as RMS and Birth Deaths & Marriages",
      notes: [],
    },
    {
      src: "service-nsw-3.jpg",
      alt: "MyServiceNSW Dashboard",
      notes: [],
    },
  ],
  slug: "service-nsw",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "Angular 1.3",
      items: [],
    },
    {
      categoryName: "Salesforce",
      items: [
        {
          itemName: "Apex",
        },
        {
          itemName: "lightning",
        },
      ],
    },
  ],
  projects: [
    {
      title: "MyServiceNSW",
    },
    {
      title: "Check Demerit Points",
    },
    {
      title: "Renew Vehicle Registration",
    },
    {
      title: "View Vehicle History",
    },
    {
      title: "National Parks Pass",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://service.nsw.gov.au",
      title: "ServiceNSW website",
    },
  ],
};
