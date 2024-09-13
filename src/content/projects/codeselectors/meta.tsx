import { ProjectMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "codeselectors",
  blurb: "Convention for referencing parts of code.",
  date: "2023-08-01",
  slug: "codeselectors",
  tags: ["software-development"],
  type: "project",
  subType: "standard",
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://usecodeselectors.surge.sh/",
    },
    {
      type: SocialLinkTypes.Github,
      url: "http://github.com/jonathanconway/code-selectors",
    },
  ],
  mainImage: "main.svg",
  redirectUrl: "codeselectors",
  techs: [
    {
      categoryName: "html",
      items: [],
    },
    {
      categoryName: "vs-code",
      items: [],
    },
  ],
  platforms: ["Web", "VSCode"],
  images: [],
};
