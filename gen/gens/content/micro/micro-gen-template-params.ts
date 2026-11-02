import { camelCase } from "lodash";
import { DateTime } from "luxon";

import {
  DateString,
  PostDiscussionLink,
  PostTags,
  SocialLink,
  SocialLinkTypes,
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
  readonly tagsItems: string;
  readonly discussionLinks: readonly PostDiscussionLink[];
  readonly socialLinksItems: string;
  readonly tagsEnumNames: readonly string[];
  readonly discussionLinksItems: string;
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

  const tagsEnumNames = tags.map((tag) => getEnumName(PostTags, tag));
  const tagsItems = tagsEnumNames
    .map((tagEnumName) =>
      `
      PostTags.${tagEnumName}
      `.trim(),
    )
    .join(",");

  const socialLinks = socialLinkUrls.map(
    (socialLinkUrl) =>
      ({
        type: parseSocialLinkTypeFromUrl(socialLinkUrl),
        url: socialLinkUrl,
      }) as SocialLink,
  );
  const socialLinksItems = socialLinks
    .map((socialLink) =>
      `
      {
        type: SocialLinkTypes.${getEnumName(SocialLinkTypes, socialLink.type)},
        url: "${socialLink.url}",
      }
  `.trim(),
    )
    .join("\n");

  const discussionLinks = discussionLinkUrls.map(
    (discussionLinkUrl) =>
      ({
        type: parseSocialLinkTypeFromUrl(discussionLinkUrl),
        url: discussionLinkUrl,
      }) as PostDiscussionLink,
  );
  const discussionLinksItems = discussionLinks
    .map((discussionLink) =>
      `
    {
      type: SocialLinkTypes.${getEnumName(SocialLinkTypes, discussionLink.type)},
      url: "${discussionLink.url}",
    }
`.trim(),
    )
    .join("\n");

  return {
    content,
    shortBlurb,

    mainLink,

    tags,
    tagsEnumNames,
    tagsItems,

    socialLinks,
    socialLinkUrls,
    socialLinksItems,

    discussionLinks,
    discussionLinkUrls,
    discussionLinksItems,

    nameRootObject,
    slug,
    createdDate,

    isPinned,
  };
}
