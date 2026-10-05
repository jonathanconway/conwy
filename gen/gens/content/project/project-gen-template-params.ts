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
  readonly socialLinks: readonly SocialLink[];
}

export function generateProjectGenTemplateParams(
  params: ProjectGenParams,
): ProjectGenTemplateParams {
  const {
    title,
    blurb,
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

  return {
    nameRootObject,
    date,
    title,
    blurb,
    slug,

    subType,

    mainImageUrl,
    imageUrls,
    tags,

    socialLinkUrls,
    socialLinks,

    platforms,

    subTypeEnumName,
    tagsEnumNames,
    techsCategoryNames,
  };
}
