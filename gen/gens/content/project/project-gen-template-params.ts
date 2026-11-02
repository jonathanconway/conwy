import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { SOCIAL_LINKS_DETAILS_BY_TYPE } from "@/components/social-links/social-links-details-by-type";
import {
  DateString,
  PostTags,
  ProjectSubTypes,
  SocialLink,
  SocialLinkTypes,
  assert,
  checkIsDateString,
  parseSocialLinkTypeFromUrl,
} from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { ProjectGenParams } from "./project-gen-params";

export interface ProjectGenTemplateParams extends ProjectGenParams {
  readonly nameRootObject: string;
  readonly date: DateString;

  readonly subTypeEnumName: string;

  readonly tagsEnumNames: readonly string[];
  readonly tagsItems: string;

  readonly socialLinks: readonly SocialLink[];
  readonly socialLinksItems: string;

  readonly techsCategoryItems: string;

  readonly platformsItems: string;

  readonly imageUrlsItems: string;
}

export function generateProjectGenTemplateParams(
  params: ProjectGenParams,
): ProjectGenTemplateParams {
  const {
    title,
    blurb,
    content,
    subType,
    mainImageUrl,
    imageUrls,
    tags,
    socialLinkUrls,
    techsCategoryNames,
    platforms,
  } = params;
  const nameRootObject = `${camelCase(title)}Project`;

  const slug = kebabCase(title);

  const date = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsDateString(date));

  const subTypeEnumName = getEnumName(ProjectSubTypes, subType);

  const tagsEnumNames = tags.map((tag) => getEnumName(PostTags, tag));
  const tagsItems = tagsEnumNames.map((name) => `PostTags.${name}`).join(", ");

  const socialLinks: readonly SocialLink[] = socialLinkUrls.map((url) => {
    const socialLinkType = parseSocialLinkTypeFromUrl(url);
    const type = getEnumName(SocialLinkTypes, socialLinkType);
    const title = SOCIAL_LINKS_DETAILS_BY_TYPE[socialLinkType].title;
    return {
      type,
      url,
      title,
    } as SocialLink;
  });
  const socialLinksItems = socialLinks
    .map(
      ({ type, url, title }) => `
    {
      type: SocialLinkTypes.${type},
      url: "${url}",
      title: "${title}",
    }`,
    )
    .join(",\n  ");

  const techsCategoryItems = techsCategoryNames
    .map(
      (name) => `{
      categoryName: "${name}",
      items: [],
  }`,
    )
    .join(",\n  ");

  const platformsItems = platforms
    .map((platform) => `"${platform}"`)
    .join(", ");

  const imageUrlsItems = imageUrls
    .map(
      (url) => `
    {
      src: "${url}",
      alt: "",
      notes: [],
    },`,
    )
    .join("\n    ");

  return {
    nameRootObject,
    date,
    title,
    slug,

    blurb,
    content,

    subType,

    mainImageUrl,

    tags,
    tagsItems,

    socialLinkUrls,
    socialLinks,
    socialLinksItems,

    platforms,
    platformsItems,

    subTypeEnumName,
    tagsEnumNames,

    techsCategoryNames,
    techsCategoryItems,

    imageUrls,
    imageUrlsItems,
  };
}
