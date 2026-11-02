import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { CommunityGenTemplateParams } from "./community-gen-template-params";

export const communityGenBlurbShortMdxTemplate = ({
  shortBlurb = MDX_TEXT_HERE_TOKEN,
}: CommunityGenTemplateParams) =>
  `

${shortBlurb}

`.trim();
