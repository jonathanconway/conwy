import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Radar Communications",
  blurbShort:
    "Built Radar's homepage as a static site with pixel-perfect, cross-browser design.",
  startDate: "2011-08-01",
  endDate: "2011-11-30",
  jobTitle: "Front End Developer",
  mainImage: {
    src: "/images/works/radar-comms/radar-logo.png",
  },
  feedbacks: [],
  images: [
    {
      src: "website-capture.png",
    },
  ],
  slug: "radar-comms",
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
  ],
  projects: [],
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "https://github.com/jonathanconway/radarcomms2011",
    },
  ],
};
