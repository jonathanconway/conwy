import { SocialLinkTypes } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenMetaTemplate = ({
  createdDate,
  slug,
  shortBlurb,
  tagsEnumNames,
  socialLinks,
  discussionLinks,
  isPinned,
}: MicroGenTemplateParams) =>
  `

import { MicroMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: MicroMeta = {
  createdDate: "${createdDate}",
  slug: "${slug}",
  shortBlurb: "${shortBlurb ?? ""}",
  tags: [
    ${tagsEnumNames.map((tagEnumName) =>
      `
      PostTags.${tagEnumName}
      `.trim(),
    )}
  ],
  socialLinks: [${socialLinks
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
  discussionLinks: [${discussionLinks
    .map((discussionLink) =>
      `
    {
      type: SocialLinkTypes.${getEnumName(SocialLinkTypes, discussionLink.type)},
      url: "${discussionLink.url}",
    }
`.trim(),
    )
    .join("\n")}
  ],
  isPinned: ${isPinned},
};

`.trim();
