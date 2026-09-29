import { camelCase } from "lodash";
import { DateTime } from "luxon";

import {
  DateString,
  PostTags,
  SocialLink,
  assert,
  checkIsValidDateString,
  parseSocialLinkTypeFromUrl,
} from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { MicroGenParams } from "./micro-gen-params";

export interface MicroGenTemplateParams extends MicroGenParams {
  readonly nameRootObject: string;
  readonly slug: string;
  readonly mainLink?: string;
  readonly socialLinks: readonly SocialLink[];
  readonly tagsEnumNames: readonly string[];
  readonly createdDate: DateString;
}

export function generateMicroGenTemplateParams(
  params: MicroGenParams,
): MicroGenTemplateParams {
  const { content, slug, mainLink, tags, socialLinkUrls } = params;

  const nameRootObject = `${camelCase(slug)}Micro`;

  const createdDate = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsValidDateString(createdDate));

  const socialLinks = socialLinkUrls.map(
    (socialLinkUrl) =>
      ({
        type: parseSocialLinkTypeFromUrl(socialLinkUrl),
        url: socialLinkUrl,
      }) as SocialLink,
  );

  const tagsEnumNames = tags.map((tag) => getEnumName(PostTags, tag));

  return {
    content,
    mainLink,

    socialLinkUrls,
    socialLinks,
    tags,
    tagsEnumNames,

    nameRootObject,
    slug,
    createdDate,
  };
}
