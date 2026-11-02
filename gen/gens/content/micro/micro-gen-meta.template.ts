import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenMetaTemplate = ({
  createdDate,
  slug,
  shortBlurb,
  tagsItems,
  socialLinksItems,
  discussionLinksItems,
  isPinned,
}: MicroGenTemplateParams) =>
  `

import { MicroMeta, PostTags, SocialLinkTypes } from "@/framework";

export const meta: MicroMeta = {
  createdDate: "${createdDate}",
  slug: "${slug}",
  shortBlurb: "${shortBlurb ?? ""}",
  tags: [${tagsItems}],
  socialLinks: [${socialLinksItems}],
  discussionLinks: [${discussionLinksItems}],
  isPinned: ${isPinned},
};

`.trim();
