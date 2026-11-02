import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectGenMetaTemplate = ({
  title,
  blurb,
  date,
  slug,
  tagsItems,
  subTypeEnumName,
  mainImageUrl,
  socialLinksItems,
  techsCategoryItems,
  platformsItems,
  imageUrlsItems,
}: ProjectGenTemplateParams) =>
  `

import {
  PostTags,
  ProjectMeta,
  ProjectSubTypes,
  SocialLinkTypes,
} from "@/framework";

export const meta: ProjectMeta = {
  title: "${title}",
  blurb: "${blurb}",
  date: "${date}",
  slug: "${slug}",
  tags: [${tagsItems}],
  subType: ProjectSubTypes.${subTypeEnumName},
  mainImage: {
    src: "${mainImageUrl}",
  },
  socialLinks: [${socialLinksItems}],
  techs: [${techsCategoryItems}],
  platforms: [${platformsItems}],
  images: [${imageUrlsItems}]
};

`.trim();
