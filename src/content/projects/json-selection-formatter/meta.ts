import {
  PostTags,
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework/client";

export const meta: ProjectMeta = {
  title: "JSON Selection Formatter",
  blurb:
    "Chrome extension that unescapes, formats and syntax-highlights any piece of JSON selected in a web page.",
  date: "2026-10-03",
  slug: "json-selection-formatter",
  tags: [PostTags.SoftwareDevelopment],
  subType: ProjectSubTypes.Tool,
  mainImage: {
    src: "/images/projects/json-selection-formatter/json-selection-formatter.png",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://chromewebstore.google.com/detail/format-selected-json/fnkpkdgghhniojemjaefijfdfenabmbe",
      title: "Chrome Web Store Page",
    },
    {
      type: SocialLinkTypes.GitHub,
      url: "https://github.com/jonathanconway/json-selection-formatter",
    },
  ],
  techs: [
    {
      categoryName: "AI",
      items: [
        {
          itemName: "Claude Code Opus 5.5",
        },
      ],
    },
    {
      categoryName: "Javascript",
      items: [],
    },
  ],
  platforms: ["Chrome"],
  images: [
    {
      src: "json-selection-formatter-store-screen-recording-1.gif",
      alt: "Screen recording of right click menu with Format selected JSON menu item and JSON formatted output in Chrome Browser",
      notes: [],
    },
    {
      src: "json-selection-formatter-store-screenshot-1.png",
      alt: "Screenshot of right click menu with Format selected JSON menu item in Chrome Browser",
      notes: [],
    },
    {
      src: "json-selection-formatter-store-screenshot-2.png",
      alt: "Screenshot of JSON formatted output in Chrome Browser",
      notes: [],
    },
  ],
};
