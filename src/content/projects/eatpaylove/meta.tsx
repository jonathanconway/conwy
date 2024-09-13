import { ProjectMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "eatpaylove",
  blurb: "Keep your diet and your pocketbook happy",
  date: "2019-05-01",
  slug: "eatpaylove",
  tags: [],
  type: "project",
  subType: "tool",
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://eatpaylove.surge.sh",
    },
    {
      type: SocialLinkTypes.ProductHunt,
      url: "https://www.producthunt.com/products/eatpaylove",
    },
    {
      type: SocialLinkTypes.Github,
      url: "https://github.com/jonathanconway/braggart",
    },
  ],
  mainImage: "main.svg",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "styled-components",
        },
        {
          itemName: "flow",
        },
      ],
    },
  ],
  platforms: ["Mobile Web"],
  images: [
    {
      imageUrl: "eatpaylove-01.png",
      title: "EatPayLove - Mobile web app",
      notes: [],
    },
  ],
};
