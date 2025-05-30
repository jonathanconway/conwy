import {
  PostTags,
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework/client";

export const meta: ProjectMeta = {
  title: "htmldoc",
  blurb: "Convention for adding code comments to HTML",
  date: "2017-12-03",
  slug: "htmldoc",
  tags: [PostTags.SoftwareDevelopment],
  type: "project",
  subType: ProjectSubTypes.Standard,
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://usehtmldoc.surge.sh",
    },
    {
      type: SocialLinkTypes.Github,
      url: "http://github.com/jonathanconway/htmldoc",
    },
  ],
  mainImage: {
    src: "/images/projects/htmldoc/main.svg",
  },
  redirectUrl: "htmldoc",
  techs: [
    {
      categoryName: "html",
      items: [],
    },
    {
      categoryName: "github",
      items: [],
    },
  ],
  platforms: ["Web"],
  images: [
    {
      src: "htmldoc-screenshot.png",
      alt: "Screenshot of HTMLDoc homepage",
    },
  ],
};
