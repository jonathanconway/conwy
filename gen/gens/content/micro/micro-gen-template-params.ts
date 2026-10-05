import { camelCase } from "lodash";
import { DateTime } from "luxon";

import {
  DateString,
  PostDiscussionLink,
  PostTags,
  SocialLink,
  assert,
  checkIsDateString,
  parseSocialLinkTypeFromUrl,
} from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { MicroGenParams } from "./micro-gen-params";

export interface MicroGenTemplateParams extends MicroGenParams {
  readonly nameRootObject: string;
  readonly slug: string;
  readonly mainLink?: string;
  readonly socialLinks: readonly SocialLink[];
  readonly discussionLinks: readonly PostDiscussionLink[];
  readonly tagsEnumNames: readonly string[];
  readonly createdDate: DateString;
}

export function generateMicroGenTemplateParams(
  params: MicroGenParams,
): MicroGenTemplateParams {
  const {
    content,
    slug,
    shortBlurb,
    mainLink,
    tags,
    socialLinkUrls,
    discussionLinkUrls,
    isPinned,
  } = params;

  const nameRootObject = `${camelCase(slug)}Micro`;

  const createdDate = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsDateString(createdDate));

  const socialLinks = socialLinkUrls.map(
    (socialLinkUrl) =>
      ({
        type: parseSocialLinkTypeFromUrl(socialLinkUrl),
        url: socialLinkUrl,
      }) as SocialLink,
  );

  const discussionLinks = discussionLinkUrls.map(
    (discussionLinkUrl) =>
      ({
        type: parseSocialLinkTypeFromUrl(discussionLinkUrl),
        url: discussionLinkUrl,
      }) as PostDiscussionLink,
  );

  const tagsEnumNames = tags.map((tag) => getEnumName(PostTags, tag));

  return {
    content,
    shortBlurb,

    mainLink,

    socialLinkUrls,
    socialLinks,
    discussionLinkUrls,
    discussionLinks,
    tags,
    tagsEnumNames,

    nameRootObject,
    slug,
    createdDate,

    isPinned,
  };
}
