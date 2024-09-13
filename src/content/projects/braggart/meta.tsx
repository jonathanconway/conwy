import { ProjectMeta } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "braggart",
  blurb: "Track your work metrics effortlessly",
  date: "2024-03-01",
  slug: "braggart",
  tags: [],
  type: "project",
  subType: "tool",
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
      imageUrl: "braggart-4.png",
      title: "Home screen - Wireframe",
      notes: [],
    },
    {
      imageUrl: "braggart-3.png",
      title: "Add brag - Wireframe",
      notes: [],
    },
    {
      imageUrl: "braggart-1.png",
      title: "Home screen - Screenshot",
      notes: [],
    },
    {
      imageUrl: "braggart-2.png",
      title: "Add brag screen - Screenshot",
      notes: [],
    },
  ],
};
