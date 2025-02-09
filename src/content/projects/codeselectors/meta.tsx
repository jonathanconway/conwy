import {
  PostTags,
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework/client";

export const meta: ProjectMeta = {
  title: "codeselectors",
  blurb: "Convention for referencing parts of code",
  date: "2023-08-01",
  slug: "codeselectors",
  tags: [PostTags.SoftwareDevelopment],
  type: "project",
  subType: ProjectSubTypes.Standard,
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
  mainImage: {
    src: "/images/projects/codeselectors/main.svg",
  },
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
  images: [
    {
      src: "codeselectors-screenshot.png",
      alt: "Screenshot of CodeSelectors homepage",
    },
  ],
};
