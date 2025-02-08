import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Razorfish",
  blurbShort:
    "Worked on Channel[v] streaming media platform and built Aussie Freefall campaign.",
  startDate: "2008-11-01",
  endDate: "2009-01-01",
  jobTitle: "Senior .NET Developer",
  mainImage: {
    src: "/images/works/razorfish/main.svg",
  },
  feedbacks: [
    {
      content:
        "“I had the pleasure of interviewing, recommending and working with Jonathan at the beginning of a large software project. He is a keen listener and offered practical solutions. Jonathan is a pragmatic programmer who would be a good hire for your next project.”",
      authorTitle: "Technical Lead",
      date: "2009-04-15",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
    {
      content:
        "“I got to know Jonathan at Amnesia. It was a pleasure working with Jonathan on the Channel V project. He is a great communicator and a very capable developer who can implement requirements to a point where exceed clients expectations.”",
      authorTitle: "Senior Developer",
      date: "2009-03-29",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
  ],
  images: [
    {
      src: "razorfish-01.jpg",
      alt: "Aussie Homeloans Freefall campaign",
      notes: [],
    },
    {
      src: "razorfish-02.jpg",
      alt: "Channel[v] / vMusic website",
      notes: [],
    },
  ],
  slug: "razorfish",
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
          itemName: "WCF",
        },
        {
          itemName: "Castle Windsor",
        },
        {
          itemName: "NVelocity",
        },
      ],
    },
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
      categoryName: "SiteFinity CMS",
      items: [],
    },
    {
      categoryName: "FABridge",
      items: [],
    },
  ],
  projects: [
    {
      title: "Channel[v]",
    },
    {
      title: "Aussie FreeFall campaign",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://web.archive.org/web/20101228031105/https://amnesiarazorfish.com.au/",
      title: "Razorfish website",
    },
    {
      type: SocialLinkTypes.Website,
      url: "https://www.campaignasia.com/article/aussie-home-loan-aussie-freefall-challenge-australia/209245",
      title: "AussieFreeFall release",
    },
  ],
};
