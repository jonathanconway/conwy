import {
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework/client";

export const meta: ProjectMeta = {
  title: "eatpaylove",
  blurb: "Keep your diet and your pocketbook happy",
  date: "2019-05-01",
  slug: "eatpaylove",
  tags: [],
  type: "project",
  subType: ProjectSubTypes.Tool,
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
  mainImage: {
    src: "/images/projects/eatpaylove/main.svg",
  },
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
      src: "eatpaylove-01.png",
      alt: "EatPayLove - Mobile web app",
      notes: [],
    },
  ],
};
