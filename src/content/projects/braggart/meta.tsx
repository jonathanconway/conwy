import { ProjectMeta, ProjectSubTypes } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "braggart",
  blurb: "Track your work metrics effortlessly",
  date: "2024-03-01",
  slug: "braggart",
  tags: [],
  type: "project",
  subType: ProjectSubTypes.Tool,
  socialLinks: [
    {
      type: "github",
      url: "https://github.com/jonathanconway/braggart",
    },
  ],
  mainImage: "main.svg",
  redirectUrl: "braggart",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "chakra-ui",
        },
        {
          itemName: "react-hook-form",
        },
        {
          itemName: "vite",
        },
      ],
    },
  ],
  platforms: ["Web"],
  images: [
    {
      src: "braggart-4.png",
      alt: "Home screen - Wireframe",
      notes: [],
    },
    {
      src: "braggart-3.png",
      alt: "Add brag - Wireframe",
      notes: [],
    },
    {
      src: "braggart-1.png",
      alt: "Home screen - Screenshot",
      notes: [],
    },
    {
      src: "braggart-2.png",
      alt: "Add brag screen - Screenshot",
      notes: [],
    },
  ],
};
