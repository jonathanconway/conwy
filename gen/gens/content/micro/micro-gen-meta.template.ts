import { SocialLinkTypes } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenMetaTemplate = ({
  slug,
  createdDate,
  tagsEnumNames,
  socialLinks,
}: MicroGenTemplateParams) =>
  `

import { MicroMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: MicroMeta = {
  createdDate: "${createdDate}",
  slug: "${slug}",
  tags: [
    ${tagsEnumNames.map((tagEnumName) =>
      `
      PostTags.${tagEnumName}
      `.trim(),
    )}
  ],
  socialLinks: [
  ${socialLinks
    .map((socialLink) =>
      `
    {
      type: SocialLinkTypes.${getEnumName(SocialLinkTypes, socialLink.type)},
      url: "${socialLink.url}",
    }
`.trim(),
    )
    .join("\n")}
  ],
};

`.trim();
