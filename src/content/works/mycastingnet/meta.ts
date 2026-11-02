import { SocialLinkTypes, WorkMeta } from "@/framework";

export const meta: WorkMeta = {
  title: "MyCastingNet",
  client: "MyCastingNet",
  blurbShort:
    "Rebuilt a TV talent management system using modern web frameworks.",
  startDate: "2011-09-01",
  endDate: "2012-02-01",
  jobTitle: "Technical Lead",
  mainImage: {
    src: "/images/works/mycastingnet/main.png",
  },
  feedbacks: [],
  images: [
    {
      src: "/images/works/mycastingnet/mycastingnet-02.png",
      title: "My Shows screen",
    },
    {
      src: "/images/works/mycastingnet/mycastingnet-01.png",
      title: "My Cast screen",
    },
    {
      src: "/images/works/mycastingnet/mycastingnet-03.png",
      title: "My Cast screen - Adding a cast member",
    },
  ],
  slug: "mycastingnet",
  tags: [],
  techs: [
    {
      categoryName: ".NET",
      items: [
        {
          itemName: "ASP.NET MVC",
        },
        {
          itemName: "SQL Azure",
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
      items: [
        {
          itemName: "jQuery",
        },
        {
          itemName: "jQuery UI",
        },
      ],
    },
    {
      categoryName: "PHP",
      items: [],
    },
  ],
  projects: [],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.mycastingnet.com",
      title: "MyCastingNet website",
    },
  ],
};
