import { ProjectMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "tailwindjs",
  blurb: "Tailwind as Javascript functions for intellisense and type safety",
  date: "2024-05-02",
  slug: "tailwindjs",
  tags: ["software-development"],
  type: "project",
  subType: "library",
  socialLinks: [
    {
      type: SocialLinkTypes.Github,
      url: "http://github.com/jonathanconway/tailwindjs",
    },
  ],
  mainImage: {
    src: "/images/projects/tailwindjs/main.svg",
  },
  redirectUrl: "tailwindjs",
  techs: [
    {
      categoryName: "typescript",
      items: [],
    },
    {
      categoryName: "tailwindcss",
      items: [],
    },
  ],
  platforms: ["Web"],
  images: [
    {
      src: "tailwindjs-01.gif",
      alt: "Screen recording of TailwindJS in VSCode",
      notes: [],
    },
    {
      src: "tailwindjs-01.jpeg",
      alt: "Screenshot of TailwindJS in VSCode",
      notes: [],
    },
  ],
};
