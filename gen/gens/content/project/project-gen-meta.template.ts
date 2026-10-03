import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectGenMetaTemplate = ({
  slug,
  title,
  blurb,
  date,
  mainImageUrl,
  socialLinks,
  tagsEnumNames,
  techsCategoryNames,
  platforms,
  imageUrls,
}: ProjectGenTemplateParams) =>
  `

import {
  PostTags,
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework/client";

export const meta: ProjectMeta = {
  title: "${title}",
  blurb: "${blurb}",
  date: "${date}",
  slug: "${slug}",
  tags: [${tagsEnumNames.map((name) => `PostTags.${name}`).join(", ")}],
  subType: ProjectSubTypes.Tool,
  mainImage: {
    src: "${mainImageUrl}",
  },
  socialLinks: [${socialLinks
    .map(
      ({ type, url, title }) => `
    {
      type: SocialLinkTypes.${type},
      url: "${url}",
      title: "${title}",
    }`,
    )
    .join(",\n  ")}
  ],
  techs: [${techsCategoryNames
    .map(
      (name) => `{
      categoryName: "${name}",
      items: [],
  }`,
    )
    .join(",\n  ")}
  ],
  platforms: [${platforms.map((platform) => `"${platform}"`).join(", ")}],
  images: [${imageUrls
    .map(
      (url) => `
    {
      src: "${url}",
      alt: "",
      notes: [],
    },`,
    )
    .join("\n    ")}]
};

`.trim();
