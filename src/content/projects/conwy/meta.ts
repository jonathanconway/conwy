import { ProjectMeta, ProjectSubTypes } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "conwy.co",
  blurb: "My personal website, blog and portfolio",
  date: "2024-02-01",
  slug: "conwy",
  tags: [],
  type: "project",
  subType: ProjectSubTypes.Website,
  socialLinks: [],
  mainImage: {
    src: "/images/projects/conwy/main.svg",
  },
  redirectUrl: "conwy",
  images: [],
  platforms: ["Web", "Mobile Web"],
  techs: [
    {
      categoryName: "HTML",
      items: [],
    },
    {
      categoryName: "CSS",
      items: [
        {
          itemName: "Vanilla Extract",
        },
        {
          itemName: "TailwindCSS",
        },
      ],
    },
    {
      categoryName: "Javascript",
      items: [
        {
          itemName: "Transformers.js",
        },
        {
          itemName: "marked",
        },
        {
          itemName: "prismjs",
        },
      ],
    },
    {
      categoryName: "Typescript",
      items: [],
    },
    {
      categoryName: "NextJS",
      items: [
        {
          itemName: "MDX",
        },
      ],
    },
  ],
};
