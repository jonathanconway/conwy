import {
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework/client";

export const meta: ProjectMeta = {
  title: "testmatic",
  blurb: "Rapid-entry test case management system",
  date: "2024-05-01",
  slug: "testmatic",
  tags: ["software-development"],
  type: "project",
  subType: ProjectSubTypes.Tool,
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      title: "Docs",
      url: "/testmaticdocs",
    },
    {
      type: SocialLinkTypes.Website,
      title: "App",
      url: "/testmaticui",
    },
    {
      type: SocialLinkTypes.Twitter,
      url: "http://twitter.com/testmaticapp",
    },
    {
      type: SocialLinkTypes.Github,
      url: "http://github.com/jonathanconway/testmatic",
    },
  ],
  mainImage: {
    src: "/images/projects/testmatic/main.svg",
  },
  redirectUrl: "testmatic",
  techs: [
    {
      categoryName: "typescript",
      items: [],
    },
    {
      categoryName: "nodejs",
      items: [],
    },
    {
      categoryName: "react",
      items: [],
    },
  ],
  platforms: ["Web", "CLI"],
  images: [
    {
      src: "testmatic-02.gif",
      alt: "Screen recording of Testmatic CLI",
      notes: [],
    },
    {
      src: "testmatic-01.gif",
      alt: "Screen recording of Testmatic UI",
      notes: [],
    },
    {
      src: "testmatic-03.png",
      alt: "Screenshot of Testmatic UI",
      notes: [],
    },
  ],
};
